
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 lg:py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] lg:text-xs block">Technical Stack</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight">Capabilities That Drive Impact.</h2>
            <p className="text-zinc-500 text-base lg:text-xl leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              I prioritize tools that deliver **speed**, **scalability**, and **conversion**. 
              My expertise spans the entire digital ecosystem from coding to marketing data.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3 pt-2 lg:pt-4">
              {['Facebook Pixel', 'Google Analytics', 'Shopify Liquid', 'PHP / WP', 'Tailwind CSS', 'Next.js'].map((tag) => (
                <span key={tag} className="px-4 py-2 lg:px-6 lg:py-3 bg-white border border-zinc-200 rounded-xl lg:rounded-2xl text-[10px] lg:text-xs font-black uppercase tracking-widest text-zinc-900 shadow-sm transition-all hover:border-indigo-600 hover:text-indigo-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-xl lg:shadow-2xl border border-white space-y-6 lg:space-y-8 mt-8 lg:mt-0">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2 lg:mb-4">
                  <span className="text-zinc-900 font-black uppercase tracking-widest text-[10px] lg:text-xs">{skill.name}</span>
                  <span className="text-indigo-600 font-black text-xs lg:text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 lg:h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full transition-all duration-[2000ms] ease-in-out shadow-[0_0_10px_rgba(79,70,229,0.3)]" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
