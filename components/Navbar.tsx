
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'Packages', href: 'packages' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 sm:px-6 py-4 ${
        isScrolled ? 'top-2' : 'top-0'
      }`}
    >
      <div className={`max-w-7xl mx-auto rounded-3xl transition-all duration-500 ${
        isScrolled ? 'glass-panel shadow-xl px-6 py-4 border border-white/40' : 'bg-transparent px-0 py-4'
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-2xl font-black tracking-tighter text-zinc-900"
            >
              MASHAL STUDIOS<span className="text-indigo-600">.</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-all uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onContactClick}
                className="px-6 py-3 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-lg"
              >
                Inquiry
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-zinc-100 text-zinc-900 focus:outline-none hover:bg-zinc-200 transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden fixed inset-0 z-[-1] bg-white pt-32 px-8 transition-all duration-500 transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-4xl font-extrabold text-zinc-900 hover:text-indigo-600 transition-all tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 border-t border-zinc-100">
             <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="w-full inline-block text-center px-10 py-5 bg-indigo-600 text-white rounded-2xl text-lg font-bold shadow-2xl"
              >
                Hire Me
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
