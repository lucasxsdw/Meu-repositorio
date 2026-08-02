import React from 'react';
import './HeroB2b.css';

export function HeroB2b() {
  return (
    <section className="hero-b2b-container"  data-aos="fade-up"   >
      <div className="hero-b2b-content">
        
        {/* Tag Superior */}
        <div className="badge-tech">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          Tecnologia que vende, organiza e automatiza
        </div>

        {/* Título Principal */}
        <h1 className="title-b2b">
          Seu negócio precisa de um <br />
          <span className="text-gradient">sistema de confiança.</span>
        </h1>

        {/* Subtítulo */}
        <p className="subtitle-b2b">
          Sem uma presença digital forte, você perde o cliente antes da primeira conversa. 
          Construímos sites que vendem, sistemas que organizam e automações que devolvem o seu tempo.
        </p>

        {/* Botões de Ação */}
        <div className="action-group">
          <a 
            href="https://wa.me/5577991996477?text=Olá%20Lucas,%20gostaria%20de%20agendar%20a%20consultoria%20gratuita%20para%20o%20meu%20negócio." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Agendar consultoria gratuita <span>&rarr;</span>
          </a>
        </div>

        {/* Métricas (Footer do Hero) */}
        <div className="metrics-container">
          <div className="metric-item">
            <span className="metric-number">+30</span>
            <span className="metric-label">negócios organizados</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">100%</span>
            <span className="metric-label">feito sob medida</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">1 dia</span>
            <span className="metric-label">até a primeira resposta</span>
          </div>
        </div>

      </div>
    </section>
  );
}