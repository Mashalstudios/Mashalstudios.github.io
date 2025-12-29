
import React from 'react';
import { Instagram, Linkedin, Facebook, Globe, ArrowUp, ShoppingCart } from 'lucide-react';
import { LegalType } from '../App';

interface FooterProps {
  onLegalClick: (type: LegalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLegalLink = (e: React.MouseEvent, type: LegalType) => {
    e.preventDefault();
    onLegalClick(type);
  };

  return (
    <footer className="bg-zinc-50 pt-12 lg:pt-16 pb-8 lg:pb-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-12 text-center sm:text-left">
          <div className="sm:col-span-2">
            <a 
              href="#home" 
              onClick={scrollToTop}
              className="text-2xl font-black tracking-tighter text-zinc-900 mb-6 block"
            >
              MASHAL STUDIOS<span className="text-indigo-600">.</span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-6 leading-relaxed mx-auto sm:mx-0">
              Crafting premium digital experiences through strategic design 
              and expert advertising. Helping brands scale in the digital age.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a 
                href="https://www.fiverr.com/s/5rZpYav" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:text-emerald-600 hover:border-emerald-600 transition-all shadow-sm group"
                title="Fiverr Profile"
              >
                <ShoppingCart className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/mashal.studios/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:text-pink-600 hover:border-pink-600 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mashal-studios-3845703a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk5c0JeYwQ1K5EVX1L1F7%2Fg%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/mashal.studios" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:text-blue-700 hover:border-blue-700 transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm"
                title="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 font-black uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">Services</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">Work</a></li>
              <li><a href="#packages" onClick={(e) => { e.preventDefault(); document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-black uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" onClick={(e) => handleLegalLink(e, 'privacy')} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">Privacy</a></li>
              <li><a href="#" onClick={(e) => handleLegalLink(e, 'terms')} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">Terms</a></li>
              <li><a href="#" onClick={(e) => handleLegalLink(e, 'cookies')} className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 gap-4">
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            © {currentYear} Mashal Studios. Built for conversion.
          </p>
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-900 font-black uppercase tracking-widest text-[10px] hover:text-indigo-600 transition-colors group"
          >
            Top
            <ArrowUp className="w-3 h-3 transform transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
