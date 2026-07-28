import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User, FileText } from 'lucide-react';

interface AiAssistantWidgetProps {
  onOpenResume: () => void;
}

export const AiAssistantWidget: React.FC<AiAssistantWidgetProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; content: string }>>([
    {
      role: 'assistant',
      content: "Hello! I am Akash's AI Assistant. Ask me anything about Akash's AI engineering skills, MongoDB certification, academic projects, or resume!"
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    setMessages((prev) => [...prev, { role: 'user', content: userText }]);

    // Simulated intelligent response
    setTimeout(() => {
      let reply = "Akash Suresh is a B.Tech Computer Science & Engineering student (specialization in AI & ML) at SRMIST Ramapuram. He is certified in MongoDB Basics for Students and has hands-on experience with Python, C++, React, and AI Agent workflows!";
      const lower = userText.toLowerCase();

      if (lower.includes('project') || lower.includes('worksure')) {
        reply = "Akash spearheaded UI enhancement and quality assurance testing for WorkSure — a blue-collar worker verification platform with trust ratings and verified credentials.";
      } else if (lower.includes('mongo') || lower.includes('certif')) {
        reply = "Akash holds an official MongoDB Basics for Students Certification authorized by Raghu Viswanathan (VP Education, MongoDB, Inc.) under Certificate ID: MDBnoiow5b82a.";
      } else if (lower.includes('contact') || lower.includes('email')) {
        reply = "You can reach Akash directly at akashscontact7@gmail.com or call +91-9363984548.";
      } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('marks') || lower.includes('gpa')) {
        reply = "Akash's official resume includes his CGPA of 7.10/10.0, 12th Board marks (64.33%), and 10th Board marks (73.00%). You can click the 'Resume' button to view or print his official PDF document!";
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Trigger Bubble (Red Crimson Tone) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-950 text-white shadow-2xl hover:bg-rose-900 transition-all duration-300 group border border-rose-900/60"
        >
          <div className="p-1.5 rounded-full bg-rose-600 group-hover:bg-rose-500 text-white transition-colors">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold tracking-wide pr-1 text-slate-100">AI Assistant</span>
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        </button>
      )}

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[460px] bg-slate-950 border border-rose-900/60 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-[#0d090a] p-4 text-white flex items-center justify-between border-b border-rose-900/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-rose-950/80 text-rose-400 border border-rose-800">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Akash AI Assistant</h3>
                <p className="text-[11px] text-rose-300/80 font-mono">Ask about projects, skills & resume</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-rose-950 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0d090a]/90">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    m.role === 'user' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-rose-400 border border-rose-900/60'
                  }`}
                >
                  {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div
                  className={`max-w-[78%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-rose-600 text-white rounded-tr-none'
                      : 'bg-slate-900 border border-rose-900/40 text-slate-200 shadow-sm rounded-tl-none'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Pills */}
          <div className="p-2 bg-slate-950 border-t border-rose-900/40 flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded-full bg-rose-950/60 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-800/60 text-[11px] font-medium shrink-0 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              View Resume
            </button>
            <button
              onClick={() => {
                setInput('Tell me about WorkSure project');
              }}
              className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-[11px] font-medium shrink-0 transition-colors"
            >
              WorkSure Project
            </button>
            <button
              onClick={() => {
                setInput('MongoDB certification ID');
              }}
              className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-[11px] font-medium shrink-0 transition-colors"
            >
              MongoDB Cert
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-rose-900/40 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Akash..."
              className="flex-1 px-3.5 py-2 text-xs bg-slate-900 border border-rose-900/40 rounded-full focus:outline-none focus:border-rose-500 text-white placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
