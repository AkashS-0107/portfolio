import React from 'react';
import { X, Download, FileText, ExternalLink, Mail, Phone, MapPin, CheckCircle2, Database } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0d090a]/80 backdrop-blur-md">
      <div className="bg-[#140b0d] border border-rose-950/60 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0d090a] border-b border-rose-950/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-950/60 text-rose-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">AKASH_SURESH_RESUME.pdf</h3>
              <p className="text-xs text-slate-400 font-mono">Official Resume Document View</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 rounded-lg bg-rose-900/90 hover:bg-rose-800 text-rose-100 font-semibold text-xs transition-all flex items-center gap-1.5 border border-rose-700/40"
            >
              <Download className="w-3.5 h-3.5" />
              Download / Print PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-rose-950/40 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Full Resume Content with Academic CGPA & Marks */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto font-sans text-slate-200 space-y-7 bg-[#10080a]">
          {/* Resume Header */}
          <div className="pb-6 border-b border-rose-950/40">
            <h1 className="text-3xl font-extrabold text-white tracking-wider">AKASH SURESH</h1>
            <p className="text-rose-300 text-sm font-medium mt-1 font-mono">B.Tech Computer Science & Engineering (Specialization in AI & ML)</p>
            
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-300" /> Chennai, Tamil Nadu, India</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-rose-300" /> +91-9363984548</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-rose-300" /> akashscontact7@gmail.com</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs text-rose-300 uppercase tracking-wider font-semibold mb-2 font-mono">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Third-year B.Tech student pursuing Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning, with hands-on experience in Python, C/C++, and SQL/MongoDB-based application development. Practical experience working with modern AI development tools (Claude Code, Codex, Antigravity) and workflow automation (n8n) to build and optimize AI-agent-driven applications and websites. Detail-oriented, with a track record of quality assurance and UI improvement work on team software projects. Seeking an internship to apply technical and AI-tooling skills in a real-world engineering environment.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs text-rose-300 uppercase tracking-wider font-semibold mb-3 font-mono">Education</h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-950/40">
                <div className="flex justify-between font-bold text-white">
                  <span>Bachelor of Technology (B.Tech) – Computer Science & Engineering (Specialization in AI & ML)</span>
                  <span className="text-rose-300 text-xs font-mono">Expected Grad: May 2028</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">SRM Institute of Science and Technology, Ramapuram Campus</div>
                <div className="text-xs font-mono text-rose-300 font-bold mt-2">Academic Score: CGPA 7.10 / 10.0</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-950/40">
                  <div className="text-slate-400">Higher Secondary (12th Grade)</div>
                  <div className="text-white font-bold text-sm mt-1">64.33% Secured</div>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-950/40">
                  <div className="text-slate-400">Secondary School (10th Grade)</div>
                  <div className="text-white font-bold text-sm mt-1">73.00% Secured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs text-rose-300 uppercase tracking-wider font-semibold mb-3 font-mono">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-950/40">
                <strong className="text-white font-mono">Programming Languages:</strong> Python, C, C++, Java (Basic), SQL
              </div>
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-950/40">
                <strong className="text-white font-mono">AI Tools & Agent Dev:</strong> Claude Code, Codex, Antigravity, n8n (workflow automation), Prompt Optimization
              </div>
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-950/40">
                <strong className="text-white font-mono">Web Technologies:</strong> HTML, CSS, React, TypeScript, Tailwind CSS
              </div>
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-950/40">
                <strong className="text-white font-mono">Databases & Tools:</strong> MongoDB (Certified), Microsoft SQL Server, Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-xs text-rose-300 uppercase tracking-wider font-semibold mb-3 font-mono">Academic Projects</h2>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-950/40">
                <div className="font-bold text-white flex justify-between">
                  <span>WorkSure – Blue-Collar Worker Verification Platform (Team Project)</span>
                  <a href="https://github.com/AkashS-0107/worksure.git" target="_blank" className="text-xs text-rose-300 hover:underline flex items-center gap-1 font-normal font-mono">GitHub Repo <ExternalLink className="w-3 h-3"/></a>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1">
                  <li>Contributed to platform concept connecting verified skilled workers with employers.</li>
                  <li>Worked on UI enhancement to improve usability and visual clarity, alongside testing and error spotting across platform.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-950/40">
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
            <h2 className="text-xs text-rose-300 uppercase tracking-wider font-semibold mb-3 font-mono">Certifications & Competitions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-950/40 flex items-center gap-2 sm:col-span-2">
                <Database className="w-4 h-4 text-rose-300 shrink-0" />
                <span className="font-bold text-white">MongoDB Basics for Students – MongoDB, Inc. (07-04-2026 | ID: MDBnoiow5b82a)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-950/40 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                <span>Introduction to AI – Adobe Learning Manager (2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-950/40 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                <span>Intro to OS – NPTEL IIT Madras (60% Elite Standard, 2025)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-950/40 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                <span>Python & Java Basic – HackerRank Certificates</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-950/40 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                <span>THREX Hackathon – Participant (Zoho x Gritscape 2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-950/40 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                <span>Code Wars ASIMOV '25 – Robotics & Automation Dept</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
