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
      {/* Sleek Minimalist Muted Rose Floating RHS Navigation Dock */}
      <header className="fixed top-6 right-6 z-50 hidden md:block">
        <nav className="flex items-center gap-2 p-2 rounded-2xl bg-[#140b0d]/90 backdrop-blur-md border border-rose-950/60 shadow-xl">
          {/* Section Nav Pill Links */}
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-rose-200 font-semibold bg-rose-950/80 border border-rose-800/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-rose-950/30'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* RHS Social & Resume Trigger */}
          <div className="flex items-center gap-2 pl-2 ml-1">
            <MagneticButton>
              <a
                href="https://github.com/AkashS-0107"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-rose-950/30 text-slate-400 hover:text-white hover:border-rose-800/40 transition-all border border-transparent"
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
                className="p-2 rounded-xl bg-rose-950/30 text-slate-400 hover:text-white hover:border-rose-800/40 transition-all border border-transparent"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton onClick={onOpenResume}>
              <span className="px-4 py-2 rounded-xl bg-rose-900/90 hover:bg-rose-800 text-rose-100 border border-rose-700/40 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md">
                <FileText className="w-3.5 h-3.5" />
                Resume
              </span>
            </MagneticButton>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Trigger */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 rounded-xl bg-[#140b0d]/90 backdrop-blur-md text-slate-200 border border-rose-950/60 shadow-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-rose-300" /> : <Menu className="w-6 h-6 text-rose-300" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-4 z-50 w-64 bg-[#140b0d] border border-rose-950/80 rounded-2xl p-5 flex flex-col gap-3 text-xs uppercase tracking-wider backdrop-blur-2xl shadow-2xl text-right">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-rose-300 py-2 w-full font-medium"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center justify-end gap-3 pt-3 w-full">
            <a
              href="https://github.com/AkashS-0107"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-rose-950/30 text-slate-300 hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-suresh-53850a326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-rose-950/30 text-slate-300 hover:text-white"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3.5 py-2 rounded-xl bg-rose-900 text-white font-semibold text-xs uppercase"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
};
