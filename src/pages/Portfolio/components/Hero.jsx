import React from "react";
import "./hero.css";

import likedin from "../../../assets/linkedin.png";
import gitHub from "../../../assets/gitHub.png";
import zap from "../../../assets/zap.png";

export function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="availability-badge">
          <span className="dot"></span>
          DISPONÍVEL PARA NOVOS PROJETOS
        </div>
        
        <h1 className="hero-title">
          Olá, me chamo <br />
          <span className="text-gradient">Lucas Ryan</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Desenvolvedor de Software & Soluções Tecnológicas
        </h2>
        
        <p className="hero-description">
          Apaixonado por criar sistemas modernos e funcionais. Transformo ideias em 
          soluções digitais escaláveis, unindo arquiteturas robustas com código limpo 
          e bem estruturado.
        </p>

        <div className="hero-actions">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
          <a href="#cv" className="btn-secondary">
            Baixar CV
          </a>
        </div>

        <div className="hero-socials">

          <a href="https://github.com/lucasxsdw" className="social-btn" aria-label="GitHub">
            <img className="gitHub-icon" src={gitHub} alt="Icone do GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/lucasdev-tec/" className="social-btn" aria-label="LinkedIn">
            <img className="linkedin-icon" src={likedin} alt="Icone do Linkedin" />
          </a>

          <a href="" className="social-btn" aria-label="WhatsApp">
            <img className="zap-icon" src={zap} alt="Icone de menssagem" />
          </a>

        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="image-glow"></div>
        
        {/* Usando a foto direto da pasta public como fizemos no último passo */}
        <img 
          src="/FotoPerfil.png" 
          alt="Foto de perfil do Lucas" 
          className="profile-img" 
        />
        
        <div className="img-badge badge-tr">v1.0.0</div>
        <div className="img-badge badge-bl">&lt;dev /&gt;</div>
      </div>
    </section>
  );
}