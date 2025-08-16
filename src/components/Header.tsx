// src/components/Header.

import resumePDF from '../assets/Resume.pdf';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 border border-gray-800 rounded bg-black/50">
            <span className="text-white font-mono text-sm">Tanmay Gunwant</span>
          </div>
          <div className="hidden sm:block text-xs text-gray-400 font-mono">web designer · MEARN-stack</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-[#00ff72] hover:text-white font-mono">#home</a>
          <a href="#projects" className="text-gray-300 hover:text-[#00ff72] font-mono">#projects</a>
          <a href="#about" className="text-gray-300 hover:text-[#00ff72] font-mono">#about-me</a>
          <a href="#contacts" className="text-gray-300 hover:text-[#00ff72] font-mono">#contacts</a>
        </nav>

        {/* small mobile CTA */}
        <div className="md:hidden flex items-center gap-2">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-[#00ff72]/10" title="Resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M15.5 12H8.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"></path>
            </svg>
          </a>
          <a href="#contacts" className="text-sm px-3 py-1 border border-[#0f0f0f] rounded text-[#00ff72] hover:bg-[#00ff72] hover:text-black transition-colors">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
