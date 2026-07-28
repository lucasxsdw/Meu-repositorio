import React from "react";
import "./Sobre.css";

// Importe seus ícones PNG aqui quando quiser, ex:
// import iconeCore from "../../assets/icon-core.png";
// import iconeSecur from "../../assets/icon-security.png";

export function Sobre() {
  return (
    <section className="container-sobre">
      <div className="sobre-grid">
        
        {/* COLUNA DA ESQUERDA: Textos e Informações */}
        <div className="container-descricao">
          <div className="badge-tag">
            <span className="dot-badge"></span>
            <span>ENGENHEIRO DE SOFTWARE</span>
          </div>
          
          <div className="text-blue">
            <h2 className="sobre-title">Sobre <span className="text-gradient">Mim</span></h2>
            <p className="sobre-subtitle">Transformando lógica complexa em experiências digitais fluidas.</p>
          </div>

          <div className="descricao-sobre">
            <p>
              Com foco em <strong>sistemas críticos</strong>, minha trajetória é pautada pela entrega de soluções de alta performance para setores que não admitem falhas: saúde digital e segurança cibernética.
            </p>
            <p>
              Acredito que o código é apenas o meio. O fim é criar arquiteturas que resolvam gargalos reais, seja otimizando a triagem em hospitais ou blindando infraestruturas de educação conectada.
            </p>
          </div>

          <div className="sobre-info-footer">
            <div className="info-box">
              <span className="info-label">SPECIALIZATION</span>
              <span className="info-value cyan">Full-stack Arch</span>
            </div>
            <div className="info-box">
              <span className="info-label">CURRENT FOCUS</span>
              <span className="info-value purple">Cloud & Security</span>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: Cards Estilo Carrossel */}
        <div className="container-carousel-right">
          
          <div className="cards-wrapper-track">
            {/* CARD 1 */}
            <div className="inovation-card">
              <div className="card-media-placeholder">
                {/* Deixado o espaço pronto para o seu ícone PNG */}
                <img src="" alt="Ícone Core Systems" className="card-custom-icon" />
                <span className="placeholder-text">CORE SYSTEMS ARCHITECTURE</span>
              </div>
              <div className="card-content-box">
                <h3>Desenvolvimento de Core Systems</h3>
                <p>Arquitetando APIs escaláveis e de alta performance para o setor de HealthTech.</p>
              </div>
            </div>

            {/* CARD 2 (Parcialmente visível simulando o carrossel do print) */}
            <div className="inovation-card card-next-preview">
              <div className="card-media-placeholder">
                <img src="" alt="Ícone Security" className="card-custom-icon" />
                <span className="placeholder-text">CYBER & DATA</span>
              </div>
              <div className="card-content-box">
                <h3>Segurança e Compliance</h3>
                <p>Proteção de dados sensíveis e conformidade em ambientes corporativos críticos.</p>
              </div>
            </div>
          </div>

          {/* INDICADORES E SETAS DE NAVEGAÇÃO */}
          <div className="carousel-controls">
            <div className="carousel-indicators">
              <span className="indicator active"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
            </div>

            <div className="container-setas">
              <button className="seta-btn" aria-label="Seta esquerda">
                &larr;
              </button>
              <button className="seta-btn" aria-label="Seta Direita">
                &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}