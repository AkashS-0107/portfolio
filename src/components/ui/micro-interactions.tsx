import React, { useState, useRef, ReactNode } from 'react';

// 1. Magnetic Button Component (Cursor Following Elastic Hover)
interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.35;
    const y = (e.clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
      }}
      className={`relative inline-flex items-center justify-center transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// 2. Spotlight Card Component (HEX radial glow without RGB)
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {/* Radial Gradient Overlay (HEX Alpha Only, NO RGB) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, #38bdf829, #818cf814 50%, transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// 3. Slide-Down Panel Container
interface SlideDownPanelProps {
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
  badge?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export const SlideDownPanel: React.FC<SlideDownPanelProps> = ({
  title,
  subtitle,
  icon: Icon,
  badge,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-slate-800/90 bg-[#0c1220]/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-sky-500/40 shadow-xl">
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-slate-900/40 hover:bg-slate-900/80 transition-colors text-left group"
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 group-hover:scale-110 group-hover:border-indigo-400/50 transition-all">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
              {title}
            </h3>
            {subtitle && <p className="text-xs font-mono text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {badge && (
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 font-mono text-xs">
              {badge}
            </span>
          )}
          <div
            className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180 bg-sky-950 border-sky-500/40 text-indigo-400' : ''
            }`}
          >
            ↓
          </div>
        </div>
      </button>

      {/* Slide Down Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1200px] opacity-100 p-6 border-t border-slate-900' : 'max-h-0 opacity-0 p-0 border-none'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
