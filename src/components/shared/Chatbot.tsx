import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (open && showWelcome && messages.length === 0) {
      setMessages([
        { sender: 'bot', text: '👋 Hi! I am Zeexia Chatbot. How can I help you today?' },
      ]);
      setShowWelcome(false);
    }
  }, [open, showWelcome, messages.length]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      // Try local backend first, fallback to production
      const backendUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:5000/chat' 
        : 'https://zeex-website-backend-1.onrender.com/chat';

      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });
      
      if (!res.ok) throw new Error('Backend error');
      
      const data = await res.json();
      const botText = data?.response || 'Sorry, I could not get a response.';
      setMessages((msgs) => [...msgs, { sender: 'bot', text: botText }]);
    } catch (e: any) {
      console.error('Chat error:', e);
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Error contacting backend. Please ensure the backend server is running.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors"
            aria-label="Open chatbot"
          >
            <MessageSquare className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="w-[350px] sm:w-[400px]"
          >
            <Card className="border-none shadow-2xl overflow-hidden bg-white dark:bg-navy-800">
              <CardHeader className="bg-blue-600 text-white p-4 flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-tight">Zeexia AI</h3>
                    <p className="text-[10px] text-blue-100">Always active</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="p-0">
                <ScrollArea ref={scrollAreaRef} className="h-[400px] p-4">
                  <div className="flex flex-col gap-4">
                    {messages.map((msg, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={idx}
                        className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.sender === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-blue-600" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                            msg.sender === 'user'
                              ? 'bg-blue-600 text-white rounded-br-none'
                              : 'bg-slate-100 dark:bg-navy-700 text-slate-900 dark:text-white rounded-bl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                        {msg.sender === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {loading && (
                      <div className="flex items-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="bg-slate-100 dark:bg-navy-700 px-4 py-2 rounded-2xl rounded-bl-none">
                          <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-4 border-t dark:border-navy-700">
                <div className="flex w-full items-center gap-2">
                  <Input
                    placeholder="Ask about Zeex AI..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    className="flex-1 bg-slate-50 dark:bg-navy-900 border-none focus-visible:ring-1 focus-visible:ring-blue-600"
                  />
                  <Button 
                    onClick={sendMessage} 
                    disabled={loading || !input.trim()}
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;