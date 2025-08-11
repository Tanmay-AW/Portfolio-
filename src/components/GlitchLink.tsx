// src/components/GlitchLink.tsx
import React from 'react';

interface GlitchLinkProps {
  href: string;
  text: string;
  className?: string; // Allow passing custom Tailwind classes
}

const GlitchLink: React.FC<GlitchLinkProps> = ({ href, text, className = '' }) => {
  return (
    <a
      href={href}
      className={`glitch-effect inline-block ${className}`}
      data-text={text} // The CSS uses this attribute for the glitch text
    >
      {text}
    </a>
  );
};

export default GlitchLink;