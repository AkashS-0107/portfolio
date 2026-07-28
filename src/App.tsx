import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import KineticGrid from '@/components/ui/kinetic-grid';
import { Navbar } from '@/components/Navbar';
import ElegantCarousel from '@/components/ui/elegant-carousel';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <KineticGrid globalColor="default">
      <div className="min-h-screen text-slate-100 selection:bg-rose-600 selection:text-white font-sans">
        {/* Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Welcome Section - Elegant Carousel */}
        <section id="hero" className="pt-16">
          <ElegantCarousel />
        </section>

        {/* About & Education */}
        <About />

        {/* Technical Skills & Stack */}
        <Skills />

        {/* Academic Projects */}
        <Projects />

        {/* Certifications & Hackathons */}
        <Certifications />

        {/* Footer */}
        <Footer />

        {/* Resume Document Viewer Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </KineticGrid>
  );
}

export default App;
