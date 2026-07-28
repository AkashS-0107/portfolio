import React from 'react';
import { X, Download, FileText, ExternalLink, Mail, Phone, MapPin, CheckCircle2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">AKASH_SURESH_RESUME.pdf</h3>
              <p className="text-xs text-slate-400 font-mono">Official PDF Resume Document View</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all flex items-center gap-1.5 border border-sky-400/40"
            >
              <Download className="w-3.5 h-3.5" />
              Download / Print PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Official Resume Content matching uploaded PDF */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto font-sans text-slate-200 space-y-7 bg-slate-950">
          {/* Resume Header */}
          <div className="pb-6 border-b border-slate-800">
            <h1 className="text-3xl font-extrabold text-white tracking-wider">AKASH SURESH</h1>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-400" /> Chennai, Tamil Nadu, India</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-sky-400" /> +91-9363984548</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> akashscontact7@gmail.com</span>
              <a href="https://www.linkedin.com/in/akash-suresh-53850a326/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline"><LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn</a>
              <a href="https://github.com/AkashS-0107" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline"><GithubIcon className="w-3.5 h-3.5" /> GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs text-sky-400 uppercase tracking-wider font-semibold mb-2 font-mono">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              AI/ML-track B.Tech engineer shipping Python/C++/SQL builds and orchestrating AI-agent pipelines (Claude Code, Codex, Antigravity, n8n) to spin up full-stack tools fast. QA-minded contributor across team projects — finds edge cases before they ship, then polishes the UI layer. Hunting an internship to compile classroom fundamentals into production-grade reps.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs text-sky-400 uppercase tracking-wider font-semibold mb-3 font-mono">Education</h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white gap-1">
                  <span>B.Tech – Computer Science, AI & ML Specialization</span>
                  <span className="text-sky-400 text-xs font-mono">Expected Graduation: May 2028 | CGPA: 7.10</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">SRM Institute of Science and Technology, Ramapuram Campus</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-slate-400">Higher Secondary (12th)</div>
                  <div className="text-white font-bold text-sm mt-1">64.33%</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-slate-400">Secondary (10th)</div>
                  <div className="text-white font-bold text-sm mt-1">73%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs text-sky-400 uppercase tracking-wider font-semibold mb-3 font-mono">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">Web:</strong> HTML, CSS
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">AI Tooling & Agent Ops:</strong> Claude Code, Codex, Antigravity, n8n workflow automation, prompt/agent optimization across Claude, Gemini, ChatGPT
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">Dev Tools:</strong> Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs text-sky-400 uppercase tracking-wider font-semibold mb-3 font-mono">Projects</h2>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="font-bold text-white">Hospital Bed Management System — Team Build</div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1 leading-relaxed">
                  <li>Shipped a hospital ops app: admissions, room allocation, discharge flow, staff records, medicine inventory.</li>
                  <li>Owned QA — hunted and logged bugs across DB operations and app logic to harden reliability pre-demo.</li>
                </ul>
                <div className="text-xs text-slate-400 font-mono mt-2.5">Stack: Python, SQL Server, HTML, CSS</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="font-bold text-white flex justify-between">
                  <span>WorkSure — Blue-Collar Worker Verification Platform, Team Build</span>
                  <a href="https://github.com/AkashS-0107/worksure.git" target="_blank" rel="noopener noreferrer" className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-normal font-mono">Repo Link <ExternalLink className="w-3 h-3"/></a>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1 leading-relaxed">
                  <li>Contributed to a trust-layer platform: worker verification, trust scores, ratings, employer dashboards.</li>
                  <li>Reworked UI for clarity + usability; ran QA sweeps across the platform to catch regressions.</li>
                </ul>
                <div className="text-xs text-sky-400 font-mono mt-2.5">Repo: https://github.com/AkashS-0107/worksure.git</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs text-sky-400 uppercase tracking-wider font-semibold mb-3 font-mono">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2 sm:col-span-2">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-bold text-white">MongoDB Basics for Students – MongoDB, Inc. (Apr 2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Introduction to Artificial Intelligence – Adobe Learning Manager (Jan 2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Introduction to Operating Systems – NPTEL Elite, IIT Madras, 60% (Jul–Sep 2025)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Java (Basic) – HackerRank (Sep 2025) | Python (Basic) – HackerRank (Oct 2025)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>THREX Hackathon – Gritscape x Zoho, Participant (Feb 2026)</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs text-sky-400 uppercase tracking-wider font-semibold mb-3 font-mono">Core Competencies</h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['Problem Solving', 'Debugging & QA', 'Database Fundamentals', 'AI Agent Workflows', 'Team Collaboration', 'Communication'].map((comp, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
