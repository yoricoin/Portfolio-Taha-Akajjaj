import React from 'react';

const About = () => {
  return (
    <section id="about" class="about-section section-padding reveal">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Qui suis-je ?</span>
          <h2 class="title">À Propos de Moi</h2>
          <div class="title-underline"></div>
        </div>
        <div class="about-grid">
          <div class="about-info">
            <h3 class="about-subtitle">Futur Ingénieur en Data Science & Intelligence Artificielle</h3>
            <p class="about-text">
              Passionné par l'extraction de connaissances à partir de données complexes, je maîtrise les étapes de nettoyage (Data Cleaning) et de modélisation pour générer une valeur concrète. Très intéressé par l'IA moderne, j'explore activement les architectures de génération augmentée par récupération (RAG) et le fine-tuning de LLMs.
            </p>
            <p class="about-text">
              Mon parcours académique à l'EMSI et mes projets pratiques m'ont permis d'acquérir une double compétence solide : concevoir des modèles d'IA complexes et les intégrer au sein d'applications web robustes et interactives.
            </p>
            <div class="personal-details">
              <div class="detail-item">
                <span class="detail-label">Localisation :</span>
                <span class="detail-val">Rabat, Maroc</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Téléphone :</span>
                <span class="detail-val">06 82 73 01 97</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Email :</span>
                <span class="detail-val">tahaakajjaj97@gmail.com</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Statut :</span>
                <span class="detail-val" style={{ color: '#10b981', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <i class="fa-solid fa-circle" style={{ fontSize: '8px', color: '#10b981' }}></i>
                  À la recherche d'un stage PFE
                </span>
              </div>
            </div>
          </div>
          <div class="about-cards">
            <div class="about-card">
              <div class="card-icon"><i class="fa-solid fa-language"></i></div>
              <h4>Langues</h4>
              <ul class="card-list">
                <li><strong>Français :</strong> <span>Avancé</span></li>
                <li><strong>Anglais :</strong> <span>Avancé</span></li>
                <li><strong>Arabe :</strong> <span>Bilingue</span></li>
                <li><strong>Espagnol :</strong> <span>Intermédiaire</span></li>
              </ul>
            </div>
            <div class="about-card">
              <div class="card-icon"><i class="fa-solid fa-users-gear"></i></div>
              <h4>Soft Skills</h4>
              <ul class="card-list font-medium">
                <li>Esprit critique & Analyse</li>
                <li>Créativité & Innovation</li>
                <li>Adaptabilité & Flexibilité</li>
                <li>Autonomie & Résolution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
