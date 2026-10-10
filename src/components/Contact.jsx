import React from 'react';

const Contact = () => {
  return (
    <section id="contact" class="contact-section section-padding reveal">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Discutons de votre projet</span>
          <h2 class="title">Me Contacter</h2>
          <div class="title-underline"></div>
        </div>

        <div class="contact-grid">
          {/* Left Cards: Contact Info Details */}
          <div class="contact-cards">
            <div class="contact-info-card">
              <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
              <div class="contact-details">
                <h4>Email</h4>
                <p><a href="mailto:tahaakajjaj97@gmail.com">tahaakajjaj97@gmail.com</a></p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
              <div class="contact-details">
                <h4>Téléphone</h4>
                <p><a href="tel:0682730197">+212 6 82 73 01 97</a></p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
              <div class="contact-details">
                <h4>Adresse</h4>
                <p>Rabat, Maroc</p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="contact-icon"><i class="fa-brands fa-github"></i></div>
              <div class="contact-details">
                <h4>GitHub</h4>
                <p><a href="https://github.com/yoricoin" target="_blank" rel="noopener noreferrer">github.com/yoricoin</a></p>
              </div>
            </div>
          </div>

          {/* Right Card: Direct Connection Action (Replaces Form) */}
          <div class="contact-form-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '30px' }}>
              <i class="fa-solid fa-paper-plane" style={{ fontSize: '48px', color: 'var(--accent-cyan)', filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))', marginBottom: '20px', display: 'inline-block' }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
                Collaborons Ensemble
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
                Je suis activement à la recherche d'un stage de fin d'études (PFE) ou d'opportunités de collaboration dans le domaine de la <strong>Data Science</strong>, du <strong>RAG</strong> et de l'<strong>Intelligence Artificielle</strong>.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '350px' }}>
              <a href="mailto:tahaakajjaj97@gmail.com" class="btn btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '14px 20px' }}>
                <i class="fa-solid fa-envelope"></i> M'envoyer un E-mail
              </a>
              
              <a href="tel:0682730197" class="btn btn-secondary" style={{ justifyContent: 'center', width: '100%', padding: '14px 20px' }}>
                <i class="fa-solid fa-phone"></i> M'appeler Directement
              </a>
            </div>

            <div style={{ marginTop: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '20px', width: '100%', maxWidth: '350px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                <i class="fa-solid fa-circle-check" style={{ color: 'var(--accent-cyan)', marginRight: '6px' }}></i>
                Réponse garantie sous 24 heures ouvrées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
