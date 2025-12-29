
import React from 'react';
import { Target, MonitorPlay, Zap, LayoutGrid, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="space-y-8 lg:space-y-10">
            <div>
              <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] lg:text-sm mb-3 lg:mb-4 block">The Mashal Advantage</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-zinc-900 leading-tight">
                Websites are the store,<br />
                <span className="text-zinc-400">Meta Ads are the fuel.</span>
              </h2>
            </div>
            
            <p className="text-base lg:text-xl text-zinc-500 leading-relaxed font-medium">
              As a **Meta Ads Expert**, I don't just "manage" accounts—I engineer growth systems. 
              By building your site on Shopify, WordPress, or custom HTML/CSS, I ensure 
              the technical foundation perfectly supports your advertising efforts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="group p-4 lg:p-0 bg-zinc-50 lg:bg-transparent rounded-2xl lg:rounded-none border border-zinc-100 lg:border-none">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white lg:bg-zinc-50 rounded-xl lg:rounded-2xl flex items-center justify-center text-zinc-900 border border-zinc-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Target className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Ad ROI Scaling</h3>
                <p className="text-xs lg:text-sm text-zinc-400 font-medium mt-1">Driving high-intent traffic with proven Meta funnels.</p>
              </div>
              <div className="group p-4 lg:p-0 bg-zinc-50 lg:bg-transparent rounded-2xl lg:rounded-none border border-zinc-100 lg:border-none">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white lg:bg-zinc-50 rounded-xl lg:rounded-2xl flex items-center justify-center text-zinc-900 border border-zinc-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <MonitorPlay className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Creative Strategy</h3>
                <p className="text-xs lg:text-sm text-zinc-400 font-medium mt-1">Thumb-stopping visual content for FB & IG ads.</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square bg-zinc-50 rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex items-center justify-center border border-zinc-100 p-6 sm:p-12 lg:p-16">
              <div className="grid grid-cols-2 gap-3 lg:gap-4 w-full h-full">
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-sm border border-zinc-100 p-4 lg:p-6 flex flex-col justify-center items-center text-center space-y-2 lg:space-y-4 hover:shadow-xl transition-all">
                  <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-500" />
                  <span className="text-[10px] lg:text-sm font-bold text-zinc-900 uppercase tracking-tighter">Fast Launch</span>
                </div>
                <div className="bg-zinc-900 rounded-2xl lg:rounded-3xl shadow-2xl p-4 lg:p-6 flex flex-col justify-center items-center text-center space-y-2 lg:space-y-4 translate-y-4 lg:translate-y-8">
                  <LayoutGrid className="w-6 h-6 lg:w-8 lg:h-8 text-indigo-400" />
                  <span className="text-[10px] lg:text-sm font-bold text-white uppercase tracking-tighter">Modern UI</span>
                </div>
                <div className="bg-indigo-600 rounded-2xl lg:rounded-3xl shadow-2xl p-4 lg:p-6 flex flex-col justify-center items-center text-center space-y-2 lg:space-y-4">
                  <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  <span className="text-[10px] lg:text-sm font-bold text-white uppercase tracking-tighter">Growth</span>
                </div>
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-sm border border-zinc-100 p-4 lg:p-6 flex flex-col justify-center items-center text-center space-y-2 lg:space-y-4 translate-y-4 lg:translate-y-8 hover:shadow-xl transition-all">
                  <Globe2 className="w-6 h-6 lg:w-8 lg:h-8 text-indigo-600" />
                  <span className="text-[10px] lg:text-sm font-bold text-zinc-900 uppercase tracking-tighter">Global Reach</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
