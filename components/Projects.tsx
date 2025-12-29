
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6 lg:gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] lg:text-xs mb-3 block">My Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight">Selected Case Studies.</h2>
          </div>
          <p className="text-zinc-500 font-medium text-base lg:text-lg max-w-sm mx-auto md:mx-0">
            Proven results for high-end clients in various industries. Focus on ROI and aesthetic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onProjectClick(project)}
              className="group cursor-pointer space-y-4 lg:space-y-6"
            >
              <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] aspect-[4/5] sm:aspect-[5/6] bg-zinc-100 shadow-lg lg:shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 lg:from-zinc-900/60 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 lg:p-8">
                   <div className="w-full flex justify-between items-center">
                     <div>
                       <p className="text-white/80 font-bold uppercase tracking-widest text-[8px] lg:text-[10px]">Case Study</p>
                       <p className="text-white text-base lg:text-lg font-bold">View Details</p>
                     </div>
                     <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center text-zinc-900">
                        <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                     </div>
                   </div>
                </div>
                {/* Always visible category badge for mobile */}
                <div className="sm:hidden absolute top-4 left-4">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white px-3 py-1 bg-indigo-600/90 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="px-1 text-center sm:text-left">
                <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full">{project.category}</span>
                <h3 className="text-xl lg:text-2xl font-black text-zinc-900 mt-2 sm:mt-4 mb-2 lg:mb-3 tracking-tight">{project.title}</h3>
                <p className="text-sm lg:text-base text-zinc-500 font-medium leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
