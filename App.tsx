
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Packages from './components/Packages.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import LegalModal from './components/LegalModal.tsx';
import ContactOptionsModal from './components/ContactOptionsModal.tsx';
import ProjectDetailModal from './components/ProjectDetailModal.tsx';
import { Project } from './types.ts';

export type LegalType = 'privacy' | 'terms' | 'cookies' | null;

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContactOptions = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsContactOptionsOpen(true);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar isScrolled={isScrolled} onContactClick={openContactOptions} />
      
      <main>
        <Hero onContactClick={openContactOptions} />
        <About />
        <Services />
        <Projects onProjectClick={handleProjectClick} />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      <Footer onLegalClick={setActiveLegal} />

      <LegalModal 
        isOpen={!!activeLegal} 
        type={activeLegal} 
        onClose={() => setActiveLegal(null)} 
      />

      <ContactOptionsModal 
        isOpen={isContactOptionsOpen} 
        onClose={() => setIsContactOptionsOpen(false)} 
      />

      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
