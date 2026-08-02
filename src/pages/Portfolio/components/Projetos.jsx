import React from 'react';
import './projetos.css';

export function Projetos() {
  return (
    <section className="projetos-container" id="projetos" data-aos="fade-up">
      <div className="projetos-content">
        
        {/* Cabeçalho da Seção */}
        <h2 className="section-title-large center">
          Meus <span className="text-gradient">Projetos</span>
        </h2>
        <p className="section-subtitle center">
          Arquitetura, integração e automação. Explore sistemas projetados para resolver problemas reais e otimizar operações em diferentes setores.
        </p>
        
        {/* Grid Compacto de Projetos */}
        <div className="projetos-compact-grid">
          
          {/* Card 1: Saúde */}
          <div className="projeto-card-compact">
            <div className="projeto-header">
              <span className="badge-category saude">Saúde</span>
            </div>
            <h3 className="projeto-title">SIRUS</h3>
            <p className="projeto-desc">
              Sistema Integrado de Regulação e Emergência em Saúde. Plataforma desenvolvida para gestão de emergências, focada em otimizar fluxos e salvar vidas com agilidade.
            </p>
          </div>

          {/* Card 2: Inteligência/Polícia */}
          <div className="projeto-card-compact">
            <div className="projeto-header">
              <span className="badge-category seguranca">Inteligência</span>
            </div>
            <h3 className="projeto-title">SIOP</h3>
            <p className="projeto-desc">
              Sistema de Inteligência de Ocorrências Policiais. Uma ferramenta estratégica criada para transformar dados policiais brutos em inteligência acionável e mapeamento.
            </p>
          </div>

          {/* Card 3: Educação */}
          <div className="projeto-card-compact">
            <div className="projeto-header">
              <span className="badge-category educacao">Educação e IA</span>
            </div>
            <h3 className="projeto-title">Diário da Inclusão</h3>
            <p className="projeto-desc">
              Aplicação de suporte educacional que utiliza análise de sentimentos para garantir inclusão e acompanhamento preciso dos alunos no ambiente escolar.
            </p>
          </div>

        </div>

        {/* Botão Ver Mais Projetos (GitHub) */}
        <div className="projetos-footer">
          <a
            href="https://github.com/lucasxsdw"
            target="_blank"
            rel="noreferrer"
            className="btn-ver-mais"
          >
            Conferir todos os projetos no GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}