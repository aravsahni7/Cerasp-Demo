import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION ---
const GEMINI_API_KEY = "";

const CERASP_CONTEXT = `
You are the AI assistant for CERASP. 

STRICTLY ADHERE TO THE FOLLOWING:
- You are knowledgeable about CERASP's services, equipment, expertise, and contact information.
- Provide accurate, concise, and relevant answers based on CERASP's offerings.
- If a question is outside your scope, respond politely that you cannot assist with that.
- Always maintain a professional and helpful tone.

STRICT FORMATTING RULES:
1. Do NOT use markdown symbols like stars (***), hashes (#), or dollar signs ($).
2. Do NOT use bold or italics. Use plain, clean text only.
3. Be clear and concise. Answer the specific question asked. 
4. Do NOT provide extra background information or unrelated explanations.
5. If a list is needed, use simple dashes (-) instead of bullet points.
6. Use the user's language (English/French).

Location: 21 275, chemin Lakeshore, Sainte-Anne-de-Bellevue, QC H9X 3L9.
Contact: (514) 457-6610 | info@cerasp.ca.
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
      { role: 'bot', text: 'Hello! How can I help you with your pharmaceutical innovation project today?' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
    }, [isOpen]);
  
    useEffect(() => {
      if (!isLoading && isOpen) inputRef.current?.focus();
    }, [isLoading, isOpen]);
  
    useEffect(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, isLoading]);
  
    const handleSendMessage = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputValue.trim() || isLoading) return;
    
      const userText = inputValue.trim();
      setMessages((prev) => [...prev, { role: 'user', text: userText }]);
      setInputValue('');
      setIsLoading(true);
    
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ 
                parts: [{ text: `${CERASP_CONTEXT}\n\nUser Question: ${userText}` }] 
              }],
            }),
          }
        );
    
        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content) {
          let botResponse = data.candidates[0].content.parts[0].text;
          botResponse = botResponse.replace(/[*#$]/g, '');
          setMessages((prev) => [...prev, { role: 'bot', text: botResponse.trim() }]);
        } else {
          setMessages((prev) => [...prev, { role: 'bot', text: "I'm sorry, I couldn't process that request." }]);
        }
      } catch (error) {
        setMessages((prev) => [...prev, { role: 'bot', text: "Connection error. Please try again later." }]);
      } finally {
        setIsLoading(false);
        inputRef.current?.focus();
      }
    };
  
    return (
      <div className="fixed inset-y-0 right-0 z-[100] flex items-end justify-end pointer-events-none">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="chat-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="pointer-events-auto w-full sm:w-[400px] h-full bg-card border-l border-border shadow-2xl flex flex-col"
            >
              <div className="p-4 bg-background border-b border-border flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-none text-foreground">CERASP</h3>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">AI Assistant</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
  
              <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto bg-muted/5 space-y-6">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Icon only appears for the bot */}
                    {msg.role === 'bot' && (
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm bg-primary text-white">
                        <Bot className="w-5 h-5" />
                      </div>
                    )}
                    
                    <div className={`p-4 rounded-2xl border text-sm shadow-sm max-w-[85%] leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'bot' 
                        ? 'bg-white rounded-tl-none border-border text-foreground' 
                        : 'bg-primary text-white rounded-tr-none border-transparent'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-muted-foreground italic text-xs animate-pulse">
                    <Bot className="w-4 h-4" /> CERASP is thinking...
                  </div>
                )}
              </div>
  
              <div className="p-4 border-t border-border bg-background shrink-0">
                <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                  <input 
                    ref={inputRef}
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about our lab equipment..."
                    className="flex-1 bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} className="rounded-xl bg-primary hover:bg-primary/90 h-11 w-11 shrink-0 shadow-md">
                    <Send className="w-5 h-5 text-white" />
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div key="chat-toggle" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="p-6 pointer-events-auto">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="w-16 h-16 rounded-full bg-primary text-white shadow-xl flex items-center justify-center transition-all hover:bg-primary/90">
                <Bot className="w-8 h-8" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default Chatbot;