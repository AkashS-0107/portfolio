"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { MagneticButton } from "./micro-interactions"
import { Terminal, ArrowRight, Sparkles } from "lucide-react"

interface Character {
  char: string
  x: number
  y: number
  speed: number
}

class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{
    from: string
    to: string
    start: number
    end: number
    char?: string
  }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => this.resolve = resolve)
    this.queue = []
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

const ScrambledTitle: React.FC = () => {
  const elementRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      const phrases = [
        'AKASH SURESH',
        'AI & ML ENGINEER',
        'AI AGENT AUTOMATION',
        'CLAUDE CODE | ANTIGRAVITY | N8N',
        'SRM INSTITUTE OF SCIENCE & TECH',
        'MONGODB CERTIFIED DEVELOPER'
      ]
      
      let counter = 0
      const next = () => {
        if (scramblerRef.current) {
          scramblerRef.current.setText(phrases[counter]).then(() => {
            setTimeout(next, 2200)
          })
          counter = (counter + 1) % phrases.length
        }
      }

      next()
    }
  }, [mounted])

  return (
    <h1 
      ref={elementRef}
      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-center drop-shadow-[0_0_35px_rgba(6,182,212,0.7)]"
      style={{ fontFamily: 'monospace' }}
    >
      AKASH SURESH
    </h1>
  )
}

const RainingLetters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())
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
    }, 2500)
    return () => clearInterval(interval)
  }, [greetings.length])

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const charCount = 240
    const newCharacters: Character[] = []

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
      })
    }

    return newCharacters
  }, [])

  useEffect(() => {
    setCharacters(createCharacters())
  }, [createCharacters])

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>()
      const numActive = Math.floor(Math.random() * 4) + 3
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length))
      }
      setActiveIndices(newActiveIndices)
    }

    const flickerInterval = setInterval(updateActiveIndices, 50)
    return () => clearInterval(flickerInterval)
  }, [characters.length])

  useEffect(() => {
    let animationFrameId: number

    const updatePositions = () => {
      setCharacters(prevChars => 
        prevChars.map(char => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".length)
            ],
          }),
        }))
      )
      animationFrameId = requestAnimationFrame(updatePositions)
    }

    animationFrameId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Raining Matrix Characters (Cyan & Ice Blue) */}
      {characters.map((char, index) => (
        <span
          key={index}
          className={`absolute text-xs transition-colors duration-100 ${
            activeIndices.has(index)
              ? index % 3 === 0 
                ? "text-sky-300 text-base scale-125 z-10 font-bold animate-pulse"
                : "text-cyan-400 text-base scale-125 z-10 font-bold animate-pulse"
              : "text-cyan-950/40 font-light"
          }`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            transform: `translate(-50%, -50%) ${activeIndices.has(index) ? 'scale(1.25)' : 'scale(1)'}`,
            textShadow: activeIndices.has(index) 
              ? index % 3 === 0 ? '0 0 12px rgba(56,189,248,0.9)' : '0 0 12px rgba(6,182,212,0.9)' 
              : 'none',
            opacity: activeIndices.has(index) ? 1 : 0.3,
            willChange: 'transform, top',
            fontSize: '1.6rem'
          }}
        >
          {char.char}
        </span>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Justin Juby Style Multilingual Micro-Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/60 backdrop-blur-2xl text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_25px_rgba(6,182,212,0.3)]">
          <span className="font-serif-italic text-sm text-sky-200 transition-all duration-500">
            "{greetings[greetingIndex].text}"
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-900/80 border border-cyan-500/30 text-cyan-300 font-bold">
            {greetings[greetingIndex].lang}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>Full Stack & AI Builder</span>
        </div>

        <ScrambledTitle />

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          Crafting striking digital experiences with <strong className="text-cyan-300 font-medium">React, Python, AI Agents, and MongoDB</strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <MagneticButton>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#skills"
              className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 font-mono text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              Technical Stack
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}

export default RainingLetters
