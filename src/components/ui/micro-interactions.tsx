import React, { useState, useRef, ReactNode } from 'react';

// 1. Magnetic Button Component (Div Wrapper to avoid nested button hydration warnings)
interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.35;
    const y = (e.clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
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
    </div>
  );
};

// 2. Spotlight Card Component (Red Crimson Spotlight)
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
      className={`relative overflow-hidden rounded-2xl bg-[#140c0f]/80 backdrop-blur-xl border border-rose-950/40 transition-all duration-300 ${className}`}
    >
      {/* Radial Gradient Overlay (Red / Crimson HEX) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, #ef444420, #dc262610 50%, transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// 3. Slide-Down Panel Container (Clean, Line-Free Bland Aesthetics)
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
    <div className="rounded-2xl bg-[#140c0f]/90 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-rose-500/40 shadow-xl border border-rose-950/30">
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-rose-950/20 hover:bg-rose-950/40 transition-colors text-left group"
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="p-3 rounded-xl bg-rose-950/60 text-rose-400 group-hover:scale-105 transition-all">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
              {title}
            </h3>
            {subtitle && <p className="text-xs text-rose-300/70 mt-0.5">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {badge && (
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-rose-950/60 text-rose-300 text-xs font-medium">
              {badge}
            </span>
          )}
          <div
            className={`w-8 h-8 rounded-full bg-rose-950/40 flex items-center justify-center text-rose-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180 bg-rose-900/60 text-rose-300' : ''
            }`}
          >
            ↓
          </div>
        </div>
      </button>

      {/* Slide Down Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1200px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
