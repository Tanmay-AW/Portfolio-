// src/components/Skills.tsx
const skillsData = {
  Languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript (Learning)', 'Python', 'Java'],
  Frontend: ['React', 'Tailwind CSS', 'Next.js (Learning)'],
  Backend: ['Node.js', 'Express.js'],
  Databases: ['MongoDB', 'MySQL (Learning)'],
  Tools: ['Git', 'GitHub', 'VSCode', 'Postman', 'Figma'],
  Other: ['REST APIs', 'WebSockets', 'AI API Integration'],
};

const Skills = () => {
  return (
    <section id="skills" className="my-16 md:my-24 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 z-0">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-700/50 rounded-full"></div>
          ))}
        </div>
      </div>
       <div className="absolute bottom-10 right-0 w-20 h-20 z-0">
        <div className="w-full h-full border-2 border-green-400/50"></div>
        <div className="w-full h-full border-2 border-green-400/30 absolute top-2 left-2"></div>
      </div>


      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="text-green-400">#</span>Skills
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div 
            key={category} 
            className="border border-gray-700 bg-gray-900/30 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:border-green-400"
          >
            <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-400">
                  <span className="text-green-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
