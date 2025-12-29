
import React, { useState } from 'react';
import { Check, ArrowRight, Monitor, Target, Sparkles, Zap } from 'lucide-react';
import { ADS_PACKAGES, WEB_PACKAGES } from '../constants';
import { Package } from '../types';

const PackageCard: React.FC<{ pkg: Package; type: 'ads' | 'web' }> = ({ pkg, type }) => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    const subjectSelect = document.getElementById('contact-subject') as HTMLSelectElement;
    const messageArea = document.getElementById('contact-message') as HTMLTextAreaElement;

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Auto-fill the form subject based on package type
      if (subjectSelect) {
        if (type === 'ads') {
          subjectSelect.value = "Meta Ads Management";
        } else {
          subjectSelect.value = "Shopify Development";
        }
      }

      // Briefly focus the message area to invite input
      setTimeout(() => {
        messageArea?.focus();
      }, 800);
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border-2 transition-all duration-500 hover:shadow-indigo-100 hover:-translate-y-3 flex flex-col ${
        pkg.recommended ? 'border-indigo-600 ring-8 ring-indigo-50/50' : 'border-zinc-100'
      }`}
    >
      {pkg.recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-xl flex items-center gap-2 z-10">
          <Sparkles className="w-4 h-4" />
          Best Choice
        </div>
      )}
      
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight">{pkg.name}</h3>
          {pkg.recommended && <Zap className="w-5 h-5 text-indigo-600" fill="currentColor" />}
        </div>
        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tighter">{pkg.price}</span>
          <span className="text-zinc-400 font-bold uppercase text-[9px] tracking-widest">/ Project Start</span>
        </div>
        <p className="text-zinc-500 text-sm font-semibold leading-relaxed min-h-[48px]">{pkg.description}</p>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-300 mb-2">What's Included:</p>
        {pkg.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
              <Check className="w-3 h-3" strokeWidth={4} />
            </div>
            <span className="text-zinc-800 text-xs sm:text-sm font-bold leading-snug">{feature}</span>
          </div>
        ))}
      </div>

      <a 
        href="#contact"
        onClick={handleBookClick}
        className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] flex items-center justify-center gap-3 transition-all ${
          pkg.recommended 
            ? 'bg-indigo-600 text-white hover:bg-zinc-900 shadow-2xl hover:scale-[1.02]' 
            : 'bg-zinc-900 text-white hover:bg-zinc-800'
        }`}
      >
        Choose Plan
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ads' | 'web'>('ads');

  return (
    <section id="packages" className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <span className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-5 block">Investment Plans</span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-zinc-900 tracking-tighter mb-10">Scalable Solutions for Every Stage.</h2>
          
          <div className="inline-flex p-2 bg-white rounded-3xl shadow-xl border border-zinc-100 w-full sm:w-auto">
            <button 
              onClick={() => setActiveTab('ads')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                activeTab === 'ads' ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'text-zinc-400 hover:text-zinc-900'
              }`}
            >
              <Target className="w-5 h-5" />
              Advertising
            </button>
            <button 
              onClick={() => setActiveTab('web')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                activeTab === 'web' ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'text-zinc-400 hover:text-zinc-900'
              }`}
            >
              <Monitor className="w-5 h-5" />
              Web Design
            </button>
          </div>
        </div>

        <div className="relative min-h-[600px]">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-700 ${
            activeTab === 'ads' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-12 absolute inset-0 pointer-events-none'
          }`}>
            {ADS_PACKAGES.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="ads" />
            ))}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-700 ${
            activeTab === 'web' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-12 absolute inset-0 pointer-events-none'
          }`}>
            {WEB_PACKAGES.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="web" />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <a 
              href="#contact" 
              className="text-zinc-900 text-xs sm:text-sm font-black uppercase tracking-[0.3em] hover:text-indigo-600 transition-colors border-b-2 border-indigo-600 pb-1"
            >
              Need a Custom Enterprise Quote? Let's Talk
            </a>
            
            <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.4em] px-4 max-w-sm">
              * Dedicated management. Guaranteed performance quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
