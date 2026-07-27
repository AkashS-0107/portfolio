import React from 'react';
import { X, Download, FileText, ExternalLink, Mail, Phone, MapPin, CheckCircle2, Database } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono">AKASH_SURESH_RESUME.pdf</h3>
              <p className="text-xs text-slate-400">Official Resume Document View</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download / Print PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Resume Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto font-sans text-slate-200 space-y-8 bg-slate-950/60">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wider">AKASH SURESH</h1>
            <p className="text-cyan-400 font-mono text-sm mt-1">B.Tech Artificial Intelligence & Machine Learning Student</p>
            
            <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Chennai, Tamil Nadu, India</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91-9363984548</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> akashscontact7@gmail.com</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">// Professional Summary</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Third-year B.Tech student specializing in Artificial Intelligence and Machine Learning, with hands-on experience in Python, C/C++, and SQL/MongoDB-based application development. Practical experience working with modern AI development tools (Claude Code, Codex, Antigravity) and workflow automation (n8n) to build and optimize AI-agent-driven applications and websites. Detail-oriented, with a track record of quality assurance and UI improvement work on team software projects. Seeking an internship to apply technical and AI-tooling skills in a real-world engineering environment.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">// Education</h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex justify-between font-bold text-white">
                  <span>Bachelor of Technology (B.Tech) – Artificial Intelligence & Machine Learning</span>
                  <span className="text-cyan-400 font-mono text-xs">Expected Grad: May 2028</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">SRM Institute of Science and Technology, Ramapuram Campus</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400">Higher Secondary (12th)</div>
                  <div className="text-white font-bold font-mono">Completed</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400">Secondary (10th)</div>
                  <div className="text-white font-bold font-mono">Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">// Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-cyan-400 font-mono">Programming Languages:</strong> Python, C, C++, Java (Basic), SQL
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-cyan-400 font-mono">AI Tools & Agent Dev:</strong> Claude Code, Codex, Antigravity, n8n (workflow automation), Prompt Optimization
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-cyan-400 font-mono">Web Technologies:</strong> HTML, CSS, React, TypeScript, Tailwind CSS
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-cyan-400 font-mono">Databases & Tools:</strong> MongoDB (Certified), Microsoft SQL Server, Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">// Academic Projects</h2>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white flex justify-between">
                  <span>WorkSure – Blue-Collar Worker Verification Platform (Team Project)</span>
                  <a href="https://github.com/AkashS-0107/worksure.git" target="_blank" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">GitHub Repo <ExternalLink className="w-3 h-3"/></a>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1">
                  <li>Contributed to platform concept connecting verified skilled workers with employers.</li>
                  <li>Worked on UI enhancement to improve usability and visual clarity, alongside testing and error spotting across platform.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white">Hospital Bed Management System (Team Project)</div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1">
                  <li>Collaborated on patient admissions, room allocation, discharge, employee records, and medicine inventory.</li>
                  <li>Led testing across database operations and application logic to improve reliability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">// Certifications & Competitions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center gap-2 sm:col-span-2">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-bold text-white">MongoDB Basics for Students – MongoDB, Inc. (07-04-2026 | ID: MDBnoiow5b82a)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Introduction to AI – Adobe Learning Manager (2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Intro to OS – NPTEL IIT Madras (Elite Certification, 2025)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Python & Java Basic – HackerRank Certificates</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>THREX Hackathon – Participant (Zoho x Gritscape 2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Code Wars ASIMOV '25 – Robotics & Automation Dept</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
