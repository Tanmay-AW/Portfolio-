// src/components/About.tsx
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about-me" className="my-16 md:my-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        

       

        {/* Right side with text content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-green-400">#</span>About-me
          </h2>
          <div className="space-y-4 text-gray-400 text-lg">
            <p>
              I’m a self-taught full-stack developer pursuing B.Tech in Computer Science.
            </p>
            <p>
              I create fast, responsive, and user-focused applications from scratch and bring ideas to life through functional, modern design.
            </p>
            <p>
              My mission: Build software that solves real problems and make it accessible to everyone.
            </p>
          </div>
      
<div className="mt-8">
  <Link 
    to="/about-me"
    className="glitch-effect text-green-400 border border-green-400 px-6 py-2 hover:bg-green-400/10"
    data-text="KNOW MORE"
  >
    KNOW MORE
  </Link>
</div>
        </div>

      </div>
    </section>
  );
};

export default About;
