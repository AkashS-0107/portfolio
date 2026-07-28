import React, { useEffect, useState } from 'react';

export const ShaderHeroBackground: React.FC = () => {
  const [ShaderComponents, setShaderComponents] = useState<any>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    import('shaders/react')
      .then((mod) => {
        setShaderComponents({
          Shader: mod.Shader,
          Swirl: mod.Swirl,
          ChromaFlow: mod.ChromaFlow,
          FlutedGlass: mod.FlutedGlass,
          FilmGrain: mod.FilmGrain,
        });
      })
      .catch((err) => {
        console.warn('Shader background fallback active:', err);
        setHasError(true);
      });
  }, []);

  if (hasError || !ShaderComponents) {
    return (
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(242, 101, 34, 0.15) 0%, rgba(239, 239, 239, 0) 70%), #EFEFEF'
        }}
      />
    );
  }

  const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = ShaderComponents;

  try {
    return (
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <Shader>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>
    );
  } catch (err) {
    console.warn('Shader render error fallback:', err);
    return (
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(242, 101, 34, 0.15) 0%, rgba(239, 239, 239, 0) 70%), #EFEFEF'
        }}
      />
    );
  }
};
