import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import KineticGrid from '@/components/ui/kinetic-grid';
import { Navbar } from '@/components/Navbar';
import { WelcomeSection } from '@/components/WelcomeSection';
import ElegantCarousel from '@/components/ui/elegant-carousel';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { SmoothScrollHero } from '@/components/ui/modern-hero';
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

        {/* Welcome Section - Part 1 & Part 2 with HIRE ME CTA */}
        <WelcomeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Elegant Carousel Showcase */}
        <section className="py-12">
          <ElegantCarousel />
        </section>

        {/* About & Academic Profile */}
        <About />

        {/* Technical Stack */}
        <Skills />

        {/* Projects Vault */}
        <Projects />

        {/* Smooth Scroll Experience & Certifications Hero */}
        <section className="py-12">
          <SmoothScrollHero />
        </section>

        {/* Certifications Detailed List */}
        <Certifications />

        {/* Justin Juby Inspired 3D Social Connect End Section */}
        <section id="connect">
          <SocialConnect />
        </section>

        {/* Footer */}
        <Footer />

        {/* Official Resume View Modal (Includes CGPA 7.10 & Academic Marks) */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </KineticGrid>
  );
}

export default App;
