import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-container">
      <div className="header-content">
        
        {/* Logo Restaurada */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span className="logo-text">Lucas.dev</span>
        </Link>

        {/* Botão Hambúrguer Mobile */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>

        {/* Navegação e Ações */}
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          
          {/* Cápsula de Navegação */}
          <div className="header-toggle">
            <Link 
              to="/" 
              className={`toggle-btn ${location.pathname === '/' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Seu Negócio
            </Link>
            <Link 
              to="/portfolio" 
              className={`toggle-btn ${location.pathname === '/portfolio' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Quem Sou Eu
            </Link>
          </div>

          {/* Botão WhatsApp no Header */}
          <a href="https://wa.me/5577991996477" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" onClick={closeMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Falar no WhatsApp
          </a>

        </nav>
      </div>
    </header>
  );
}