import React from "react";
import "./habilidades.css";
import { minhasHabilidades } from "../../../data/data";

export function Habilidades() {
  return (
    <section className="habilidades-section">
      {/* CABEÇALHO */}
      <div className="habilidades-header">
        <span className="tech-eyebrow">TECH STACK</span>
        <h2 className="habilidades-title">
          Habilidades <span className="text-gradient">Tecnológicas</span>
        </h2>
        <p className="habilidades-subtitle">
          Tecnologias que utilizo no dia a dia para construir aplicações
          modernas, seguras e performáticas.
        </p>
      </div>

      {/* GRADE DE CARDS */}
      <div className="habilidades-grid">
        {minhasHabilidades.map((skill) => (
          <div className="skill-card" key={skill.id}>
            {/* Caixa do Ícone */}
            <div className="skill-icon-box">
              {/* Quando você colocar o ícone no data.js, ele aparece aqui */}
              {skill.icon ? (
                <img src={skill.icon} alt={`Ícone do ${skill.nome}`} />
              ) : (
                /* Placeholder provisório enquanto você não baixa os ícones */
                <span className="placeholder-text">
                  {skill.nome.substring(0, 2)}
                </span>
              )}
            </div>

            {/* Textos do Card */}
            <h4 className="skill-nome">{skill.nome}</h4>
            <span className="skill-categoria">{skill.categoria}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
