import React from 'react';
import { ShieldCheck, Activity, CheckCircle } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { SlideDownPanel, MagneticButton } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'WorkSure – Blue-Collar Worker Verification Platform',
      tagline: 'Team Project | Skill Verification & Employer Trust Ecosystem',
      description: 'A platform concept designed to bridge the gap between verified skilled blue-collar workers and prospective employers. Built around trust scores, background ratings, verified credentials, and employer dashboards.',
      highlights: [
        'Spearheaded UI enhancement to boost usability and visual clarity across user flows',
        'Executed rigorous testing and error spotting across frontend and backend integration',
        'Implemented worker profile verification cards and trust rating components'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'QA Testing', 'GitHub'],
      github: 'https://github.com/AkashS-0107/worksure.git',
      icon: ShieldCheck,
      badge: 'Featured Project',
      defaultOpen: true
    },
    {
      title: 'Hospital Bed Management System',
      tagline: 'Team Project | Healthcare Resource Allocation & Record Management',
      description: 'A hospital administration system managing patient admissions, room allocations, discharge workflows, employee records, and medicine inventory for medical facilities.',
      highlights: [
        'Led testing and bug tracking across database query modules and system logic',
        'Identified and resolved critical edge cases in room allocation and medicine database operations',
        'Developed clean HTML/CSS interface logic for hospital admin dashboards'
      ],
      technologies: ['Python', 'Microsoft SQL Server', 'HTML5', 'CSS3', 'Software Testing'],
      github: 'https://github.com/AkashS-0107',
      icon: Activity,
      badge: 'Academic Project',
      defaultOpen: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-rose-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-rose-400 text-xs tracking-widest uppercase font-semibold">Project Vault</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-rose-400 font-mono">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-base mb-12 max-w-2xl">
            Click to expand any project panel below to reveal system architecture, key contributions, and source repositories.
          </p>
        </ScrollReveal>

        {/* Scroll-Driven Slide-Down Accordion Architecture for Projects */}
        <div className="space-y-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={idx} delay={150 + idx * 150}>
                <SlideDownPanel
                  title={project.title}
                  subtitle={project.tagline}
                  icon={Icon}
                  badge={project.badge}
                  defaultOpen={project.defaultOpen}
                >
                  <div className="space-y-6">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet list */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block font-semibold">
                        Key Engineering Contributions:
                      </span>
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="pt-4 border-t border-rose-900/40 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-rose-300 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Link Button */}
                      {project.github && (
                        <MagneticButton>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs font-mono transition-all shadow-md flex items-center gap-2 border border-rose-400/40"
                          >
                            <GithubIcon className="w-4 h-4" />
                            View Repository
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </SlideDownPanel>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
