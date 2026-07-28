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
      const sections = ['about', 'skills', 'projects', 'certifications', 'resume'];
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
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <>
      {/* Sleek Minimalist Floating RHS Navigation Dock (Red Crimson Accents) */}
      <header className="fixed top-6 right-6 z-50 hidden md:block">
        <nav className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-rose-900/60 shadow-xl">
          {/* Section Nav Links */}
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-rose-300 font-semibold bg-slate-900 border border-rose-700/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* RHS Social & Resume Trigger */}
          <div className="flex items-center gap-2 pl-2 ml-1 border-l border-rose-900/40">
            <MagneticButton>
              <a
                href="https://github.com/AkashS-0107"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-rose-900/60 transition-all"
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
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-rose-900/60 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton onClick={onOpenResume}>
              <span className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md border border-rose-400/30">
                <FileText className="w-3.5 h-3.5" />
                Resume PDF
              </span>
            </MagneticButton>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Trigger */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 rounded-xl bg-slate-950/90 backdrop-blur-md text-slate-200 border border-rose-900/60 shadow-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6 text-rose-400" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-4 z-50 w-64 bg-slate-950 border border-rose-900/60 rounded-2xl p-5 flex flex-col gap-3 text-xs uppercase tracking-wider backdrop-blur-2xl shadow-2xl text-right">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-rose-400 py-2 border-b border-slate-900 w-full font-medium"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center justify-end gap-3 pt-3 w-full">
            <a
              href="https://github.com/AkashS-0107"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-suresh-53850a326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3.5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs uppercase"
            >
              Resume PDF
            </button>
          </div>
        </div>
      )}
    </>
  );
};
