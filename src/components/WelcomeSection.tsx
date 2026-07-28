import React from 'react';
import { ArrowDown, FileText, Sparkles, Code2 } from 'lucide-react';
import { MagneticButton } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface WelcomeSectionProps {
  onOpenResume: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="welcome" className="relative w-full min-h-[85vh] flex flex-col justify-center items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Welcoming Hero Content */}
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-6 z-10">
        <ScrollReveal>
          {/* Subtle Welcoming Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-900/30 bg-rose-950/20 text-rose-300 text-xs tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Full Stack & AI Engineer</span>
          </div>

          {/* Clean Executive Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-tight">
            AKASH SURESH
          </h1>
          
          <p className="text-rose-300 font-mono text-sm sm:text-base font-semibold mt-2">
            B.Tech Computer Science & Engineering (Specialization in AI & ML)
          </p>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mt-4">
            Building intelligent software systems, agentic AI workflows, and responsive full-stack applications with <strong className="text-white">Python, React, MongoDB, and n8n</strong>.
          </p>

          {/* Welcoming Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <MagneticButton>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-xl bg-rose-900/90 hover:bg-rose-800 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl border border-rose-700/40 flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-rose-300" />
                <span>Explore Profile</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-rose-950/40 hover:bg-rose-950/80 text-slate-200 font-semibold text-xs uppercase tracking-wider transition-all duration-300 border border-rose-950/60 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                View Resume
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Scroll Prompt */}
        <ScrollReveal delay={200}>
          <div className="mt-12">
            <a
              href="#about"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-950/30 text-slate-400 hover:text-rose-300 text-xs font-mono border border-rose-950/40 transition-all group"
            >
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3.5 h-3.5 text-rose-400 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
