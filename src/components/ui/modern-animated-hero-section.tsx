"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MagneticButton } from "./micro-interactions"
import { ArrowRight } from "lucide-react"

const HeroSection: React.FC = () => {
  const [greetingIndex, setGreetingIndex] = useState(0)

  const greetings = [
    { text: "Hello", lang: "EN" },
    { text: "नमस्ते", lang: "HI" },
    { text: "こんにちは", lang: "JA" },
    { text: "Bonjour", lang: "FR" },
    { text: "안녕하세요", lang: "KO" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [greetings.length])

  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 pt-20 pb-12">
      {/* Clean Minimalist Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Red Crimson Multilingual Micro-Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-rose-950/60 bg-[#120a0d]/80 backdrop-blur-md text-slate-300 text-xs tracking-wide">
          <span className="font-serif-italic text-sm text-rose-300 transition-all duration-500">
            "{greetings[greetingIndex].text}"
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/60 text-rose-400 font-mono">
            {greetings[greetingIndex].lang}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span className="font-medium text-slate-300">Full Stack & AI Engineer</span>
        </div>

        {/* Executive Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          AKASH SURESH
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          Developing intelligent software solutions and responsive web applications with <strong className="text-slate-200 font-semibold">React, Python, AI Agents, and MongoDB</strong>.
        </p>

        {/* Red Tone Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <MagneticButton>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#skills"
              className="px-6 py-3 rounded-xl bg-rose-950/40 hover:bg-rose-950/70 text-slate-200 border border-rose-950/60 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              Technical Stack
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
