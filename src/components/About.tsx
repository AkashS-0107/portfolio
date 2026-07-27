import React from 'react';
import { GraduationCap, Brain, Terminal, CheckCircle2, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import { SpotlightCard, SlideDownPanel } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const About: React.FC = () => {
  const competencies = [
    'AI Agent Workflows & Prompt Optimization',
    'Software Testing & Debugging',
    'Database Fundamentals (MongoDB & SQL)',
    'UI/UX Enhancement & Visual Clarity',
    'Problem Solving & Application Logic',
    'Team Collaboration & Quality Assurance'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-sky-500" />
            <span className="font-mono text-sky-400 text-sm tracking-widest uppercase">// Overview & Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            AI Engineer <span className="text-sky-400 font-mono">& Developer Profile</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-12 max-w-2xl">
            Explore interactive slide-down panels below to view academic background, AI tool specializations, and core engineering competencies.
          </p>
        </ScrollReveal>

        {/* Scroll-Driven Slide-Down Accordion Panels */}
        <div className="space-y-6">
          <ScrollReveal delay={100}>
            <SlideDownPanel
              title="Professional Summary & AI Specialization"
              subtitle="Hands-on experience with Claude Code, Antigravity & n8n automation"
              icon={Brain}
              badge="AI Agent Developer"
              defaultOpen={true}
            >
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Third-year B.Tech student specializing in <strong className="text-sky-300">Artificial Intelligence and Machine Learning</strong> at SRM Institute of Science and Technology (Ramapuram Campus). Practical experience working with modern AI development tools (<strong className="text-sky-300">Claude Code, Codex, Antigravity</strong>) and workflow automation (<strong className="text-sky-300">n8n</strong>).
                </p>
                <p>
                  Detail-oriented with a strong track record in quality assurance, application testing, and UI usability improvements on collaborative team projects.
                </p>
                
                <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Chennai, TN, India</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">akashscontact7@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>+91 9363984548</span>
                  </div>
                </div>
              </div>
            </SlideDownPanel>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <SlideDownPanel
              title="Education & Academic Background"
              subtitle="SRM Institute of Science and Technology | B.Tech AIML (2024 - 2028)"
              icon={GraduationCap}
              badge="B.Tech AIML"
              defaultOpen={false}
            >
              <div className="space-y-6">
                <SpotlightCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg font-bold text-white">Bachelor of Technology (B.Tech) – AI & ML</h4>
                    <span className="px-3 py-1 rounded bg-sky-950 border border-sky-500/30 text-sky-400 font-mono text-xs">
                      Expected Grad: May 2028
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">SRM Institute of Science and Technology, Ramapuram Campus</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    Specializing in Artificial Intelligence & Machine Learning
                  </div>
                </SpotlightCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-mono text-slate-500">Higher Secondary (12th Grade)</span>
                    <div className="text-base font-bold text-white mt-1">Senior Secondary Education</div>
                    <p className="text-xs text-slate-400 mt-1">Completed Board Examination</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-mono text-slate-500">Secondary (10th Grade)</span>
                    <div className="text-base font-bold text-white mt-1">Secondary Education</div>
                    <p className="text-xs text-slate-400 mt-1">Completed Board Examination</p>
                  </div>
                </div>
              </div>
            </SlideDownPanel>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <SlideDownPanel
              title="Core Engineering Competencies"
              subtitle="Software Testing, Database Fundamentals, AI Workflows & UX"
              icon={Terminal}
              badge="6 Key Pillars"
              defaultOpen={false}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {competencies.map((item, idx) => (
                  <SpotlightCard key={idx} className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-950 border border-sky-500/30 text-sky-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </SlideDownPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
