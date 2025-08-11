// src/components/ProjectCard.tsx

import React from 'react';
import GlitchLink from './GlitchLink';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="border border-gray-700 bg-gray-900/30 p-6 rounded-lg flex flex-col h-full">
      <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="bg-gray-800 text-green-400 text-xs font-mono px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center gap-4">
        <GlitchLink 
          href={liveLink}
          text="[ Live Demo ]"
          className="text-green-400 hover:text-white transition-colors"
        />
        <GlitchLink 
          href={githubLink}
          text="[ GitHub ]"
          className="text-green-400 hover:text-white transition-colors"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
