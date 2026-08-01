import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-global">
      <div className="footer-grid">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon-small">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className="logo-text">Lucas.dev</span>
          </div>
          <p className="footer-text mt-3">
            Sistemas de confiança para negócios que não podem parecer amadores.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">NAVEGAÇÃO</h4>
          <a href="/">Seu Negócio</a>
          <a href="/portfolio">Quem Sou Eu</a>
        </div>

        <div className="footer-contato">
          <h4 className="footer-title">CONTATO</h4>
          <a href="https://wa.me/5577991996477" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="mailto:contato@gmail.com">contato@gmail.com</a>
          <span className="footer-location">Atendimento remoto, Brasil</span>
        </div>

      </div>
      
      <div className="footer-copyright">
        &copy; 2026 Lucas.dev. Sistemas de Confiança. Todos os direitos reservados.
      </div>
    </footer>
  );
}