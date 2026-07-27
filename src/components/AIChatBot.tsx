import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Terminal, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const AIChatBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi! I'm Akash's AI Agent Assistant. Ask me anything about Akash Suresh — his skills with Claude/Antigravity, B.Tech CGPA, WorkSure project, or how to contact him!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const presetQuestions = [
    "What are Akash's top AI & programming skills?",
    "Tell me about the WorkSure project.",
    "What is Akash's education background and CGPA?",
    "How can I contact Akash for an internship?"
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response logic based on Akash's Resume
    setTimeout(() => {
      let botResponse = "";
      const lower = text.toLowerCase();

      if (lower.includes('skill') || lower.includes('ai') || lower.includes('tool') || lower.includes('program')) {
        botResponse = "Akash specializes in Artificial Intelligence & Machine Learning. His technical stack includes:\n• AI Tools: Claude Code, Codex, Antigravity (AGY), n8n Workflow Automation, Prompt Engineering (Claude, Gemini, ChatGPT)\n• Programming Languages: Python, C, C++, Java (Basic), SQL\n• Web & UI: HTML, CSS, React, TypeScript, Tailwind CSS\n• Databases: Microsoft SQL Server, Git/GitHub, VS Code.";
      } else if (lower.includes('worksure') || lower.includes('project')) {
        botResponse = "WorkSure is a blue-collar worker verification platform concept connecting verified skilled workers with employers. Akash contributed by leading UI enhancements, improving usability, and executing rigorous testing across the application!\n🔗 Repo: https://github.com/AkashS-0107/worksure.git\n\nHe also worked on a Hospital Bed Management System using Python, SQL Server, HTML & CSS!";
      } else if (lower.includes('education') || lower.includes('cgpa') || lower.includes('srm') || lower.includes('college')) {
        botResponse = "Akash is currently a third-year B.Tech student in Artificial Intelligence & Machine Learning at SRM Institute of Science and Technology (Ramapuram Campus), expecting to graduate in May 2028. He maintains a 7.10 CGPA!";
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('internship') || lower.includes('email') || lower.includes('phone')) {
        botResponse = "You can reach Akash Suresh directly:\n📧 Email: akashscontact7@gmail.com\n📞 Phone: +91-9363984548\n📍 Location: Chennai, Tamil Nadu, India\n💼 LinkedIn: linkedin.com/in/akash-suresh-53850a326/\n🐙 GitHub: github.com/AkashS-0107";
      } else if (lower.includes('certif') || lower.includes('hackathon')) {
        botResponse = "Akash has completed multiple certifications & hackathons:\n• Introduction to AI (Adobe Learning Manager - 2026)\n• CS107 C++ Programming (Saylor Academy - 87.50% Grade)\n• NPTEL Operating Systems Elite (IIT Madras - 60%)\n• HackerRank Python & Java Certifications\n• DSA Course (ScholarHat)\n• THREX Hackathon (Gritscape x Zoho) & Code Wars ASIMOV '25 participant!";
      } else {
        botResponse = `Akash Suresh is a third-year B.Tech AIML student at SRMIST specializing in AI development, Python, SQL, and UI engineering. He is actively seeking internship opportunities where he can leverage AI agent tools (Claude Code, Antigravity, n8n) to build real-world software solutions! Feel free to ask about his projects, skills, or contact info!`;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-slate-950 text-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4 text-center">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="font-mono text-emerald-400 text-sm tracking-widest uppercase">// Interactive Agent</span>
          <div className="h-px w-8 bg-emerald-500" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-4">
          Chat with Akash's <span className="text-emerald-400 font-mono">AI Resume Bot</span>
        </h2>
        <p className="text-slate-400 text-base text-center mb-10 max-w-xl mx-auto">
          Trained on Akash Suresh's resume & project portfolio. Get instant answers regarding skills, coursework, and contact details!
        </p>

        {/* Chat Interface Container */}
        <div className="rounded-2xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden flex flex-col h-[520px]">
          {/* Header */}
          <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                  Akash_AI_Agent.v1
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-[10px] text-emerald-300">
                    Online
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">Powered by Antigravity Knowledge Base</p>
              </div>
            </div>

            <button
              onClick={() => setMessages([messages[0]])}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans text-sm">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none font-mono text-xs sm:text-sm'
                  }`}
                >
                  {msg.text}
                  <div
                    className={`text-[10px] mt-1.5 font-mono ${
                      msg.sender === 'user' ? 'text-slate-800 text-right' : 'text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center shrink-0 mt-1 font-mono text-xs font-bold">
                    YOU
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-slate-400 font-mono text-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <span>Analyzing resume matrix data...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Preset Buttons */}
          <div className="px-6 py-2 bg-slate-950/60 border-t border-slate-800 flex gap-2 overflow-x-auto no-scrollbar">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-900 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-xs font-mono transition-all shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask Akash's AI bot a question..."
              className="flex-1 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none font-mono transition-colors"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
