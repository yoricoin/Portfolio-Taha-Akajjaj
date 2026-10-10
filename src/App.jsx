import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress and Active Section observer
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current active section
      const sections = ['home', 'about', 'timeline', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleReveal = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    };

    const observer = new IntersectionObserver(handleReveal, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div class="app-wrapper">
      {/* Background Decorative Rings */}
      <div class="bg-glow bg-glow-1"></div>
      <div class="bg-glow bg-glow-2"></div>
      <div class="grid-overlay"></div>

      {/* Header */}
      <header class="header">
        <div class="nav-container">
          <a href="#home" class="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Akajjaj <span class="logo-code">Taha</span>
          </a>
          <nav class={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <span 
              onClick={() => handleNavClick('home')} 
              class={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Accueil
            </span>
            <span 
              onClick={() => handleNavClick('about')} 
              class={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              À Propos
            </span>
            <span 
              onClick={() => handleNavClick('timeline')} 
              class={`nav-link ${activeSection === 'timeline' ? 'active' : ''}`}
            >
              Parcours
            </span>
            <span 
              onClick={() => handleNavClick('projects')} 
              class={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projets
            </span>
            <span 
              onClick={() => handleNavClick('skills')} 
              class={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Compétences
            </span>
            <span 
              onClick={() => handleNavClick('contact')} 
              class={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </span>
          </nav>
          <div class="nav-actions">
            <a href="/cv.pdf" class="btn-cv-header" download="cv_taha_akajjaj.pdf">
              <i class="fa-solid fa-download"></i> CV
            </a>
            <button 
              class={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
          </div>
        </div>
        <div class="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      </header>

      {/* Main sections */}
      <Hero />
      <About />
      <Timeline />
      <Projects onSelectProject={setSelectedProject} />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer class="footer-bottom">
        <div class="container footer-container">
          <p>&copy; 2026 Taha Akajjaj. Tous droits réservés.</p>
          <p>Conçu avec <i class="fa-solid fa-heart" style={{ color: 'var(--accent-purple)' }}></i> pour l'IA et le Web</p>
        </div>
      </footer>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Vercel Analytics Tracker */}
      <Analytics />
    </div>
  );
}

export default App;
