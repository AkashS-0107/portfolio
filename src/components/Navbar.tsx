import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { MagneticButton } from '@/components/ui/micro-interactions';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'certifications'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <>
      {/* Justin Juby Style Floating RHS Glass Pill Navigation */}
      <header className="fixed top-6 right-6 z-50 hidden md:block">
        <nav className="flex items-center gap-1.5 p-2 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-slate-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
          {/* Section Nav Pill Links */}
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 relative ${
                activeSection === item.id
                  ? 'text-cyan-300 font-bold bg-cyan-950/80 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              //{item.label}
            </a>
          ))}

          {/* RHS Social & Action Trigger */}
          <div className="flex items-center gap-2 pl-2 ml-2 border-l border-slate-800">
            <MagneticButton>
              <a
                href="https://github.com/AkashS-0107"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900/90 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/akash-suresh-53850a326/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900/90 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton onClick={onOpenResume}>
              <span className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 hover:brightness-110 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Resume
              </span>
            </MagneticButton>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Trigger (RHS Fixed Button) */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 rounded-xl bg-slate-950/90 backdrop-blur-xl text-slate-200 border border-slate-800 shadow-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
        </button>
      </div>

      {/* Mobile Drawer Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-4 z-50 w-64 bg-slate-950/95 border border-cyan-500/30 rounded-2xl p-5 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest backdrop-blur-2xl shadow-2xl text-right">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-900 w-full"
            >
              //{item.label}
            </a>
          ))}

          <div className="flex items-center justify-end gap-3 pt-3 w-full">
            <a
              href="https://github.com/AkashS-0107"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-suresh-53850a326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3.5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold font-mono text-xs uppercase"
            >
              Resume PDF
            </button>
          </div>
        </div>
      )}
    </>
  );
};
