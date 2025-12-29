
import React from 'react';
import { Star, Quote, MapPin, Briefcase } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] lg:text-xs mb-3 block">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight">Client Satisfaction.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="relative group">
              <div className="absolute -top-4 -left-4 text-indigo-50 group-hover:text-indigo-100 transition-colors">
                <Quote size={80} fill="currentColor" />
              </div>
              <div className="relative bg-zinc-50 border border-zinc-100 p-8 lg:p-10 rounded-[2.5rem] h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                    ))}
                  </div>
                  <span className="text-[8px] font-black text-white bg-zinc-900 px-3 py-1 rounded-full uppercase tracking-widest">
                    {t.category}
                  </span>
                </div>
                
                <p className="text-zinc-600 italic text-base lg:text-lg mb-8 flex-grow leading-relaxed font-medium">
                  "{t.quote}"
                </p>
                
                <div className="border-t border-zinc-200 pt-6 space-y-3">
                  <div>
                    <p className="font-black text-zinc-900 text-sm uppercase tracking-tight">Name: {t.author}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      <MapPin className="w-3 h-3 text-indigo-600" />
                      Location: {t.location}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      <Briefcase className="w-3 h-3 text-indigo-600" />
                      Service: {t.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
