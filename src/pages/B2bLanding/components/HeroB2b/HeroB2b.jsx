import React from 'react';
import './HeroB2b.css';

export function HeroB2b() {
  return (
    <section className="hero-b2b-container">
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
          <a href="#consultoria" className="btn-primary">
            Agendar consultoria gratuita <span>&rarr;</span>
          </a>
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Falar no WhatsApp
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