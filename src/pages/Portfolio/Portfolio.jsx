import React from "react";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";
import { Projetos } from "./components/Projetos";
import { Formacao } from "./components/Formacao";
import { Habilidades } from "./components/Habilidades";


import "./portfolio.css";

export function Portfolio() {
  return (
    <section className="portfolio-page">
      <Hero />

      <Sobre />
      <Projetos />
      <Formacao />
      <Habilidades />
    </section>
  );
}
