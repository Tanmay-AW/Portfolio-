// src/pages/Home.tsx

import * as React from 'react';


// Import Page Section Components
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'; 
import MediaHanger from '../components/MediaHanger';
import StatusBar from '../components/StatusBar';
import Quote from '../components/Quote';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Import Effect Components
import DigitalRain from '../components/DigitalRain';
import TerminalCaret from '../components/TerminalCaret';
import EffectToggle from '../components/EffectToggle';


const Home = () => {
  // Scroll to contacts section if hash is present in URL
  React.useEffect(() => {
    if (window.location.hash === '#contacts') {
      const el = document.getElementById('contacts');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);

  const effects = ['Off', 'Rain', 'Caret'];
  const [effectIndex, setEffectIndex] = React.useState(0);

  const handleToggle = () => {
    setEffectIndex((prevIndex) => (prevIndex + 1) % effects.length);
  };

  const currentEffect = effects[effectIndex];

  return (
    <div className="bg-black text-white font-mono">
      {/* Effects are rendered first, at a lower z-index */}
      {currentEffect === 'Rain' && <DigitalRain />}
      {currentEffect === 'Caret' && <TerminalCaret />}

      {/* Fixed components are not wrapped, they have their own high z-index */}
      <Navbar>
        <EffectToggle currentEffect={currentEffect} onToggle={handleToggle} />
      </Navbar>
      
      <MediaHanger />
      
      {/* THE FIX: Lift the main scrolling content to a higher layer */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <StatusBar />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      
      {/* THE FIX: Also lift the footer to the same higher layer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
