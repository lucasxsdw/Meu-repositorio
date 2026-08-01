import React from 'react';
import './CasosUso.css';

export function CasosUso() {
  return (
    <section className="casos-container">
      <div className="casos-content">
        
        <div className="badge-outline">
          Na Prática
        </div>

        <h2 className="section-title-large center">
          Como isso funciona <span className="text-gradient">na vida real</span>.
        </h2>
        
        <p className="section-subtitle center">
          A mesma base de confiança serve a profissões diferentes. Veja o que muda no seu dia a dia.
        </p>

        <div className="casos-grid">
          
          <div className="caso-card">
            <div className="icon-box cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="caso-title">Como um advogado usa</h3>
            <p className="caso-text">
              Um site que transmite autoridade no primeiro clique. Clientes novos chegam pelo formulário, os casos ficam organizados em um painel próprio e lembretes automáticos evitam prazos esquecidos. Você para de perder cliente para o concorrente que passa uma imagem mais profissional.
            </p>
            <div className="caso-tag">
              Mais clientes e menos esquecimento.
            </div>
          </div>

          <div className="caso-card">
            <div className="icon-box purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="caso-title">Como uma clínica usa</h3>
            <p className="caso-text">
              Pacientes agendam sozinhos pelo site, recebem confirmação automática no WhatsApp e lembrete antes da consulta. O estoque de medicamentos é controlado em tempo real para a recepção respirar e o não comparecimento despencar.
            </p>
            <div className="caso-tag">
              Agenda cheia e recepção leve.
            </div>
          </div>

          <div className="caso-card">
            <div className="icon-box blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="caso-title">Como uma loja usa</h3>
            <p className="caso-text">
              Uma vitrine digital onde o cliente navega pelos produtos, confere os tamanhos disponíveis e monta o pedido direto na tela. Ao finalizar, os itens vão organizados para o seu WhatsApp com tudo pronto para você fechar a venda rapidamente, sem precisar de carrinho de compras complexo.
            </p>
            <div className="caso-tag">
              Catálogo interativo e pedidos direto no WhatsApp.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}