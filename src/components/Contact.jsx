import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({
      submitting: true,
      success: false,
      error: false,
      message: ''
    });

    // Simulate sending message (mock AJAX request)
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Votre message a bien été envoyé. Merci !'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" class="contact-section section-padding reveal">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Discutons de votre projet</span>
          <h2 class="title">Me Contacter</h2>
          <div class="title-underline"></div>
        </div>

        <div class="contact-grid">
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

          <div class="contact-form-container">
            <form id="contact-form" class="contact-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="name" class="form-label">Nom Complet</label>
                <input 
                  type="text" 
                  id="name" 
                  class="form-input" 
                  placeholder="Votre nom complet" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div class="form-group">
                <label htmlFor="email" class="form-label">Adresse Email</label>
                <input 
                  type="email" 
                  id="email" 
                  class="form-input" 
                  placeholder="votre.email@exemple.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div class="form-group">
                <label htmlFor="subject" class="form-label">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  class="form-input" 
                  placeholder="Le sujet de votre message" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div class="form-group">
                <label htmlFor="message" class="form-label">Message</label>
                <textarea 
                  id="message" 
                  class="form-input form-textarea" 
                  placeholder="Votre message..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                class="btn btn-primary btn-submit"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <span>Envoi en cours... <i class="fa-solid fa-spinner fa-spin"></i></span>
                ) : (
                  <span>Envoyer le message <i class="fa-solid fa-paper-plane"></i></span>
                )}
              </button>
              {status.message && (
                <div class={`form-status ${status.success ? 'success' : 'error'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
