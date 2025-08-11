// src/pages/AboutMePage.tsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MediaHanger from '../components/MediaHanger';
import Footer from '../components/Footer';
import Skills from '../components/Skills'; // We can reuse the skills component

const AboutMePage = () => {
  const workflowSteps = [
    'Plan with clarity – Define scope, architecture, and tech stack before touching a single line of code.',
    'Build with precision – Follow clean coding practices, maintain modularity, and enforce strict version control.',
    'Refine without compromise – Debug, profile, and optimize until both functionality and UI feel flawless.',
    'Deploy with confidence – Test across devices, ensure zero breaking changes, and deliver production-ready builds.',
  ];

  return (
    <div className="bg-black text-white font-mono">
      <Navbar />
      <MediaHanger />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* --- Header --- */}
        <div className="mb-12">
          <Link to="/home" className="text-gray-400 hover:text-green-400 transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-400">/</span>about-me
          </h1>
          <p className="text-lg text-gray-400 mt-2">Who am I?</p>
        </div>

        {/* --- Main Bio --- */}
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
          <p>
            Hello, I’m Tanmay Gunwant. I’m a MERN-stack developer with a relentless focus on precision, performance, and user experience. I don’t just write code — I engineer systems that are fast, maintainable, and purpose-built.
          </p>
          <p>
            I’m a self-taught full-stack developer pursuing B.Tech in Computer Science. My specialty is building interactive, high-performance web applications that merge clean design with robust functionality.
          </p>
          <p>
            I started coding because I was obsessed with turning ideas into something people could actually use — no fluff, just practical tools that solve real problems. Over time, I’ve gone from basic HTML pages to shipping real-world MERN apps with live deployments, authentication, API integrations, and scalable backends.
          </p>
           <p>
            I’m not just focused on writing code — I focus on usability, performance, and maintainability. Whether it’s crafting a pixel-perfect UI in React, optimizing server-side logic in Node.js, or integrating AI features, I aim to build products that are fast, intuitive, and reliable.
          </p>
        </div>

        {/* --- Workflow Section --- */}
        <div className="my-16">
            <h2 className="text-3xl font-bold mb-6"><span className="text-green-400">&gt;</span> My Workflow</h2>
            <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <span className="text-green-400 font-bold text-xl">{index + 1}.</span>
                        <p className="text-gray-300 text-lg">{step}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- Current Focus --- */}
        <div className="my-16">
            <h2 className="text-3xl font-bold mb-6"><span className="text-green-400">&gt;</span> Current Focus</h2>
             <ul className="list-none space-y-2 text-lg text-gray-300">
                <li><span className="text-green-400 mr-2">▹</span>Enhancing my expertise in TypeScript, Next.js, and cloud deployment pipelines.</li>
                <li><span className="text-green-400 mr-2">▹</span>Building projects that push the limits of real-time collaboration and AI integration.</li>
                <li><span className="text-green-400 mr-2">▹</span>Advancing my expertise in scalable cloud architectures, and real-time collaborative systems.</li>
            </ul>
        </div>

        {/* --- Skills Section --- */}
        {/* We can reuse the same Skills component from the homepage */}
        <Skills />

        {/* --- Final Quote --- */}
        <div className="my-20 border-t border-gray-800 pt-10">
            <blockquote className="text-center text-xl italic text-gray-400 max-w-3xl mx-auto">
                “Perfection isn’t a “final polish” step for me — it’s integrated into every decision I make while building. Whether I’m fine-tuning component re-renders in React or optimizing backend query execution, I chase that perfect balance of speed, scalability, and elegance.”
            </blockquote>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AboutMePage;
