import React, { useState, useEffect } from 'react';
import { Clock, Menu, X, ArrowRight, Link as LinkIcon } from 'lucide-react';
import { ShaderHeroBackground } from './ui/ShaderHeroBackground';
import { TextRollButton } from './ui/TextRollButton';

interface AxionLandingPageProps {
  onOpenResume: () => void;
}

export const AxionLandingPage: React.FC<AxionLandingPageProps> = ({ onOpenResume }) => {
  const [londonTime, setLondonTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live London Time Clock Update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      setLondonTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#EFEFEF] font-sans antialiased text-gray-900 overflow-x-hidden">
      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION 1: HERO (Full Viewport Height)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full flex flex-col bg-[#EFEFEF] overflow-hidden">
        {/* Animated Shader Background */}
        <ShaderHeroBackground />

        {/* Navigation Bar (z-20) */}
        <header className="relative z-20 w-full max-w-[1440px] mx-auto p-2 sm:p-3">
          <nav className="flex items-center justify-between bg-white rounded-full p-1.5 shadow-sm border border-gray-100/80">
            {/* LEFT Logo & Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] sm:text-[11px] font-bold tracking-tight shrink-0">
                AX
              </a>
              <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-gray-900">
                <a href="#about" className="hover:text-gray-500 transition-colors duration-300">About</a>
                <a href="#projects" className="hover:text-gray-500 transition-colors duration-300">Projects</a>
                <a href="#skills" className="hover:text-gray-500 transition-colors duration-300">Skills</a>
                <a href="#connect" className="hover:text-gray-500 transition-colors duration-300">Connect</a>
              </div>
            </div>

            {/* RIGHT Desktop Items */}
            <div className="hidden md:flex items-center gap-5">
              <span className="text-[13px] text-gray-600 hidden lg:inline-block">
                Taking on projects for Q1 2026
              </span>
              <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                <Clock className="w-3.5 h-3.5" />
                <span>{londonTime || '12:00'} in London</span>
              </div>

              {/* Book a Strategy Call / View Resume Button */}
              <TextRollButton
                text="Book a strategy call"
                variant="dark"
                onClick={onOpenResume}
              />
            </div>

            {/* MOBILE Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl mx-3 mb-3 p-6 flex flex-col gap-6 animate-in slide-in-from-bottom duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{londonTime} in London</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-4 text-[28px] sm:text-[32px] font-medium text-gray-900">
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                <a href="#connect" onClick={() => setMobileMenuOpen(false)}>Connect</a>
              </div>

              <div className="pt-2">
                <TextRollButton
                  text="Start a project"
                  variant="orange"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full justify-between"
                />
              </div>
            </div>
          </div>
        )}

        {/* Hero Content (z-20 Bottom Positioned) */}
        <div className="relative z-20 flex-1 flex flex-col justify-end max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <div className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide font-medium mb-5 sm:mb-8">
            Axion Studio
          </div>

          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-5xl">
            We craft digital experiences <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            for brands ready to dominate <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            their category online.
          </h1>

          {/* CTA Row */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <TextRollButton
              text="Start a project"
              variant="orange"
              onClick={onOpenResume}
            />

            {/* Certified Partner Badge */}
            <div className="bg-white rounded-[4px] px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" viewBox="0 0 100 100">
                <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
              </svg>
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">Certified Partner</span>
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium">Featured</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION 2: ABOUT (White Background)
      ────────────────────────────────────────────────────────────────────────── */}
      <section id="about" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Badge Row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              1
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-800">
              Introducing Axion
            </span>
          </div>

          {/* Heading h2 */}
          <div className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-28">
            <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-4xl">
              Strategy-led creatives, delivering <br />
              results in digital and beyond.
            </h2>
          </div>

          {/* Content Area - Responsive Grid */}
          <div className="px-5 sm:px-8 lg:px-12">
            {/* Mobile / Tablet Stacked View */}
            <div className="lg:hidden flex flex-col gap-8">
              <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 max-w-xl">
                Through research, creative thinking and iteration we help growing brands realize their digital full potential.
              </p>
              <div>
                <TextRollButton text="About our studio" variant="orange" href="#projects" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                  alt="Axion Small Studio Showcase"
                  className="sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover"
                />
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                  alt="Axion Large Studio Showcase"
                  className="sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Desktop 3-Column Layout */}
            <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
              {/* Left Column */}
              <div className="self-end">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                  alt="Axion Small Studio Showcase"
                  className="w-full aspect-[438/346] rounded-2xl object-cover shadow-sm"
                />
              </div>

              {/* Center Column */}
              <div className="self-start flex flex-col items-end justify-between h-full py-2">
                <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap text-right">
                  Through research, creative<br />
                  thinking and iteration we help<br />
                  growing brands realize their<br />
                  digital full potential.
                </p>
                <div className="mt-8">
                  <TextRollButton text="About our studio" variant="orange" href="#projects" />
                </div>
              </div>

              {/* Right Column */}
              <div className="self-end">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                  alt="Axion Large Studio Showcase"
                  className="w-full aspect-[3/2] rounded-2xl object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION 3: CASE STUDIES (Light Gray Background)
      ────────────────────────────────────────────────────────────────────────── */}
      <section id="projects" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto">
          {/* Badge Row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              2
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-800">
              Featured client work
            </span>
          </div>

          {/* Heading h2 */}
          <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
              Our projects
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {/* Card 1: Narrativ (WorkSure Verification Platform) */}
            <div className="flex flex-col">
              <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer shadow-md">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Hover expanding white button */}
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center px-2.5 overflow-hidden transition-all duration-300 ease-in-out shadow-lg">
                  <div className="shrink-0 w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <LinkIcon className="w-3.5 h-3.5 text-gray-900" />
                  </div>
                  <span className="ml-2 text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Learn more
                  </span>
                </div>
              </div>

              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement
              </p>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                Narrativ (WorkSure Verification Platform)
              </h3>
            </div>

            {/* Card 2: Luminar (Hospital Bed Management System) */}
            <div className="flex flex-col">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer shadow-md">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Hover expanding dark button */}
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-gray-900 rounded-full flex items-center px-2.5 overflow-hidden transition-all duration-300 ease-in-out shadow-lg">
                  <div className="shrink-0 w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="ml-2 text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View case study
                  </span>
                </div>
              </div>

              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                Transforming a dated platform into a conversion-focused brand experience
              </p>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                Luminar (Hospital Bed Management)
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
