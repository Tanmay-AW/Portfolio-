// src/components/TerminalCaret.tsx

import React, { useEffect, useRef } from 'react';

const TerminalCaret: React.FC = () => {
  const caretRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const caret = caretRef.current;
    if (!caret) return;

    const handleMouseMove = (e: MouseEvent) => {
      caret.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    document.body.classList.add('caret-cursor-active');
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.classList.remove('caret-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={caretRef}
      className="terminal-caret"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '10px',
        height: '1.2rem',
        backgroundColor: '#0f0', // Neon green
        boxShadow: '0 0 5px #0f0',
        zIndex: 9999,
        pointerEvents: 'none',
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

export default TerminalCaret;
