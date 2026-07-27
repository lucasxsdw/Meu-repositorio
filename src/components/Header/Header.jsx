import React from 'react';
import './Header.css';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        
        {/* LOGO FEITO COM CSS E TEXTO */}
        <div className="header-logo">
          <div className="logo-icon">
            <span className="terminal-symbol">&gt;_</span>
          </div>
          <a href="#" className="logo-text">
            Lucas.dev
          </a>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="header-nav">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#projetos" className="nav-link">Projetos</a>
          <a href="#formacao" className="nav-link">Formação</a>
          <a href="#habilidades" className="nav-link">Habilidades</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* BOTÃO DE CONTATO */}
        <div className="header-action">
          <a href="#contato" className="btn-contact">
            Entrar em Contato 
          </a>
        </div>

      </div>
    </header>
  );
}