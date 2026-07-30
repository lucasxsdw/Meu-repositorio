import React from 'react';
import './B2bServices.css';

export function B2bServices() {
  return (
    <section className="b2b-section">
      
      {/* CABEÇALHO */}
      <div className="b2b-header">
        <span className="b2b-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          SERVIÇOS B2B
        </span>
        <h2 className="b2b-title">
          Engenharia que impulsiona o <span className="b2b-gradient">seu negócio</span>
        </h2>
        <p className="b2b-subtitle">
          Da automação de tarefas manuais à construção dos sistemas em que sua equipe confia todos os dias,  soluções sob medida projetadas para a sua operação, e não o contrário.
        </p>
      </div>

      {/* CONTAINER DE VIDRO (GLASSMORPHISM) E GRID */}
      <div className="b2b-glass-container">
        <div className="b2b-grid">

          {/* CARD 1: AUTOMAÇÃO (Ciano) */}
          <div className="b2b-card theme-cyan">
            <div className="b2b-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3>Automação</h3>
            <p className="b2b-desc">Substitua o trabalho manual repetitivo por pipelines confiáveis. Desenho fluxos que rodam sozinhos e alertam exceções antes de virarem problemas.</p>
            <ul className="b2b-features">
              <li><CheckIcon /> Automação de fluxos e processos</li>
              <li><CheckIcon /> Ferramentas e scripts internos</li>
              <li><CheckIcon /> Orquestração de APIs e Webhooks</li>
            </ul>
            <div className="b2b-footer">
              <div className="b2b-stat">
                <h4>40%</h4>
                <span>TEMPO MÉDIO POUPADO</span>
              </div>
              <a href="/solucoes/automacao" className="b2b-link">Saber mais &rarr;</a>
            </div>
          </div>

          {/* CARD 2: SISTEMAS (Roxo) */}
          <div className="b2b-card theme-purple">
            <div className="b2b-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3>Sistemas sob Medida</h3>
            <p className="b2b-desc">Backends, dashboards e plataformas construídos para a forma como sua equipe realmente trabalha — fuja dos softwares de prateleira engessados.</p>
            <ul className="b2b-features">
              <li><CheckIcon /> Aplicações web exclusivas</li>
              <li><CheckIcon /> Painéis administrativos</li>
              <li><CheckIcon /> Arquitetura de API escalável</li>
            </ul>
            <div className="b2b-footer">
              <div className="b2b-stat">
                <h4>2-4 sem.</h4>
                <span>PARA CONSTRUIR O MVP</span>
              </div>
              <a href="/solucoes/sistemas" className="b2b-link">Saber mais &rarr;</a>
            </div>
          </div>

          {/* CARD 3: DADOS (Azul) */}
          <div className="b2b-card theme-blue">
            <div className="b2b-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3>Inteligência de Dados</h3>
            <p className="b2b-desc">Transforme dados brutos em decisões. Pipelines limpos, visualizações claras e os números que realmente importam — entregues de forma acessível.</p>
            <ul className="b2b-features">
              <li><CheckIcon /> Pipelines de dados e ETL</li>
              <li><CheckIcon /> Relatórios interativos</li>
              <li><CheckIcon /> Dashboards de Métricas e KPIs</li>
            </ul>
            <div className="b2b-footer">
              <div className="b2b-stat">
                <h4>24/7</h4>
                <span>DASHBOARDS AO VIVO</span>
              </div>
              <a href="/solucoes/dados" className="b2b-link">Saber mais &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Componente simples para o ícone de checkmark
function CheckIcon() {
  return (
    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}