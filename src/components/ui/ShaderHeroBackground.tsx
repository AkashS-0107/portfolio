import React, { useEffect, useRef } from 'react';

export const ShaderHeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.008;
      const w = canvas.width;
      const h = canvas.height;

      // Base background
      ctx.fillStyle = '#EFEFEF';
      ctx.fillRect(0, 0, w, h);

      // Organic Swirl Blob 1 (Orange glow)
      const x1 = w * 0.6 + Math.sin(time) * 120;
      const y1 = h * 0.35 + Math.cos(time * 0.8) * 90;
      const r1 = Math.min(w, h) * 0.45;

      const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
      grad1.addColorStop(0, 'rgba(242, 101, 34, 0.22)');
      grad1.addColorStop(0.5, 'rgba(255, 95, 3, 0.08)');
      grad1.addColorStop(1, 'rgba(239, 239, 239, 0)');

      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(x1, y1, r1, 0, Math.PI * 2);
      ctx.fill();

      // Organic Swirl Blob 2 (Soft Rose Accent)
      const x2 = w * 0.3 + Math.cos(time * 1.1) * 100;
      const y2 = h * 0.65 + Math.sin(time * 0.9) * 80;
      const r2 = Math.min(w, h) * 0.4;

      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
      grad2.addColorStop(0, 'rgba(190, 18, 60, 0.12)');
      grad2.addColorStop(0.6, 'rgba(225, 29, 72, 0.04)');
      grad2.addColorStop(1, 'rgba(239, 239, 239, 0)');

      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(x2, y2, r2, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle Glass Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
