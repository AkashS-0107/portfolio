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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-sky-500" />
            <span className="text-sky-400 text-xs font-semibold tracking-wider uppercase">Project Vault</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-base mb-10 max-w-2xl">
            Expand any project panel below to inspect architecture, contributions, and source repositories.
          </p>
        </ScrollReveal>

        {/* Slide-Down Accordion Architecture */}
        <div className="space-y-5">
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
                  <div className="space-y-5">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet list */}
                    <div className="space-y-2">
                      <span className="text-xs text-sky-400 uppercase tracking-wider font-semibold block">
                        Key Engineering Contributions:
                      </span>
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Magnetic Action Button */}
                      {project.github && (
                        <MagneticButton>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-2"
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
