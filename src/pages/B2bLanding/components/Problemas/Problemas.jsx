import React from 'react';
import './Problemas.css';

export function Problemas() {
  return (
    <section className="problemas-container">
      <div className="problemas-content"  data-aos="fade-up"   >
        
        {/* Tag Superior */}
        <div className="badge-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          O Problema
        </div>

        {/* Título e Subtítulo */}
        <h2 className="section-title">
          O cliente decide <span className="text-gradient">antes</span> de falar com você.
        </h2>
        <p className="section-subtitle">
          Antes de você responder a uma mensagem, ele já visitou seu site, julgou sua 
          marca e comparou com o concorrente. Se o que encontra é fraco, lento ou 
          confuso, a decisão já foi tomada, e não foi a seu favor.
        </p>

        {/* Grid de Cartões */}
        <div className="problemas-grid">
          
          {/* Cartão 1 */}
          <div className="problema-card">
            <div className="icon-wrapper cyan">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="8" y1="13" x2="16" y2="13"></line>
                <line x1="8" y1="17" x2="16" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="card-title">Planilhas que ninguém entende</h3>
              <p className="card-text">A informação espalhada, a decisão na memória.</p>
            </div>
          </div>

          {/* Cartão 2 */}
          <div className="problema-card">
            <div className="icon-wrapper purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="15" y2="10"></line>
                <line x1="12" y1="7" x2="12" y2="13"></line>
              </svg>
            </div>
            <div>
              <h3 className="card-title">Pedidos que somem no WhatsApp</h3>
              <p className="card-text">Cliente interessado, resposta atrasada, venda perdida.</p>
            </div>
          </div>

          {/* Cartão 3 */}
          <div className="problema-card">
            <div className="icon-wrapper cyan">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div>
              <h3 className="card-title">Um site que parece de 2010</h3>
              <p className="card-text">Lento, feio e duvidoso. Confiança zero.</p>
            </div>
          </div>

          {/* Cartão 4 */}
          <div className="problema-card">
            <div className="icon-wrapper purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
            </div>
            <div>
              <h3 className="card-title">Tarefas que engolem o seu dia</h3>
              <p className="card-text">Trabalho repetido que máquinas fariam por você.</p>
            </div>
          </div>

        </div>

        {/* Fechamento da Seção */}
        <p className="problemas-footer">
          Processos manuais e uma presença digital fraca não são só feios. <br />
          <span className="text-gradient font-bold">São caros.</span> Cada cliente perdido foi para o concorrente, não por preço, mas por confiança.
        </p>

      </div>
    </section>
  );
}