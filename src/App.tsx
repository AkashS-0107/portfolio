import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AxionLandingPage } from '@/components/AxionLandingPage';
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
    <div className="min-h-screen bg-[#0d090a] text-slate-100 selection:bg-[#F26522] selection:text-white font-sans">
      {/* Axion Studio Landing Page (Sections 1, 2 & 3 with Animated Shaders, Text-Roll Buttons, Partner Badge & Case Studies) */}
      <AxionLandingPage onOpenResume={() => setIsResumeOpen(true)} />

      {/* About & Academic Profile */}
      <About />

      {/* Technical Stack */}
      <Skills />

      {/* Academic Projects */}
      <Projects />

      {/* Verified Certifications & Hackathons Section */}
      <Certifications />

      {/* 3D Social Connect End Section */}
      <section id="connect">
        <SocialConnect />
      </section>

      {/* Footer */}
      <Footer />

      {/* Official Resume View Modal (Includes Academic CGPA 7.10 & Marks) */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Interactive AI Chat Assistant */}
      <AiAssistantWidget onOpenResume={() => setIsResumeOpen(true)} />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
