import React from "react";
import "./sobre.css";

import iconeCodigo from "../../assets/icon-codigo.svg";
import iconePerformance from "../../assets/icon-performance.svg";
import iconeDesign from "../../assets/icon-star.svg";

export function Sobre() {
  return (
    <section className="container-sobre">
      <div className="sobre-content-wrapper">
        
        {/* CABEÇALHO E TEXTO NO TOPO */}
        <div className="sobre-header">
          <div className="badge-tag">
            <span className="dot-badge"></span>
            <span>ENGENHEIRO DE SOFTWARE</span>
          </div>
          
          <h2 className="sobre-title">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="sobre-subtitle">
            Transformando lógica complexa em experiências digitais fluidas.
          </p>

          <div className="descricao-sobre">
            <p>
              Com foco em <strong>sistemas críticos</strong>, minha trajetória é pautada pela entrega de soluções de alta performance para setores que não admitem falhas: saúde digital, segurança e educação.
            </p>
            <p>
              Acredito que o código é apenas o meio. O fim é criar arquiteturas que resolvam gargalos reais, unindo código limpo, performance e design inteligente.
            </p>
          </div>
        </div>

        {/* 3 CARDS MENORES ABAIXO DO TEXTO */}
        <div className="cards-grid">
          
          {/* Card 1: Código Limpo */}
          <div className="feature-card">
            <div className="card-icon-box">
              <img src={iconeCodigo} alt="Ícone Código Limpo" className="feature-icon" />
            </div>
            <h3>Código Limpo</h3>
            <p>Arquitetura componentizada, tipagem estática e boas práticas em cada projeto.</p>
          </div>

          {/* Card 2: Performance */}
          <div className="feature-card">
            <div className="card-icon-box">
              <img src={iconePerformance}  alt="Ícone Performance" className="feature-icon" />
            </div>
            <h3>Performance</h3>
            <p>Interfaces rápidas e otimizadas, com foco total em experiência do usuário.</p>
          </div>

          {/* Card 3: Design Moderno */}
          <div className="feature-card">
            <div className="card-icon-box">
              <img src={iconeDesign} alt="Ícone Design Moderno" className="feature-icon" />
            </div>
            <h3>Design Moderno</h3>
            <p>UI futurista com animações sutis e atenção rigorosa aos detalhes visuais.</p>
          </div>

        </div>

      </div>
    </section>
  );
}