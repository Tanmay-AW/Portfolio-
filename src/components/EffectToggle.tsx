// src/components/EffectToggle.tsx

import React from 'react';

interface EffectToggleProps {
  currentEffect: string;
  onToggle: () => void;
}

const EffectToggle: React.FC<EffectToggleProps> = ({ currentEffect, onToggle }) => {
  return (
    // THE FIX: Added responsive classes.
    // 'hidden' makes it disappear by default.
    // 'md:flex' makes it appear as a flex container on medium screens and up.
    <div className="hidden md:flex">
      <button
        onClick={onToggle}
        className="text-xs font-mono border border-gray-600 rounded-md px-3 py-1 flex items-center gap-2 text-gray-400 hover:text-white hover:border-green-400 transition-all"
      >
        <div className={`w-2 h-2 rounded-full ${currentEffect !== 'Off' ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`}></div>
        <span>FX: {currentEffect}</span>
      </button>
    </div>
  );
};

export default EffectToggle;
