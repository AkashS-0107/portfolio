import React from 'react';
import { ArrowDown, Mail, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface WelcomeSectionProps {
  onOpenResume: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="welcome" className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* PART 1: Welcome & Featured HIRE ME Action */}
      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-6 my-auto z-10">
        <ScrollReveal>
          {/* Micro Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-900/40 bg-rose-950/30 text-rose-300 text-xs font-mono tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>Available For Engineering Internships & Projects</span>
          </div>

          {/* Executive Name & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            AKASH SURESH
          </h1>
          <p className="text-rose-400 font-mono text-sm sm:text-base font-semibold mt-1">
            B.Tech Computer Science & Engineering (Specialization in AI & ML)
          </p>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mt-4">
            Building intelligent software systems, agentic AI workflows, and responsive full-stack applications with <strong className="text-white">Python, React, MongoDB, and n8n</strong>.
          </p>

          {/* Featured HIRE ME Primary CTA */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <MagneticButton>
              <button
                onClick={onOpenResume}
                className="px-8 py-4 rounded-xl bg-rose-900/90 hover:bg-rose-800 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl border border-rose-700/50 flex items-center gap-3 group"
              >
                <Briefcase className="w-4 h-4 text-rose-300 group-hover:scale-110 transition-transform" />
                <span>HIRE ME / VIEW RESUME</span>
                <ChevronRight className="w-4 h-4 text-rose-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="mailto:akashscontact7@gmail.com"
                className="px-6 py-4 rounded-xl bg-rose-950/40 hover:bg-rose-950/80 text-slate-200 font-semibold text-xs uppercase tracking-wider transition-all duration-300 border border-rose-950/60 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                Contact Directly
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* PART 2: Quick About Me Snapshot & Scroll Tab */}
      <div className="max-w-5xl mx-auto w-full z-10 pt-12">
        <ScrollReveal delay={200}>
          <div className="p-6 rounded-2xl bg-[#140b0d]/90 border border-rose-950/60 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">SRMIST Engineering Student</h4>
                <p className="text-xs text-slate-400 mt-0.5">3rd-Year B.Tech CSE AI/ML specialization in Chennai, TN</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">MongoDB Certified</h4>
                <p className="text-xs text-slate-400 mt-0.5">Authorized NoSQL Database Basics Credential from MongoDB, Inc.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">AI Agent Tooling</h4>
                <p className="text-xs text-slate-400 mt-0.5">Hands-on with Claude Code, Antigravity & n8n automation</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll Tab Indicator */}
        <div className="flex justify-center mt-8">
          <a
            href="#about"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/40 text-rose-300 text-xs font-mono border border-rose-950/60 hover:border-rose-800/60 transition-all animate-bounce"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
