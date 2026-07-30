import React, { useState } from "react";
import "./Projetos.css";
// Ajuste o caminho abaixo para onde você salvou seu data.js
import { meusProjetos } from "../../data/data";


export function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  // Filtros disponíveis
  const filtros = ["Todos", "Frontend / React", "Sistemas / Backend"];

  return (
    <section className="projetos-section">
      <div className="projetos-container">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="projetos-header">
          <span className="eyebrow-text">PORTFÓLIO</span>
          <h2 className="projetos-title">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="projetos-subtitle">
            Arquitetura, integração e automação. Explore sistemas projetados para resolver problemas reais e otimizar operações em diferentes setores.
          </p>
        </div>

       

        {/* GRID DE PROJETOS */}
        <div className="projetos-grid">
          {meusProjetos.map((projeto, index) => (
            <div className="projeto-card" key={projeto.id}>
              
              {/* Imagem do Projeto */}
              <div className="card-image-wrapper">
                {/* Badge Destaque apenas no primeiro projeto */}
                <img 
                  src={projeto.imgUrl} 
                  alt={`Imagem do projeto ${projeto.titulo}`} 
                  className="card-image"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="card-content">
                <h3 className="card-title">{projeto.titulo}</h3>
                <p className="card-description">{projeto.descricao}</p>
                
                {/* Tags */}
                <div className="card-tags">
                  {projeto.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

          
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO VER MAIS PROJETOS */}
        <div className="projetos-footer">
          <a href="https://github.com/lucasxsdw" target="_blank" rel="noreferrer" className="btn-ver-mais">
            Conferir todos os projetos no GitHub
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
   
          </a>
        </div>

      </div>
    </section>
  );
}