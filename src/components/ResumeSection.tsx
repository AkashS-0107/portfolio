import React from 'react';
import { FileText, Download, Printer, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SpotlightCard } from '@/components/ui/micro-interactions';

export const ResumeSection: React.FC = () => {
  const pdfUrl = import.meta.env.BASE_URL + 'AKASH_SURESH_RESUME.pdf';

  const handlePrintOrOpen = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="mb-3 flex items-center gap-2">
            <span className="text-rose-400 text-xs font-semibold tracking-wider uppercase font-mono">Official Document</span>
            <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-800/60 text-rose-300 text-[10px] font-mono">PDF Verified</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Resume & Credentials
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                View or download the official single-page PDF resume containing academic history, AI agent specializations, and project QA records.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrintOrOpen}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg border border-rose-400/30"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Open PDF</span>
              </button>

              <a
                href={pdfUrl}
                download="AKASH_SURESH_RESUME.pdf"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center gap-2 border border-rose-900/60"
              >
                <Download className="w-4 h-4 text-rose-400" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Embedded Interactive PDF Document Viewer */}
        <ScrollReveal delay={150}>
          <SpotlightCard className="p-3 sm:p-4 border-rose-900/60 shadow-2xl">
            <div className="w-full h-[650px] sm:h-[750px] bg-slate-950 rounded-xl overflow-hidden border border-rose-900/40 relative">
              <iframe
                src={pdfUrl + '#toolbar=1&navpanes=0&gridlines=0'}
                title="Akash Suresh Official PDF Resume"
                className="w-full h-full rounded-xl"
              />
            </div>

            {/* Document Snapshot Quick Metrics */}
            <div className="mt-4 pt-4 border-t border-rose-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">Degree</span>
                <span className="text-white font-bold">B.Tech CSE (AI/ML)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">SRMIST CGPA</span>
                <span className="text-rose-400 font-bold">7.10 / 10.0</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">12th Board</span>
                <span className="text-white font-bold">64.33%</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">10th Board</span>
                <span className="text-white font-bold">73.00%</span>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
};
