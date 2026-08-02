import React from 'react';
import './CtaFooter.css';

export function CtaFooter() {
  return (
    <section className="cta-footer-container">
      <div className="cta-content"  data-aos="fade-up"   >
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
           <a 
            href="https://wa.me/5577991996477?text=Olá%20Lucas,%20gostaria%20de%20agendar%20a%20consultoria%20gratuita%20para%20o%20meu%20negócio." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Agendar consultoria gratuita <span>&rarr;</span>
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