import React, { useState } from 'react';
import { Cpu, Code2, Workflow, Database } from 'lucide-react';
import { SpotlightCard, SlideDownPanel } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const skillCategories = [
    {
      title: 'AI Tools & Agent Workflows',
      icon: Workflow,
      badge: 'Core Expertise',
      description: 'Specialized tooling for agentic AI coding, prompt optimization, and automated workflows.',
      skills: [
        { name: 'Claude Code', level: 92, desc: 'AI-assisted code architecture & refactoring' },
        { name: 'Antigravity (AGY)', level: 95, desc: 'Agentic coding & subagent workflow orchestration' },
        { name: 'Codex', level: 85, desc: 'Automated code generation & syntax translation' },
        { name: 'n8n Automation', level: 88, desc: 'API integration & autonomous agent workflows' },
        { name: 'Prompt Optimization', level: 94, desc: 'Fine-tuning Claude 3.7/3.5, Gemini 2.0, ChatGPT' }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      badge: 'Core Languages',
      description: 'Solid foundation in object-oriented programming, data structures, and backend logic.',
      skills: [
        { name: 'Python', level: 90, desc: 'Data structures, AI scripting & application logic' },
        { name: 'C / C++', level: 85, desc: 'Object-oriented programming & system logic' },
        { name: 'SQL', level: 88, desc: 'Relational queries, schema design & procedures' },
        { name: 'Java (Basic)', level: 75, desc: 'HackerRank verified fundamentals' }
      ]
    },
    {
      title: 'Web & Frontend Development',
      icon: Cpu,
      badge: 'Modern Web Stack',
      description: 'Responsive, accessible, and high-performance user interfaces.',
      skills: [
        { name: 'HTML5 & CSS3', level: 92, desc: 'Semantic layouts, Flexbox/Grid & animations' },
        { name: 'React.js', level: 88, desc: 'Hooks, state management & component lifecycle' },
        { name: 'TypeScript', level: 82, desc: 'Type safety & robust interface definitions' },
        { name: 'Tailwind CSS', level: 90, desc: 'Glassmorphism, dark mode & micro-transitions' }
      ]
    },
    {
      title: 'Databases & Environments',
      icon: Database,
      badge: 'Dev Tooling',
      description: 'NoSQL and relational databases, administration, and version control.',
      skills: [
        { name: 'MongoDB', level: 90, desc: 'MongoDB Basics for Students Certified (MongoDB, Inc.)' },
        { name: 'Microsoft SQL Server', level: 86, desc: 'Relational database administration & SQL operations' },
        { name: 'Git & GitHub', level: 90, desc: 'Version control, feature branching & PRs' },
        { name: 'Visual Studio Code', level: 94, desc: 'Primary IDE & extension ecosystem' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-sky-500" />
            <span className="font-mono text-sky-400 text-sm tracking-widest uppercase">// Technical Stack</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Skills & <span className="text-sky-400 font-mono">Micro-Matrix</span>
              </h2>
              <p className="text-slate-400 text-base mt-2 max-w-xl">
                Click on any category tab or expand the slide-down drawer below to inspect detailed skill proficiencies.
              </p>
            </div>

            {/* Interactive Category Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                    activeCategory === idx
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_15px_#38bdf866]'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  0{idx + 1}. {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Selected Skill Category Card */}
        <ScrollReveal delay={150}>
          <SpotlightCard className="p-8 mb-8 border-sky-500/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {React.createElement(skillCategories[activeCategory].icon, { className: "w-7 h-7 text-sky-400" })}
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {skillCategories[activeCategory].description}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-950 border border-sky-500/40 text-sky-300 font-mono text-xs">
                {skillCategories[activeCategory].badge}
              </span>
            </div>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{skill.desc}</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-indigo-400 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_#38bdf880]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Slide Down Accordion View */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">// Expand All Skill Categories (Slide-Down View)</h4>
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={200 + idx * 100}>
              <SlideDownPanel
                title={cat.title}
                subtitle={cat.description}
                icon={cat.icon}
                badge={cat.badge}
                defaultOpen={false}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex justify-between font-bold text-white text-sm mb-1">
                        <span>{s.name}</span>
                        <span className="text-sky-400 font-mono text-xs">{s.level}%</span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </SlideDownPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
