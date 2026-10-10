import React, { useState, useEffect } from 'react';

const Hero = () => {
  const words = [
    "Étudiant en 5ᵉ année Ingénierie IA & Data",
    "À la recherche d'un Stage PFE",
    "Spécialiste RAG & LLMs",
    "Développeur Data & AI Solutions",
    "Passionné par le Deep Learning"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at the end of the word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="home" class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-welcome">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', marginRight: '8px', boxShadow: '0 0 10px #10b981' }}></span>
            À la recherche d'un stage PFE
          </span>
          <h1 class="hero-title">
            Bonjour, je suis <span class="highlight-text">Taha Akajjaj</span>
          </h1>
          <h2 class="hero-subtitle">
            Je suis <span class="typing-text">{currentText}</span>
            <span class="cursor">|</span>
          </h2>
          <p class="hero-desc">
            Actuellement en <strong>5ᵉ année d'ingénierie à l'EMSI</strong> et activement <strong>à la recherche d'un stage de fin d'études (PFE)</strong>. Je me spécialise dans la valorisation des données et le développement d'IA modernes (systèmes RAG, modèles de vision YOLO, traitement automatique du langage).
          </p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">
              Me Contacter <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/cv.pdf" class="btn btn-secondary" download="cv_taha_akajjaj.pdf">
              Télécharger le CV <i class="fa-solid fa-download"></i>
            </a>
          </div>
          <div class="hero-socials">
            <a href="https://github.com/yoricoin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="mailto:tahaakajjaj97@gmail.com" aria-label="Email">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:0682730197" aria-label="Téléphone">
              <i class="fa-solid fa-phone"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="avatar-wrapper">
            <div class="avatar-ring"></div>
            <div class="avatar-box">
              <i class="fa-solid fa-brain brain-glow-icon"></i>
              <div class="tech-nodes">
                <span class="node n1">PyTorch</span>
                <span class="node n2">RAG</span>
                <span class="node n3">YOLO</span>
                <span class="node n4">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" class="scroll-down-indicator" aria-label="Scroll down">
        <i class="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  );
};

export default Hero;
