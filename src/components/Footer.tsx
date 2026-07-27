import React from 'react';
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          {/* Column 1: Bio */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              B.Tech Artificial Intelligence & Machine Learning Student at SRMIST Ramapuram. Specializing in AI agent engineering, MongoDB, Python, SQL, and responsive web application development.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/AkashS-0107"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-suresh-53850a326/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:akashscontact7@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold tracking-widest uppercase mb-4">// Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">// About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">// Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">// Projects</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">// Certifications</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 space-y-3 text-xs font-mono">
            <h4 className="text-white font-bold tracking-widest uppercase mb-4">// Contact</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Chennai, Tamil Nadu, India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                akashscontact7@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                +91-9363984548
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Akash Suresh. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 transition-all flex items-center gap-1.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
