import React from 'react';
import './Solucoes.css';

export function Solucoes() {
  return (
    <section className="solucoes-container">
      <div className="solucoes-content"  data-aos="fade-up" >
        
        {/* Cabeçalho da Seção */}
        <div className="badge-outline">
          Nossas Soluções
        </div>

        <h2 className="section-title-large">
          Tudo o que o seu negócio <br />
          precisa em <span className="text-gradient">um só lugar.</span>
        </h2>
        
        <p className="section-subtitle-left">
          Três pilares que transformam um negócio que parece amador em uma 
          operação de confiança, do primeiro clique até o pós-venda.
        </p>

        {/* Grid de Cartões Principais */}
        <div className="solucoes-grid">
          
          {/* Pilar 1: Sites */}
          <div className="solucao-card">
            <div className="card-header">
              <div className="icon-box cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <span className="card-number">01</span>
            </div>
            <h3 className="solucao-title">Landing Pages & Sites que vendem</h3>
            <p className="solucao-text">
              Não é um cartão de visitas. É uma máquina de captar clientes. Páginas rápidas, 
              com autoridade, que levam o visitante direto ao que importa: fechar com você.
            </p>
            <ul className="beneficios-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Captar clientes automaticamente
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Credibilidade instantânea
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Carregamento rápido, conversão alta
              </li>
            </ul>
          </div>

          {/* Pilar 2: Sistemas */}
          <div className="solucao-card">
            <div className="card-header">
              <div className="icon-box purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <span className="card-number">02</span>
            </div>
            <h3 className="solucao-title">Sistemas sob medida para organizar a casa</h3>
            <p className="solucao-text">
              Pare de depender de memória e planilha. Tenha controle real do estoque, 
              da equipe e do faturamento em painéis claros que qualquer um entende.
            </p>
            <ul className="beneficios-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Gestão de produtos e pedidos
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Painéis e relatórios claros
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Controle sem caos
              </li>
            </ul>
          </div>

          {/* Pilar 3: Automações */}
          <div className="solucao-card">
            <div className="card-header">
              <div className="icon-box blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                  <line x1="6" y1="9" x2="6" y2="21"></line>
                </svg>
              </div>
              <span className="card-number">03</span>
            </div>
            <h3 className="solucao-title">Automações que devolvem o seu tempo</h3>
            <p className="solucao-text">
              Conectamos seus sistemas e deixamos o trabalho repetitivo com as máquinas. 
              Mensagens automáticas, respostas imediatas, integrações que funcionam 
              enquanto você cuida do que importa.
            </p>
            <ul className="beneficios-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Respostas automáticas no WhatsApp
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Sistemas conectados
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Menos retrabalho, mais resultado
              </li>
            </ul>
          </div>

        </div>

        {/* Link Footer */}
        <div className="solucoes-footer-link">
          <a href="https://wa.me/5577991996477?text=Olá%20Lucas,%20gostaria%20de%20agendar%20a%20consultoria%20gratuita%20para%20o%20meu%20negócio." target="_blank" rel="noopener noreferrer" >
            Quer saber qual pilar resolve o seu caso? <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}