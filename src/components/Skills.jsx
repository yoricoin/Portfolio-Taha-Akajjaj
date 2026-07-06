import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const aiSkills = [
    { name: "Machine & Deep Learning (PyTorch, Keras)", level: 85 },
    { name: "RAG Pipelines (Ollama, FAISS, LangChain)", level: 90 },
    { name: "Vision par Ordinateur (YOLO, OCR)", level: 80 },
    { name: "Analyse & Nettoyage de données (Pandas, Numpy)", level: 90 }
  ];

  const webSkills = [
    { name: "Frameworks Python (FastAPI, Django)", level: 85 },
    { name: "Frontend (React, Next.js, Angular, Javascript)", level: 80 },
    { name: "Backend Enterprise (Spring Boot Java)", level: 75 },
    { name: "Bases de données (SQL, PostgreSQL, MongoDB)", level: 80 }
  ];

  const badges = [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Javascript", icon: "fa-brands fa-js" },
    { name: "TypeScript", icon: "fa-solid fa-code" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Next.js", icon: "fa-solid fa-layer-group" },
    { name: "FastAPI", icon: "fa-solid fa-bolt" },
    { name: "Django", icon: "fa-solid fa-globe" },
    { name: "Angular", icon: "fa-brands fa-angular" },
    { name: "Java / Spring Boot", icon: "fa-brands fa-java" },
    { name: "PyTorch", icon: "fa-solid fa-brain" },
    { name: "YOLO", icon: "fa-solid fa-eye" },
    { name: "Ollama", icon: "fa-solid fa-robot" },
    { name: "FAISS", icon: "fa-solid fa-database" },
    { name: "PostgreSQL", icon: "fa-solid fa-server" },
    { name: "MongoDB", icon: "fa-solid fa-leaf" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "PowerBI", icon: "fa-solid fa-chart-pie" }
  ];

  return (
    <section id="skills" class="skills-section section-padding reveal">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Mon Expertise</span>
          <h2 class="title">Compétences Techniques</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="skills-grid">
          {/* Data Science / AI Card */}
          <div class="skills-category-card">
            <div class="skills-category-header">
              <i class="fa-solid fa-brain"></i>
              <h3>Data Science & IA</h3>
            </div>
            <div class="skills-list">
              {aiSkills.map((skill, index) => (
                <div key={index} class="skill-item">
                  <div class="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress-bar" 
                      style={{ width: animate ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Card */}
          <div class="skills-category-card">
            <div class="skills-category-header">
              <i class="fa-solid fa-code"></i>
              <h3>Développement Web</h3>
            </div>
            <div class="skills-list">
              {webSkills.map((skill, index) => (
                <div key={index} class="skill-item">
                  <div class="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress-bar" 
                      style={{ width: animate ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Badges Cloud */}
        <div class="skills-cloud">
          {badges.map((badge, index) => (
            <span key={index} class="badge">
              <i class={badge.icon}></i> {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
