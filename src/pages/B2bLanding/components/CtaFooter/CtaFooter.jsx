import React from 'react';
import './CtaFooter.css';

export function CtaFooter() {
  return (
    <section className="cta-footer-container">
      <div className="cta-content">
        <div className="badge-alert mb-4">
          <span className="dot-cyan"></span>
          Consultoria gratuita, vagas limitadas
        </div>

        <h2 className="section-title-large center text-white">
          Cada dia sem um <span className="text-gradient">sistema de <br/>confiança</span> é um cliente que foi <br/>para o outro.
        </h2>
        
        <p className="section-subtitle center max-w-700 mx-auto">
          Em 30 minutos entendemos o seu desafio e mostramos o caminho mais rápido 
          para resolver. Sem compromisso, sem enrolação. Atendemos poucos 
          negócios por mês para garantir resultado, a sua vaga pode ser a próxima.
        </p>

        <div className="action-group justify-center mt-4">
          <a href="#consultoria" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            Agendar consultoria gratuita
          </a>
          <a href="https://wa.me/5577991996477" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        <div className="cta-benefits">
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Sem compromisso
          </span>
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            30 minutos
          </span>
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Resposta em 1 dia útil
          </span>
        </div>
      </div>
    </section>
  );
}