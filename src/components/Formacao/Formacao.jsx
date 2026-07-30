

import React from "react";
import "./Formacao.css";
import { minhaFormacao } from "../../data/data"; 

export function Formacao() {
  return (
    <section className="formacao-section">
      
      {/* CABEÇALHO */}
      <div className="formacao-header">
        <h2 className="formacao-title">
          Vida Acadêmica & <span className="text-gradient">Formação</span>
        </h2>
        <p className="formacao-subtitle">
          Uma linha do tempo das minhas conquistas acadêmicas, certificações e experiências marcantes.
        </p>
      </div>

      {/* CONTAINER DA LINHA DO TEMPO */}
      <div className="timeline-container">
        
        {/* A Linha Central que corta o componente */}
        <div className="timeline-line"></div>

        {/* Mapeando os dados */}
        {minhaFormacao.map((item, index) => {
          
          // LÓGICA DE ALINHAMENTO:
          // Se o index for par (0, 2, 4...), recebe a classe 'left'
          // Se for ímpar (1, 3, 5...), recebe a classe 'right'
          const ladoClass = index % 2 === 0 ? "timeline-item-left" : "timeline-item-right";

          return (
            <div className={`timeline-item ${ladoClass}`} key={item.id}>
              
              {/* O Ícone/Bolinha que fica no meio da linha */}
              <div className="timeline-dot">
                <span className="dot-inner"></span>
              </div>

              {/* O Card com o conteúdo */}
              <div className="timeline-card">
                <span className="card-periodo">{item.periodo}</span>
                <h3 className="card-titulo">{item.titulo}</h3>
                <span className="card-instituicao">{item.instituicao}</span>
                <p className="card-descricao">{item.descricao}</p>
                <span className="card-tag">{item.tag}</span>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}