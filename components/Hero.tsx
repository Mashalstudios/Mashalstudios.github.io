
import React from 'react';
import { ArrowRight, MessageCircle, BarChart3, Globe2, Sparkles, ExternalLink } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  // Using the new high-resolution image provided by the user
  const heroImageUrl = "https://i.postimg.cc/hjV00Q02/my-image.png";

  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-28 pb-12 sm:pt-32 sm:pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
      {/* Dynamic Animated Background Bubbles */}
      <div className="absolute top-[-5%] right-[-5%] lg:top-[-10%] lg:right-[-10%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[600px] lg:h-[600px] bg-indigo-200/40 rounded-full blob-bg animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] lg:bottom-[-10%] lg:left-[-10%] w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-100/50 rounded-full blob-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Portrait Section - Order 1 on Mobile */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[450px]">
              {/* Background accent shapes */}
              <div className="hidden sm:block absolute -top-8 -right-8 lg:-top-12 lg:-right-12 w-28 h-28 lg:w-40 lg:h-40 bg-indigo-600/10 rounded-3xl rotate-12 animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-20 h-20 lg:w-32 lg:h-32 border-4 border-zinc-200 rounded-full opacity-40"></div>
              
              <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-[0_35px_80px_-15px_rgba(0,0,0,0.35)] bg-zinc-200 border-[6px] sm:border-[10px] lg:border-[15px] border-white animate-float">
                <img
                  src={heroImageUrl}
                  alt="Mashal - Professional Profile"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  style={{ 
                    imageRendering: 'auto',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'block'
                  }}
                />
                
                {/* Floating Skill Badges */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 lg:top-8 lg:left-8 p-1.5 sm:p-2.5 lg:p-4 glass-panel rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl flex items-center gap-2 lg:gap-4 animate-float" style={{ animationDelay: '-1s' }}>
                  <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-indigo-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <p className="text-[7px] sm:text-[9px] lg:text-[11px] font-black text-zinc-400 uppercase tracking-widest leading-none">Specialist</p>
                    <p className="text-[10px] sm:text-[13px] lg:text-[15px] font-black text-zinc-900 leading-none mt-1 sm:mt-1.5">Meta Ads</p>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:bottom-8 lg:right-8 p-1.5 sm:p-2.5 lg:p-4 glass-panel rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl flex items-center gap-2 lg:gap-4 animate-float" style={{ animationDelay: '-2.5s' }}>
                  <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-indigo-600 border border-zinc-100">
                    <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <p className="text-[7px] sm:text-[9px] lg:text-[11px] font-black text-zinc-400 uppercase tracking-widest leading-none">Developer</p>
                    <p className="text-[10px] sm:text-[13px] lg:text-[15px] font-black text-zinc-900 leading-none mt-1 sm:mt-1.5">Web Design</p>
                  </div>
                </div>
              </div>

              {/* Status Indicator Badge */}
              <div className="absolute -right-3 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 lg:p-5 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-2 border border-zinc-100 z-20">
                <div className="relative">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                  <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-[7px] sm:text-[10px] lg:text-[12px] font-black text-zinc-900 uppercase writing-mode-vertical tracking-widest">Active</span>
              </div>
            </div>
          </div>

          {/* Main Content - Order 2 on Mobile */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8 lg:space-y-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-5 sm:py-2 bg-indigo-50 border border-indigo-100 rounded-full relative overflow-hidden group">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 relative z-10" />
              <span className="text-[10px] sm:text-sm font-black tracking-tight text-indigo-600 uppercase relative z-10">Available for hire</span>
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-zinc-900 leading-[1.1] sm:leading-[1.05]">
              I am <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Mashal</span>,<br />
              <span className="text-zinc-400">Website & Meta Ads Expert.</span>
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-xl lg:text-2xl text-zinc-500 leading-relaxed font-semibold">
              Scaling brands with <span className="text-zinc-900">data-driven marketing</span> & <span className="text-zinc-900">conversion-optimized design</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-5 pt-2 sm:pt-4">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4.5 sm:px-10 sm:py-5 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-zinc-800 hover:shadow-2xl hover:scale-[1.02] active:scale-95 group"
              >
                Start Project
                <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex w-full sm:w-auto gap-3.5">
                <a 
                  href="https://www.fiverr.com/s/5rZpYav" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4.5 sm:px-8 sm:py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all hover:bg-emerald-700 hover:shadow-xl hover:scale-[1.02] active:scale-95"
                >
                  Fiverr
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="https://wa.me/923045571667" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4.5 sm:px-8 sm:py-5 glass-panel text-zinc-900 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all hover:bg-white hover:shadow-xl active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="pt-8 sm:pt-10 lg:pt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10 border-t border-zinc-100">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900">98%</p>
                <p className="text-[8px] sm:text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em]">Satisfaction</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900">3x+</p>
                <p className="text-[8px] sm:text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em]">Avg. ROAS</p>
              </div>
              <div className="hidden sm:block space-y-1 sm:space-y-2">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900">1h</p>
                <p className="text-[8px] sm:text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em]">Response</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        .py-4\\.5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
      `}</style>
    </section>
  );
};

export default Hero;
