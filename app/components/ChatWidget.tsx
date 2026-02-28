// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { useChat } from '@ai-sdk/react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, X, Send, Sparkles, ChevronRight, Loader2 } from 'lucide-react';


// const SUGGESTED_QUESTIONS = [
//     "What is your tech stack?",
//     "Tell me about your projects.",
//     "How can I contact Kaif?",
//     "Are you available for freelance?",
// ];

// export default function ChatWidget() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat();
//     const messagesEndRef = useRef<HTMLDivElement>(null);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const handleSuggestionClick = (question: string) => {
//         append({
//             role: 'user',
//             content: question,
//         });
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 20, scale: 0.95 }}
//                         transition={{ duration: 0.2 }}
//                         className="mb-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-md sm:w-[400px]"
//                     >
//                         {/* Header */}
//                         <div className="flex items-center justify-between bg-neutral-900/50 p-4 border-b border-neutral-800">
//                             <div className="flex items-center gap-2">
//                                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                     <Sparkles size={16} />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-neutral-100 text-sm">Portfolio Assistant</h3>
//                                     <p className="text-xs text-neutral-400">Ask me anything about Kaif</p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => setIsOpen(false)}
//                                 className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
//                             >
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {/* Messages Area */}
//                         <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
//                             {messages.length === 0 ? (
//                                 <div className="flex h-full flex-col justify-end space-y-4">
//                                     <div className="mb-4 text-center">
//                                         <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                             <Sparkles size={24} />
//                                         </div>
//                                         <p className="text-sm text-neutral-300">
//                                             Hi! I&apos;m Kaif&apos;s AI assistant. <br /> How can I help you today?
//                                         </p>
//                                     </div>
//                                     <div className="grid gap-2">
//                                         {SUGGESTED_QUESTIONS.map((q, i) => (
//                                             <button
//                                                 key={i}
//                                                 onClick={() => handleSuggestionClick(q)}
//                                                 className="flex items-center justify-between rounded-xl bg-neutral-900/50 p-3 text-left text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 group"
//                                             >
//                                                 {q}
//                                                 <ChevronRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-neutral-500" />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//                                     {messages.map((m: any) => (
//                                         <div
//                                             key={m.id}
//                                             className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                                         >
//                                             <div
//                                                 className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user'
//                                                     ? 'bg-blue-600/20 text-blue-100 border border-blue-500/20 rounded-br-sm'
//                                                     : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-sm'
//                                                     }`}
//                                             >
//                                                 {/* Optional: Add icon for bot messages */}
//                                                 {m.role === 'assistant' && (
//                                                     <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
//                                                         <Sparkles size={10} />
//                                                         <span>Assistant</span>
//                                                     </div>
//                                                 )}
//                                                 {m.content}
//                                             </div>
//                                         </div>
//                                     ))}
//                                     {isLoading && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 rounded-bl-sm flex items-center gap-2 text-neutral-400">
//                                                 <Loader2 size={14} className="animate-spin" />
//                                                 <span className="text-xs">Typing...</span>
//                                             </div>
//                                         </div>
//                                     )}
//                                     <div ref={messagesEndRef} />
//                                 </div>
//                             )}
//                         </div>

//                         {/* Input Area */}
//                         <form onSubmit={handleSubmit} className="border-t border-neutral-800 bg-neutral-950 p-4">
//                             <div className="relative flex items-center">
//                                 <input
//                                     value={input}
//                                     onChange={handleInputChange}
//                                     placeholder="Type your message..."
//                                     className="w-full rounded-full border border-neutral-800 bg-neutral-900 py-3 pl-5 pr-12 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
//                                 />
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading || !(input?.trim())}
//                                     className="absolute right-2 rounded-full p-2 text-blue-500 transition-colors hover:bg-local disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/10"
//                                 >
//                                     <Send size={18} />
//                                 </button>
//                             </div>
//                         </form>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20 transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black z-50"
//             >
//                 <AnimatePresence mode="wait">
//                     {isOpen ? (
//                         <motion.div
//                             key="close"
//                             initial={{ opacity: 0, rotate: -90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: 90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <X size={24} />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="chat"
//                             initial={{ opacity: 0, rotate: 90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: -90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <MessageCircle size={24} fill="currentColor" className="text-black" />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.button>
//         </div>
//     );
// }



// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { useChat } from '@ai-sdk/react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, X, Send, Sparkles, ChevronRight, Loader2 } from 'lucide-react';

// const SUGGESTED_QUESTIONS = [
//     "What is your tech stack?",
//     "Tell me about your projects.",
//     "How can I contact Kaif?",
//     "Are you available for freelance?",
// ];

// export default function ChatWidget() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { messages, input, handleInputChange, handleSubmit, isLoading, sendMessage: append } = useChat();
//     const messagesEndRef = useRef<HTMLDivElement>(null);

//     // Auto-scroll to bottom on new messages
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     // Handle suggested questions
//     const handleSuggestionClick = (question: string) => {
//         append({
//             role: 'user',
//             content: question,
//         });
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 20, scale: 0.95 }}
//                         transition={{ duration: 0.2 }}
//                         className="mb-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-md sm:w-[400px]"
//                     >
//                         {/* Header */}
//                         <div className="flex items-center justify-between bg-neutral-900/50 p-4 border-b border-neutral-800">
//                             <div className="flex items-center gap-2">
//                                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                     <Sparkles size={16} />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-neutral-100 text-sm">Portfolio Assistant</h3>
//                                     <p className="text-xs text-neutral-400">Ask me anything about Kaif</p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => setIsOpen(false)}
//                                 className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
//                             >
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {/* Messages Area */}
//                         <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
//                             {messages.length === 0 ? (
//                                 <div className="flex h-full flex-col justify-end space-y-4">
//                                     <div className="mb-4 text-center">
//                                         <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                             <Sparkles size={24} />
//                                         </div>
//                                         <p className="text-sm text-neutral-300">
//                                             Hi! I&apos;m Kaif&apos;s AI assistant. <br /> How can I help you today?
//                                         </p>
//                                     </div>
//                                     <div className="grid gap-2">
//                                         {SUGGESTED_QUESTIONS.map((q, i) => (
//                                             <button
//                                                 key={i}
//                                                 onClick={() => handleSuggestionClick(q)}
//                                                 className="flex items-center justify-between rounded-xl bg-neutral-900/50 p-3 text-left text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 group"
//                                             >
//                                                 {q}
//                                                 <ChevronRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-neutral-500" />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {messages.map((m: any) => (
//                                         <div
//                                             key={m.id}
//                                             className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                                         >
//                                             <div
//                                                 className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user'
//                                                     ? 'bg-blue-600/20 text-blue-100 border border-blue-500/20 rounded-br-sm'
//                                                     : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-sm'
//                                                     }`}
//                                             >
//                                                 {m.role === 'assistant' && (
//                                                     <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
//                                                         <Sparkles size={10} />
//                                                         <span>Assistant</span>
//                                                     </div>
//                                                 )}
//                                                 {m.content}
//                                             </div>
//                                         </div>
//                                     ))}
//                                     {isLoading && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 rounded-bl-sm flex items-center gap-2 text-neutral-400">
//                                                 <Loader2 size={14} className="animate-spin" />
//                                                 <span className="text-xs">Typing...</span>
//                                             </div>
//                                         </div>
//                                     )}
//                                     <div ref={messagesEndRef} />
//                                 </div>
//                             )}
//                         </div>

//                         {/* Input Area */}
//                         <form
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 handleSubmit();
//                             }}
//                             className="border-t border-neutral-800 bg-neutral-950 p-4"
//                         >
//                             <div className="relative flex items-center">
//                                 <input
//                                     value={input || ''}
//                                     onChange={handleInputChange}
//                                     placeholder="Type your message..."
//                                     className="w-full rounded-full border border-neutral-800 bg-neutral-900 py-3 pl-5 pr-12 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
//                                 />
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading || !(input || '').trim()}
//                                     className="absolute right-2 rounded-full p-2 text-blue-500 transition-colors hover:bg-local disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/10"
//                                 >
//                                     <Send size={18} />
//                                 </button>
//                             </div>
//                         </form>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Floating Chat Button */}
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20 transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black z-50"
//             >
//                 <AnimatePresence mode="wait">
//                     {isOpen ? (
//                         <motion.div
//                             key="close"
//                             initial={{ opacity: 0, rotate: -90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: 90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <X size={24} />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="chat"
//                             initial={{ opacity: 0, rotate: 90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: -90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <MessageCircle size={24} fill="currentColor" className="text-black" />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.button>
//         </div>
//     );
// }



// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { useChat } from '@ai-sdk/react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, X, Send, Sparkles, ChevronRight, Loader2 } from 'lucide-react';

// const SUGGESTED_QUESTIONS = [
//     "What is your tech stack?",
//     "Tell me about your projects.",
//     "How can I contact Kaif?",
//     "Are you available for freelance?",
// ];

// export default function ChatWidget() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { messages, status, sendMessage } = useChat();

//     const [input, setInput] = useState('');
//     const isLoading = status === 'submitted' || status === 'streaming';

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInput(e.target.value);
//     };

//     const handleSubmit = (e?: React.FormEvent) => {
//         e?.preventDefault();
//         if (!input.trim()) return;
//         sendMessage({ text: input });
//         setInput('');
//     };

//     const messagesEndRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     const handleSuggestionClick = (question: string) => {
//         sendMessage({
//             text: question,
//         });
//     };


//     return (
//         <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 20, scale: 0.95 }}
//                         transition={{ duration: 0.2 }}
//                         className="mb-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-md sm:w-[400px]"
//                     >
//                         {/* Header */}
//                         <div className="flex items-center justify-between bg-neutral-900/50 p-4 border-b border-neutral-800">
//                             <div className="flex items-center gap-2">
//                                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                     <Sparkles size={16} />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-neutral-100 text-sm">Portfolio Assistant</h3>
//                                     <p className="text-xs text-neutral-400">Ask me anything about Kaif</p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => setIsOpen(false)}
//                                 className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
//                             >
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {/* Messages */}
//                         <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
//                             {messages.length === 0 ? (
//                                 <div className="flex h-full flex-col justify-end space-y-4">
//                                     <div className="mb-4 text-center">
//                                         <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                             <Sparkles size={24} />
//                                         </div>
//                                         <p className="text-sm text-neutral-300">
//                                             Hi! I&apos;m Kaif&apos;s AI assistant. <br /> How can I help you today?
//                                         </p>
//                                     </div>
//                                     <div className="grid gap-2">
//                                         {SUGGESTED_QUESTIONS.map((q, i) => (
//                                             <button
//                                                 key={i}
//                                                 onClick={() => handleSuggestionClick(q)}
//                                                 className="flex items-center justify-between rounded-xl bg-neutral-900/50 p-3 text-left text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 group"
//                                             >
//                                                 {q}
//                                                 <ChevronRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-neutral-500" />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {messages.map((m: any) => (
//                                         <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                                             <div
//                                                 className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user'
//                                                     ? 'bg-blue-600/20 text-blue-100 border border-blue-500/20 rounded-br-sm'
//                                                     : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-sm'
//                                                     }`}
//                                             >
//                                                 {m.role === 'assistant' && (
//                                                     <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
//                                                         <Sparkles size={10} />
//                                                         <span>Assistant</span>
//                                                     </div>
//                                                 )}
//                                                 {m.content || (m.parts && m.parts.map((p: any) => {
//                                                     if (p.type === 'text') return p.text;
//                                                     return '';
//                                                 }).join(''))}
//                                             </div>
//                                         </div>
//                                     ))}
//                                     {isLoading && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 rounded-bl-sm flex items-center gap-2 text-neutral-400">
//                                                 <Loader2 size={14} className="animate-spin" />
//                                                 <span className="text-xs">Typing...</span>
//                                             </div>
//                                         </div>
//                                     )}
//                                     <div ref={messagesEndRef} />
//                                 </div>
//                             )}
//                         </div>

//                         {/* Input */}
//                         <form
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 handleSubmit();
//                             }}
//                             className="border-t border-neutral-800 bg-neutral-950 p-4"
//                         >
//                             <div className="relative flex items-center">
//                                 <input
//                                     value={input || ''}
//                                     onChange={handleInputChange}
//                                     placeholder="Type your message..."
//                                     className="w-full rounded-full border border-neutral-800 bg-neutral-900 py-3 pl-5 pr-12 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
//                                 />
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading || !(input || '').trim()}
//                                     className="absolute right-2 rounded-full p-2 text-blue-500 transition-colors hover:bg-local disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/10"
//                                 >
//                                     <Send size={18} />
//                                 </button>
//                             </div>
//                         </form>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Floating button */}
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20 transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black z-50"
//             >
//                 <AnimatePresence mode="wait">
//                     {isOpen ? (
//                         <motion.div
//                             key="close"
//                             initial={{ opacity: 0, rotate: -90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: 90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <X size={24} />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="chat"
//                             initial={{ opacity: 0, rotate: 90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: -90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <MessageCircle size={24} fill="currentColor" className="text-black" />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.button>
//         </div>
//     );
// }


// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { useChat } from '@ai-sdk/react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, X, Send, Sparkles, ChevronRight, Loader2 } from 'lucide-react';

// const SUGGESTED_QUESTIONS = [
//     "What is your tech stack?",
//     "Tell me about your projects.",
//     "How can I contact Kaif?",
//     "Are you available for freelance?",
// ];

// export default function ChatWidget() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { messages, status, sendMessage } = useChat({
//         api: '/api/chat', // make sure your backend route matches
//     });

//     const [input, setInput] = useState('');
//     const isLoading = status === 'submitted' || status === 'streaming';

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInput(e.target.value);
//     };

//     const handleSubmit = (e?: React.FormEvent) => {
//         e?.preventDefault();
//         if (!input.trim()) return;
//         sendMessage({ content: input }); // MUST be content, not text
//         setInput('');
//     };

//     const handleSuggestionClick = (question: string) => {
//         sendMessage({ content: question }); // MUST be content
//     };

//     const messagesEndRef = useRef<HTMLDivElement>(null);
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     return (
//         <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 20, scale: 0.95 }}
//                         transition={{ duration: 0.2 }}
//                         className="mb-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-md sm:w-[400px]"
//                     >
//                         {/* Header */}
//                         <div className="flex items-center justify-between bg-neutral-900/50 p-4 border-b border-neutral-800">
//                             <div className="flex items-center gap-2">
//                                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                     <Sparkles size={16} />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-neutral-100 text-sm">Portfolio Assistant</h3>
//                                     <p className="text-xs text-neutral-400">Ask me anything about Kaif</p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => setIsOpen(false)}
//                                 className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
//                             >
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {/* Messages */}
//                         <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
//                             {messages.length === 0 ? (
//                                 <div className="flex h-full flex-col justify-end space-y-4">
//                                     <div className="mb-4 text-center">
//                                         <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
//                                             <Sparkles size={24} />
//                                         </div>
//                                         <p className="text-sm text-neutral-300">
//                                             Hi! I&apos;m Kaif&apos;s AI assistant. <br /> How can I help you today?
//                                         </p>
//                                     </div>
//                                     <div className="grid gap-2">
//                                         {SUGGESTED_QUESTIONS.map((q, i) => (
//                                             <button
//                                                 key={i}
//                                                 onClick={() => handleSuggestionClick(q)}
//                                                 className="flex items-center justify-between rounded-xl bg-neutral-900/50 p-3 text-left text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 group"
//                                             >
//                                                 {q}
//                                                 <ChevronRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-neutral-500" />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {messages.map((m: any) => (
//                                         <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                                             <div
//                                                 className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user'
//                                                     ? 'bg-blue-600/20 text-blue-100 border border-blue-500/20 rounded-br-sm'
//                                                     : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-sm'
//                                                     }`}
//                                             >
//                                                 {m.role === 'assistant' && (
//                                                     <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
//                                                         <Sparkles size={10} />
//                                                         <span>Assistant</span>
//                                                     </div>
//                                                 )}
//                                                 {m.content || (m.parts && m.parts.map((p: any) => p.text).join(''))}
//                                             </div>
//                                         </div>
//                                     ))}
//                                     {isLoading && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 rounded-bl-sm flex items-center gap-2 text-neutral-400">
//                                                 <Loader2 size={14} className="animate-spin" />
//                                                 <span className="text-xs">Typing...</span>
//                                             </div>
//                                         </div>
//                                     )}
//                                     <div ref={messagesEndRef} />
//                                 </div>
//                             )}
//                         </div>

//                         {/* Input */}
//                         <form
//                             onSubmit={(e) => handleSubmit(e)}
//                             className="border-t border-neutral-800 bg-neutral-950 p-4"
//                         >
//                             <div className="relative flex items-center">
//                                 <input
//                                     value={input}
//                                     onChange={handleInputChange}
//                                     placeholder="Type your message..."
//                                     className="w-full rounded-full border border-neutral-800 bg-neutral-900 py-3 pl-5 pr-12 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
//                                 />
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading || !input.trim()}
//                                     className="absolute right-2 rounded-full p-2 text-blue-500 transition-colors hover:bg-local disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/10"
//                                 >
//                                     <Send size={18} />
//                                 </button>
//                             </div>
//                         </form>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Floating button */}
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20 transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black z-50"
//             >
//                 <AnimatePresence mode="wait">
//                     {isOpen ? (
//                         <motion.div
//                             key="close"
//                             initial={{ opacity: 0, rotate: -90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: 90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <X size={24} />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="chat"
//                             initial={{ opacity: 0, rotate: 90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             exit={{ opacity: 0, rotate: -90 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <MessageCircle size={24} fill="currentColor" className="text-black" />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.button>
//         </div>
//     );
// }


