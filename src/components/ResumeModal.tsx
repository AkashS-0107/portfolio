import React from 'react';
import { X, Download, FileText, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = import.meta.env.BASE_URL + 'AKASH_SURESH_RESUME.pdf';

  const handlePrintOrOpen = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <div className="bg-slate-950 border border-rose-900/60 rounded-2xl w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0d090a] border-b border-rose-900/40 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-950/80 text-rose-400 border border-rose-800/60">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">AKASH_SURESH_RESUME.pdf</h3>
              <p className="text-xs text-rose-300/80 font-mono">Official PDF Resume Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Open Original PDF / Print Button */}
            <button
              onClick={handlePrintOrOpen}
              className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md border border-rose-400/40"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Open PDF</span>
            </button>

            {/* Direct Download PDF Button */}
            <a
              href={pdfUrl}
              download="AKASH_SURESH_RESUME.pdf"
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center gap-2 border border-slate-800"
            >
              <Download className="w-4 h-4 text-rose-400" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Crisp Embedded Official PDF Viewer */}
        <div className="flex-1 w-full h-full bg-slate-950 p-2 relative">
          <iframe
            src={pdfUrl + '#toolbar=1&navpanes=0&gridlines=0'}
            title="Akash Suresh Official Resume PDF"
            className="w-full h-full rounded-xl border border-rose-900/30"
          />
        </div>
      </div>
    </div>
  );
};
