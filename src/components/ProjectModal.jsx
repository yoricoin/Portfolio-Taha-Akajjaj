import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Handle overlay click to close
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div class="modal active" onClick={handleOverlayClick}>
      <div class="modal-content">
        <button class="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div class="modal-project-header">
          <h3 class="modal-project-title">{project.title}</h3>
          <div class="modal-project-meta">
            <span class="modal-meta-item">
              <i class="fa-solid fa-folder-open"></i> {project.categoryName}
            </span>
            {project.duration && (
              <span class="modal-meta-item">
                <i class="fa-solid fa-clock"></i> {project.duration}
              </span>
            )}
          </div>
        </div>

        <div class="modal-project-desc-full">
          <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>{project.fullDesc}</p>
        </div>

        {project.features && project.features.length > 0 && (
          <div class="modal-section">
            <h4 class="modal-subtitle">
              <i class="fa-solid fa-star"></i> Fonctionnalités clés
            </h4>
            <ul class="modal-section-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div class="modal-section">
            <h4 class="modal-subtitle">
              <i class="fa-solid fa-gears"></i> Défis techniques relevés
            </h4>
            <ul class="modal-section-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        <div class="modal-section" style={{ marginBottom: 0 }}>
          <h4 class="modal-subtitle">
            <i class="fa-solid fa-screwdriver-wrench"></i> Stack Technique
          </h4>
          <div class="modal-tech-stack">
            {project.tags.map((tag, index) => (
              <span key={index} class="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
