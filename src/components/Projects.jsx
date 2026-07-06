import React, { useState } from 'react';

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'rag-llm', label: 'RAG & Agents IA' },
    { id: 'dl-vision', label: 'Deep Learning & Vision' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'datascience', label: 'Data Analytics & ML' }
  ];

  const projectsData = [
    {
      id: 1,
      title: "AI Study Dashboard (PDF RAG & Tutor)",
      category: "rag-llm",
      categoryName: "RAG & Agents IA",
      shortDesc: "Dashboard d'étude intelligent local avec RAG multi-documents, QCM interactifs et carte mentale Graphviz.",
      fullDesc: "Ce projet est un tableau de bord d'étude complet conçu pour tourner à 100% localement. Il permet aux étudiants d'importer leurs supports de cours (PDF), de dialoguer avec eux en toute confidentialité, de générer des résumés conceptuels, des glossaires, et même de créer des cartes conceptuelles visuelles et des QCM d'auto-évaluation.",
      features: [
        "Analyse multi-documents PDF ultra-rapide (PyMuPDF) et découpage sémantique récursif",
        "Indexation locale et recherche de similarité cosinus optimisée avec FAISS",
        "Génération automatisée de fiches de révision et de dictionnaires de concepts",
        "Cartographie conceptuelle (Mind Maps) générée dynamiquement au format Graphviz DOT",
        "Générateur de QCM interactif et système de flashcards mémo recto/verso",
        "Tuteur de code conversationnel avec détection du statut de connexion Ollama"
      ],
      challenges: [
        "Reformulation de requêtes multi-tours pour conserver le contexte conversationnel sémantique",
        "Heuristique de routage global injectant les résumés de documents pour les questions globales",
        "Rendu asynchrone stable des graphiques relationnels Graphviz au sein de Streamlit"
      ],
      tags: ["Streamlit", "Ollama", "FAISS", "PyMuPDF", "Python", "Graphviz"],
      icon: "fa-solid fa-graduation-cap"
    },
    {
      id: 2,
      title: "Plateforme NYSE & NASDAQ Stock Analyzer",
      category: "dl-vision",
      categoryName: "Deep Learning & Vision",
      shortDesc: "Plateforme financière d'analyse technique et de projection de cours de bourse à J+5 avec LSTM PyTorch.",
      fullDesc: "Une plateforme web interactive combinant l'analyse technique traditionnelle des cours de bourse et les réseaux de neurones récurrents. Elle permet d'analyser en direct 28 grandes capitalisations américaines et de lancer des entraînements de modèles LSTM (Long Short-Term Memory) à la volée pour projeter les cours.",
      features: [
        "Calcul d'indicateurs techniques majeurs en temps réel : Moyennes Mobiles (SMA, EMA), RSI et MACD",
        "Entraînement à la volée d'un réseau récurrent LSTM sous PyTorch sur 2 ans d'historique",
        "Logs de compilation et courbes de perte (Loss) affichés en direct dans l'interface",
        "Console de simulation de trajectoires boursières par marche aléatoire déterministe en secours",
        "Graphiques financiers interactifs construits avec Recharts sous React"
      ],
      challenges: [
        "Exécution non bloquante de l'apprentissage profond (Deep Learning) au sein d'une API FastAPI",
        "Mise en place de générateurs de données résilients en cas de blocage de requêtes par Yahoo Finance",
        "Synchronisation réactive des données financières avec rendu fluide sur React 19"
      ],
      tags: ["React", "FastAPI", "PyTorch", "yfinance", "Recharts", "LSTM", "Python"],
      icon: "fa-solid fa-chart-line"
    },
    {
      id: 3,
      title: "SmartDash AI - Data Analytics",
      category: "datascience",
      categoryName: "Data Analytics & ML",
      shortDesc: "Dashboard complet d'analyse automatisée de jeux de données avec classification et recommandations IA.",
      fullDesc: "SmartDash AI est une plateforme moderne conçue pour simplifier le traitement et la visualisation de jeux de données bruts. Elle permet de glisser-déposer des fichiers CSV, Excel ou JSON, d'analyser automatiquement la typologie des données, et de suggérer de façon intelligente les graphiques et corrélations les plus pertinents.",
      features: [
        "Importation et profilage complet de fichiers (volumes, données manquantes, types détectés)",
        "Inspecteur de données interactif avec filtres et tri dynamique",
        "Classification intelligente automatisée des types de colonnes (temporel, catégoriel, numérique)",
        "Calcul automatique de pentes de tendances (régression linéaire) et détection d'anomalies (IQR)",
        "Créateur de tableaux de bord visuels interactifs et sécurisation par jeton JWT"
      ],
      challenges: [
        "Algorithme d'évaluation d'association statistique pour recommander les graphiques optimaux",
        "Mise en œuvre d'une architecture modulaire conteneurisée via Docker et Docker Compose",
        "Calculs performants en backend sur de gros volumes avec Pandas et NumPy"
      ],
      tags: ["Next.js", "FastAPI", "SQLite", "SQLAlchemy", "Pandas", "Scikit-Learn", "Docker"],
      icon: "fa-solid fa-square-poll-vertical"
    },
    {
      id: 4,
      title: "Analyseur de CV Intelligent (RAG)",
      category: "rag-llm",
      categoryName: "RAG & Agents IA",
      shortDesc: "Plateforme RAG d'analyse sémantique de CV et de matching d'offres d'emploi par IA.",
      fullDesc: "Une plateforme conçue pour automatiser le processus de recrutement grâce au traitement automatique du langage naturel (NLP). L'application extrait les structures clés des CV PDF de candidats et effectue un matching sémantique précis avec des offres d'emploi à l'aide d'architectures RAG.",
      features: [
        "Extraction sémantique et structuration de données de documents PDF complexes",
        "Indexation et recherche sémantique basée sur les plongements de phrases avec FAISS",
        "Score d'adéquation candidat-poste détaillé généré via Gemini API et Ollama en local",
        "Interface de gestion de base de données relationnelle SQLite avec SQLAlchemy"
      ],
      challenges: [
        "Conception de prompts robustes et contraints pour recevoir des résultats structurés de LLM",
        "Optimisation de la vitesse de parsing et du calcul de similarité vectorielle",
        "Visualisation des compétences manquantes ou des points forts sous forme de comparateur graphique"
      ],
      tags: ["FastAPI", "Ollama", "Gemini API", "FAISS", "SQLAlchemy", "Python"],
      icon: "fa-solid fa-id-card"
    },
    {
      id: 5,
      title: "Segmentation de Tumeurs Cérébrales (PFA 3.0)",
      category: "dl-vision",
      categoryName: "Deep Learning & Vision",
      shortDesc: "Segmentation sémantique d'IRM cérébrales par Deep Learning avec U-Net et U-Net++.",
      fullDesc: "Ce projet applique le Deep Learning à l'imagerie médicale. L'objectif est d'entraîner des architectures de segmentation sémantique pour détecter et tracer les contours de tumeurs cérébrales à partir d'IRM. Il propose également un comparatif complet des architectures classiques face aux variantes enrichies.",
      features: [
        "Implémentation et entraînement de modèles de segmentation U-Net et U-Net++ sous PyTorch et Keras",
        "Pipelines de prétraitement d'images d'IRM (normalisation, masquage de fond, augmentation de données)",
        "Évaluation de modèles à l'aide de métriques clés : coefficient Dice, IoU, précision et rappel",
        "Dashboard interactif de démonstration permettant de visualiser la segmentation prédite en surimposition"
      ],
      challenges: [
        "Atténuation du déséquilibre extrême de classes grâce à l'implémentation de la Dice Loss pondérée",
        "Optimisation de modèles volumineux (U-Net++ à plus de 110M de paramètres) pour une inférence fluide",
        "Nettoyage et normalisation de jeux de données volumineux au format COCO"
      ],
      tags: ["Keras", "PyTorch", "U-Net", "U-Net++", "Segmentation", "Medical Imaging"],
      icon: "fa-solid fa-brain"
    },
    {
      id: 6,
      title: "Système Intelligent ALPR (Lecture de Plaques)",
      category: "dl-vision",
      categoryName: "Deep Learning & Vision",
      shortDesc: "Détection et extraction de textes sur plaques d'immatriculation en temps réel avec YOLO et OCR.",
      fullDesc: "Ce système intelligent applique la vision par ordinateur pour localiser en temps réel des plaques d'immatriculation sur des flux d'images ou vidéos, extraire le texte alphanumérique, et l'analyser via un agent conversationnel LLM local.",
      features: [
        "Détection en temps réel des véhicules et des plaques avec le modèle de Deep Learning YOLO",
        "Extraction textuelle des caractères de plaques d'immatriculation via un moteur OCR",
        "Intégration d'un assistant conversationnel Ollama (Llama 3) pour l'analyse contextuelle locale",
        "Interface Streamlit réactive affichant les flux traités avec masques et rectangles d'identification"
      ],
      challenges: [
        "Correction des distorsions géométriques des plaques (skewness) avant le traitement OCR",
        "Optimisation du framerate (FPS) en séparant la capture, la détection YOLO et la lecture OCR",
        "Robustesse du système face aux conditions climatiques ou d'éclairage dégradées"
      ],
      tags: ["Python", "YOLO", "OCR", "Streamlit", "Ollama", "Computer Vision"],
      icon: "fa-solid fa-car"
    },
    {
      id: 7,
      title: "Spotify Recommender (ML & DL)",
      category: "datascience",
      categoryName: "Data Analytics & ML",
      shortDesc: "Système de recommandation musicale avec KNN et Autoencodeurs PyTorch dans un espace latent.",
      fullDesc: "Une application interactive sous Streamlit implémentant deux approches différentes de recommandation. L'utilisateur peut choisir de générer des recommandations basées sur un algorithme KNN classique (calcul linéaire) ou via un espace compressé non linéaire modélisé par un Autoencodeur PyTorch.",
      features: [
        "Modèle K-Nearest Neighbors classique s'appuyant sur la similarité cosinus directe des attributs sonores",
        "Réseau Autoencodeur multicouche (PyTorch) compressant 9 caractéristiques en un espace latent de dim 8",
        "Visualiseur de recommandations interactif comparant les résultats des deux méthodes",
        "Script optimisé de nettoyage et de standardisation de données (StandardScaler)"
      ],
      challenges: [
        "Entraînement de l'Autoencodeur rapide (15s) et sauvegarde des poids de manière portable (.pth)",
        "Équilibrage des poids des descripteurs audio pour éviter que le tempo ne domine les autres métriques",
        "Conception d'une logique d'inférence rapide dans Streamlit pour calculer les distances en temps réel"
      ],
      tags: ["Streamlit", "PyTorch", "Scikit-Learn", "Autoencoder", "KNN", "Pandas"],
      icon: "fa-brands fa-spotify"
    },
    {
      id: 8,
      title: "RAG PDF Assistant (Local & Privé)",
      category: "rag-llm",
      categoryName: "RAG & Agents IA",
      shortDesc: "Assistant de recherche documentaire local 100% privé avec Ollama et FAISS.",
      fullDesc: "Un assistant conversationnel léger conçu pour interagir avec des documents PDF. Le traitement s'effectuant entièrement sur l'ordinateur de l'utilisateur, ce système garantit une sécurité absolue et un coût nul d'API en exploitant Ollama.",
      features: [
        "Extraction textuelle et découpage sémantique intelligent (Recursive Character Text Splitter)",
        "Génération locale de plongements (embeddings) avec le modèle nomic-embed-text via Ollama",
        "Indexation et recherche de similarité cosinus avec la bibliothèque vectorielle FAISS",
        "Interface Streamlit épurée avec sauvegarde de l'historique d'échange"
      ],
      challenges: [
        "Ajustement optimal du ratio taille de bloc (chunk) / recouvrement (overlap) pour éviter la perte de contexte",
        "Contrôle de l'invite de contexte (Prompt System) pour restreindre l'IA aux données du PDF"
      ],
      tags: ["Streamlit", "Ollama", "FAISS", "Python", "Nomic Embeddings"],
      icon: "fa-solid fa-file-pdf"
    },
    {
      id: 9,
      title: "Consultation Médicale En Ligne",
      category: "fullstack",
      categoryName: "Full-Stack",
      shortDesc: "Plateforme web de téléconsultation médicale avec dossiers patients, planning et messagerie.",
      fullDesc: "Une application web médicale complète facilitant les relations médecins-patients. Elle propose des tableaux de bord dynamiques permettant aux professionnels de gérer leur agenda et aux patients de réserver des créneaux et de suivre leurs fiches de consultation.",
      features: [
        "Architecture découplée avec API RESTful Django (Django REST Framework) et Frontend React",
        "Système de rôles et d'authentification sécurisé pour isoler médecins et patients",
        "Tableaux de bord interactifs de consultation avec édition de diagnostics et prescriptions",
        "Gestion persistante sécurisée des créneaux de consultation et dossiers médicaux"
      ],
      challenges: [
        "Gestion des chevauchements de plannings et réservation de consultations en temps réel",
        "Sécurisation stricte des points d'accès API contenant des informations confidentielles de santé",
        "Conception d'une interface utilisateur fluide et intuitive adaptée aux personnes âgées ou malades"
      ],
      tags: ["Django REST Framework", "React", "Python", "SQLite/PostgreSQL", "JavaScript"],
      icon: "fa-solid fa-user-doctor"
    },
    {
      id: 10,
      title: "Application de gestion immobilière – Unicoloc",
      category: "fullstack",
      categoryName: "Full-Stack",
      shortDesc: "Application de gestion d'annonces immobilières et de colocation avec calcul de tendances.",
      fullDesc: "Une application web de gestion d'annonces immobilières et de colocation. Elle intègre des filtres avancés, une estimation des prix moyens du secteur et une cartographie interactive pour localiser les appartements.",
      features: [
        "Module de publication et d'édition d'annonces avec téléchargement d'images",
        "Filtres de recherche poussés (budget, nombre de colocataires, commodités)",
        "Intégration interactive de l'API cartographique Google Maps",
        "Calculateur statistique de prix moyens du marché basé sur l'historique des annonces publiées"
      ],
      challenges: [
        "Persistance de données complexes semi-structurées grâce à l'implémentation de MongoDB",
        "Optimisation du chargement et de la réactivité des marqueurs cartographiques Google Maps",
        "Mise en place d'un système de messagerie interne réactif entre locataires"
      ],
      tags: ["Django", "Python", "MongoDB", "Google Maps API"],
      icon: "fa-solid fa-house"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" class="projects-section section-padding reveal">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Mes Réalisations</span>
          <h2 class="title">Projets Récents</h2>
          <div class="title-underline"></div>
        </div>

        {/* Filter Buttons */}
        <div class="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              class={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div class="projects-grid" id="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} class="project-card fade-in">
              <div class="project-card-banner">
                <i class={`${project.icon} banner-icon`}></i>
              </div>
              <div class="project-card-content">
                <h4 class="project-card-title">{project.title}</h4>
                <p class="project-card-desc">{project.shortDesc}</p>
                <div class="project-card-tags">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} class="project-card-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span class="project-card-tag">+{project.tags.length - 4}</span>
                  )}
                </div>
                <button
                  class="project-card-btn"
                  onClick={() => onSelectProject(project)}
                >
                  En savoir plus <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
