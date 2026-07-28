import React from 'react';
import { Award, Trophy, Calendar, Flame, Database } from 'lucide-react';
import { SpotlightCard, SlideDownPanel } from '@/components/ui/micro-interactions';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'MongoDB Basics for Students',
      issuer: 'MongoDB, Inc. (Raghu Viswanathan, VP Education)',
      date: '07-04-2026',
      badge: 'Certified MongoDB Student',
      certId: 'MDBnoiow5b82a',
      featured: true
    },
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Adobe Learning Manager',
      date: 'Jan 2026',
      badge: 'Certified AI Foundation',
      featured: false
    },
    {
      title: 'Introduction to Operating Systems (Elite)',
      issuer: 'NPTEL, IIT Madras',
      date: 'Jul–Sep 2025',
      badge: '60% Elite Standard',
      featured: false
    },
    {
      title: 'Python (Basic) Accomplishment',
      issuer: 'HackerRank',
      date: 'Oct 2025',
      badge: 'Verified Skill',
      featured: false
    },
    {
      title: 'Java (Basic) Accomplishment',
      issuer: 'HackerRank',
      date: 'Sep 2025',
      badge: 'Verified Skill',
      featured: false
    }
  ];

  const hackathons = [
    {
      title: 'THREX Hackathon',
      organizer: 'Gritscape x Zoho',
      date: 'Feb 2026',
      role: 'Participant & AI Solution Contributor',
      desc: 'Collaborated on rapid prototyping and AI integration under strict time constraints.'
    },
    {
      title: 'Code Wars – ASIMOV \'25',
      organizer: 'Dept. of Robotics & Automation, Easwari Engineering College',
      date: 'Aug 2025',
      role: 'Coding Contest Participant',
      desc: 'Competed in algorithmic problem solving and speed coding challenges.'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-sky-500" />
            <span className="font-mono text-sky-400 text-sm tracking-widest uppercase">// Verification & Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-12">
            Certifications & <span className="text-sky-400 font-mono">Hackathons</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {/* Featured MongoDB Certificate Spotlight Card */}
          <ScrollReveal delay={100}>
            <SpotlightCard className="p-6 border-sky-500/50 bg-gradient-to-r from-sky-950/60 via-slate-950 to-slate-950">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-950 border border-sky-500/40 text-sky-400">
                    <Database className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-sky-500/20 border border-sky-500/40 text-sky-300 font-mono text-[11px]">
                      Official Certification • MongoDB, Inc.
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">MongoDB Basics for Students</h3>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-xs text-slate-400 block">Issued: 07-04-2026</span>
                  <span className="text-[11px] text-sky-400 block">ID: MDBnoiow5b82a</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Proof of Completion for successfully completing <strong>MongoDB Basics for Students</strong>, authorized by Raghu Viswanathan (VP Education, Academia, and Documentation, MongoDB, Inc.).
              </p>
            </SpotlightCard>
          </ScrollReveal>

          {/* Slide Down Panel 1: Certifications List */}
          <ScrollReveal delay={200}>
            <SlideDownPanel
              title="Verified Professional Certifications"
              subtitle="MongoDB, Inc., Adobe, NPTEL IIT Madras & HackerRank"
              icon={Award}
              badge="5 Certifications"
              defaultOpen={true}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((item, idx) => (
                  <SpotlightCard key={idx} className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/30 text-sky-400 text-[10px] font-mono">
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-mono">{item.issuer}</p>
                    {item.certId && (
                      <span className="text-[10px] font-mono text-sky-400 mt-2 block">
                        Cert ID: {item.certId}
                      </span>
                    )}
                  </SpotlightCard>
                ))}
              </div>
            </SlideDownPanel>
          </ScrollReveal>

          {/* Slide Down Panel 2: Hackathons */}
          <ScrollReveal delay={300}>
            <SlideDownPanel
              title="Competitive Hackathons & Coding Contests"
              subtitle="THREX (Gritscape x Zoho) & Code Wars ASIMOV '25"
              icon={Trophy}
              badge="Hackathon Contributor"
              defaultOpen={false}
            >
              <div className="space-y-4">
                {hackathons.map((h, idx) => (
                  <SpotlightCard key={idx} className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-sky-400 flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-sky-400 animate-pulse" />
                        {h.date}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{h.role}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{h.title}</h4>
                    <p className="text-xs text-sky-300 font-mono mb-3">{h.organizer}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{h.desc}</p>
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
