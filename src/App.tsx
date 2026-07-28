import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import KineticGrid from '@/components/ui/kinetic-grid';
import { Navbar } from '@/components/Navbar';
import { WelcomeSection } from '@/components/WelcomeSection';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { SocialConnect } from '@/components/ui/connect-with-us';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <KineticGrid globalColor="default">
      <div className="min-h-screen text-slate-100 selection:bg-rose-600 selection:text-white font-sans">
        {/* Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Executive Welcome Hero Section */}
        <WelcomeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* About & Academic Profile */}
        <About />

        {/* Technical Stack */}
        <Skills />

        {/* Academic Projects */}
        <Projects />

        {/* Verified Certifications & Hackathons */}
        <Certifications />

        {/* 3D Social Connect End Section */}
        <section id="connect">
          <SocialConnect />
        </section>

        {/* Footer */}
        <Footer />

        {/* Official Resume View Modal (Includes Academic CGPA 7.10 & Board Marks) */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </KineticGrid>
  );
}

export default App;
