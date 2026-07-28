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
import { AiAssistantWidget } from '@/components/ui/AiAssistantWidget';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <KineticGrid globalColor="default">
      <div className="min-h-screen bg-[#0d090a] text-slate-100 selection:bg-rose-600 selection:text-white font-sans relative">
        {/* Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Executive Welcome Hero Section */}
        <WelcomeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* About & Academic Profile */}
        <About />

        {/* Technical Stack */}
        <Skills />

        {/* Featured Engineering Projects */}
        <Projects />

        {/* Verified Certifications & Hackathons */}
        <Certifications />

        {/* 3D Social Connect End Section */}
        <section id="connect">
          <SocialConnect />
        </section>

        {/* Footer */}
        <Footer />

        {/* Official Resume View Modal (Triggered by RHS Resume button) */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Interactive AI Chat Assistant Widget */}
        <AiAssistantWidget onOpenResume={() => setIsResumeOpen(true)} />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </KineticGrid>
  );
}

export default App;
