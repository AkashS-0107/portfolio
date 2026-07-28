import React from 'react';
import { ArrowDown, FileText, Sparkles, Code2, Cpu, Database } from 'lucide-react';
import { MagneticButton } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface WelcomeSectionProps {
  onOpenResume: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="welcome" className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Warm & Welcoming Intro Hero */}
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-6 my-auto z-10">
        <ScrollReveal>
          {/* Subtle Welcoming Micro-Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-900/30 bg-rose-950/20 text-rose-300 text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Welcome to my digital space</span>
          </div>

          {/* Warm Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-rose-400">Akash Suresh</span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl font-normal leading-relaxed mt-2">
            Full Stack & AI Engineer specializing in <strong className="text-white font-semibold">Computer Science & Engineering (AI/ML)</strong> at SRMIST.
          </p>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mt-1">
            Building autonomous AI agent workflows, software testing frameworks, and high-performance applications with React, Python, and MongoDB.
          </p>

          {/* Welcoming Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <MagneticButton>
              <a
                href="#showcase"
                className="px-7 py-3.5 rounded-xl bg-rose-900/90 hover:bg-rose-800 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl border border-rose-700/40 flex items-center gap-2"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4 text-rose-300" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-rose-950/40 hover:bg-rose-950/80 text-slate-200 font-semibold text-xs uppercase tracking-wider transition-all duration-300 border border-rose-950/60 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                View Official Resume
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Inviting Scroll Prompt & Key Pillars */}
      <div className="max-w-4xl mx-auto w-full z-10 pt-8">
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-6">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-950/40 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-950/60 text-rose-400 shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Full-Stack Dev</h4>
                <p className="text-[11px] text-slate-400">React, TypeScript & Tailwind</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-950/40 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-950/60 text-rose-400 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Workflows</h4>
                <p className="text-[11px] text-slate-400">Claude Code, Antigravity & n8n</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-950/40 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-950/60 text-rose-400 shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">MongoDB Certified</h4>
                <p className="text-[11px] text-slate-400">NoSQL & Relational SQL Systems</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <a
            href="#showcase"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/30 text-slate-400 hover:text-rose-300 text-[11px] font-mono border border-rose-950/40 transition-all group"
          >
            <span>SCROLL TO EXPLORE WORK</span>
            <ArrowDown className="w-3.5 h-3.5 text-rose-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