'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, ChevronRight, Loader2 } from 'lucide-react';

// Suggested questions
const SUGGESTED_QUESTIONS = [
    "What is your tech stack?",
    "Tell me about your projects.",
    "How can I contact Kaif?",
    "Are you available for freelance?",
];

// Types for chat messages
interface MessagePart {
    type: string;
    text: string;
}

interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content?: string;
    parts?: MessagePart[];
}

// Helper: parse text and render links
function renderMessageText(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    // Split by URLs or emails
    const parts = text.split(new RegExp(`${urlRegex.source}|${emailRegex.source}`, 'g'));

    return parts.map((part, i) => {
        if (urlRegex.test(part)) {
            return (
                <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-500"
                >
                    {part}
                </a>
            );
        }
        if (emailRegex.test(part)) {
            return (
                <a key={i} href={`mailto:${part}`} className="text-blue-400 underline hover:text-blue-500">
                    {part}
                </a>
            );
        }
        return <span key={i}>{part}</span>;
    });
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, status, sendMessage } = useChat(); // defaults to /api/chat

    const [input, setInput] = useState('');
    const isLoading = status === 'submitted' || status === 'streaming';
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;
        sendMessage({ text: input }); // TS-safe, do not use `content`
        setInput('');
    };

    const handleSuggestionClick = (question: string) => sendMessage({ text: question });

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-md sm:w-[400px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-neutral-900/50 p-4 border-b border-neutral-800">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-100 text-sm">Portfolio Assistant</h3>
                                    <p className="text-xs text-neutral-400">Ask me anything about Kaif</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
                            {messages.length === 0 ? (
                                <div className="flex h-full flex-col justify-end space-y-4">
                                    <div className="mb-4 text-center">
                                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                                            <Sparkles size={24} />
                                        </div>
                                        <p className="text-sm text-neutral-300">
                                            Hi! I&apos;m Kaif&apos;s AI assistant. <br /> How can I help you today?
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        {SUGGESTED_QUESTIONS.map((q, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSuggestionClick(q)}
                                                className="flex items-center justify-between rounded-xl bg-neutral-900/50 p-3 text-left text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 group"
                                            >
                                                {q}
                                                <ChevronRight
                                                    size={14}
                                                    className="opacity-0 transition-opacity group-hover:opacity-100 text-neutral-500"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {(messages as unknown as ChatMessage[]).map((m) => (
                                        <div
                                            key={m.id}
                                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user'
                                                    ? 'bg-blue-600/20 text-blue-100 border border-blue-500/20 rounded-br-sm'
                                                    : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-sm'
                                                    }`}
                                            >
                                                {m.role === 'assistant' && (
                                                    <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
                                                        <Sparkles size={10} />
                                                        <span>Assistant</span>
                                                    </div>
                                                )}
                                                {/* Render AI message with links */}
                                                {m.parts
                                                    ? m.parts.map((p: MessagePart, i: number) =>
                                                        p.type === 'text' ? (
                                                            <div key={i}>{renderMessageText(p.text)}</div>
                                                        ) : null
                                                    )
                                                    : null}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 rounded-bl-sm flex items-center gap-2 text-neutral-400">
                                                <Loader2 size={14} className="animate-spin" />
                                                <span className="text-xs">Typing...</span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="border-t border-neutral-800 bg-neutral-950 p-4">
                            <div className="relative flex items-center">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Type your message..."
                                    className="w-full rounded-full border border-neutral-800 bg-neutral-900 py-3 pl-5 pr-12 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 rounded-full p-2 text-blue-500 transition-colors hover:bg-local disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/10"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20 transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black z-50"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle size={24} fill="currentColor" className="text-black" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
