import React from 'react';

const Timeline = () => {
  return (
    <section id="timeline" class="timeline-section section-padding reveal">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Mon Parcours</span>
          <h2 class="title">Éducation & Expérience</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="timeline-wrapper">
          <div class="timeline-branch">
            <h3 class="timeline-title-icon"><i class="fa-solid fa-graduation-cap"></i> Éducation</h3>
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2022 - 2027</div>
                <h4 class="timeline-item-title">Cycle d'Ingénieur - Informatique & Réseaux</h4>
                <p class="timeline-institution">École Marocaine des Sciences de l'Ingénieur (EMSI) — Rabat</p>
                <p class="timeline-desc">
                  Spécialisation en Data Science et Intelligence Artificielle. Apprentissage approfondi du Machine Learning, Deep Learning, Big Data, RAG, et développement d'applications logicielles.
                </p>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2019 - 2022</div>
                <h4 class="timeline-item-title">Études en Informatique</h4>
                <p class="timeline-institution">Université d'Alicante — Espagne</p>
                <p class="timeline-desc">
                  Formation universitaire axée sur les algorithmes, les structures de données, le génie logiciel et la programmation objet (études non complétées).
                </p>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2019</div>
                <h4 class="timeline-item-title">Baccalauréat en Sciences de la Vie et de la Terre</h4>
                <p class="timeline-institution">Lycée Scientifique Témara</p>
                <p class="timeline-desc">Option Français. Base d'études scientifiques solides en mathématiques, physique et sciences.</p>
              </div>
            </div>
          </div>

          <div class="timeline-branch">
            <h3 class="timeline-title-icon"><i class="fa-solid fa-briefcase"></i> Expérience</h3>
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">Juillet - Août (1 mois)</div>
                <h4 class="timeline-item-title">Stage Développeur Full-Stack</h4>
                <p class="timeline-institution">ENOVA&RT — Maroc</p>
                <p class="timeline-desc">
                  Conception et développement d'une application de gestion des dossiers patients et de planification des rendez-vous médicaux avec une architecture découplée (Frontend / Backend).
                </p>
                <div class="timeline-tags">
                  <span class="tag">Spring Boot (Java)</span>
                  <span class="tag">Angular</span>
                  <span class="tag">PostgreSQL</span>
                  <span class="tag">Hibernate/JPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
