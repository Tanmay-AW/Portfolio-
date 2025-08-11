// src/components/DigitalRain.tsx

import React, { useEffect, useRef } from 'react';

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = 'TANMAYGUNWANT01'.split('');
    const fontSize = 14;
    const drops: { x: number; y: number; char: string; opacity: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        drops.push({
          x: e.clientX,
          y: e.clientY,
          char: characters[Math.floor(Math.random() * characters.length)],
          opacity: 1,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
        ctx.fillText(drop.char, drop.x, drop.y);
        
        drop.y += fontSize;
        drop.opacity -= 0.02;
      }
      
      for (let i = drops.length - 1; i >= 0; i--) {
        if (drops[i].opacity <= 0) {
          drops.splice(i, 1);
        }
      }
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // THE FIX: Changed zIndex from -1 to 1
  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }} />;
};

export default DigitalRain;
