import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export function Header() {
  // O useLocation  diz em qual rota estamos agora (ex: '/' ou '/portfolio')
  const location = useLocation();

  return (
    <header className="header-container">
      <div className="header-content">
        {/* LOGO (Ícone de Escudo + Texto) */}
        <div className="header-logo">
          <Link to="/" className="logo-text">
            Lucas.dev
          </Link>
        </div>

        {/* NAVEGAÇÃO CENTRAL (Toggle B2B vs Desenvolvedor) */}
        <nav className="header-toggle">
          <Link
            to="/"
            className={`toggle-btn ${location.pathname === "/" ? "active" : ""}`}
          >
            Seu Negócio
          </Link>

          <Link
            to="/portfolio"
            className={`toggle-btn ${location.pathname === "/portfolio" ? "active" : ""}`}
          >
            Quem Sou Eu
          </Link>
        </nav>

        {/* BOTÃO DE AÇÃO DIREITA (WhatsApp) */}
        <div className="header-action">
          <a
            href="https://wa.me/5577991996477"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
