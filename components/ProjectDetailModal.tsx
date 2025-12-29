import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close Case Study"
          className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 shadow-xl hover:scale-110 active:scale-90 transition-all border border-zinc-100"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Section */}
            <div className="lg:col-span-6 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-6 p-8 lg:p-14 flex flex-col justify-center bg-white">
              <div className="mb-10">
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">Case Study Detail</p>
                <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-8">
                  {project.title}
                </h2>
                <div className="space-y-6">
                  <p className="text-zinc-900 font-bold text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed border-l-2 border-indigo-100 pl-4 italic">
                    {project.longDescription || "Full technical analysis and project documentation available upon request or via the portfolio link below."}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-5 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-xl active:scale-[0.98] group"
                >
                  Read More Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a 
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 bg-zinc-50 text-zinc-600 border border-zinc-100 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-100 transition-all active:scale-[0.98] group"
                >
                  View More Projects
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <p className="mt-10 text-[9px] font-bold text-zinc-300 uppercase tracking-[0.4em] text-center">
                MASHAL STUDIOS PARTNERSHIP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;