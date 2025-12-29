
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 lg:py-20 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6 lg:gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] lg:text-xs mb-3 block">High-Impact Solutions</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight">Full Scale Digital Growth.</h2>
          </div>
          <p className="text-zinc-500 font-medium text-base lg:text-lg max-w-sm mx-auto md:mx-0">
            I offer a specialized suite of services designed to take your brand from zero to global leader.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white transition-all hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-zinc-50 text-zinc-900 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-2xl transition-all duration-500">
                <div className="transform transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-black text-zinc-900 mb-3 lg:mb-4 tracking-tight uppercase">{service.title}</h3>
              <p className="text-sm lg:text-base text-zinc-500 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
