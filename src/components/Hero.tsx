// src/components/Hero.tsx


import GlitchLink from './GlitchLink'; 
import resumePDF from '../assets/Tanmay_Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 md:px-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/8 w-24 h-24 md:w-32 md:h-32 z-0">
        <div className="w-full h-full border-2 border-green-400/80"></div>
        <div className="w-full h-full border-2 border-green-400/50 absolute top-2 left-2"></div>
        <div className="w-full h-full border-2 border-green-400/30 absolute top-4 left-4"></div>
      </div>
      <div className="absolute top-2/3 right-1/4 hidden md:block z-0">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-700/50 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-left max-w-4xl z-10"><br /><br />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight font-mono">
          Tanmay Gunwant <br />
          <span className="text-green-400">Web Designer</span> and<br />
          <span className="text-green-400">MERN-Stack Developer</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl font-mono">
          I turn complex ideas into sleek, fast, and scalable apps that just work.
        </p>

        <div className="mt-10 flex flex-row items-center gap-6">
          <GlitchLink
            href="#contacts"
            text="Contact me"
            className="border border-green-400 text-green-400 px-8 py-3 font-semibold tracking-widest uppercase hover:bg-green-400/10 transition-colors duration-300"
          />
          <a
            href={resumePDF}
            className="border border-green-400 text-green-400 px-8 py-3 font-semibold tracking-widest uppercase hover:bg-green-400/10 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
