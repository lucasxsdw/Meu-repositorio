import React from 'react';
import { HeroB2b } from './components/HeroB2b/HeroB2b';
import { Problemas } from './components/Problemas/Problemas';
import { Solucoes } from './components/Solucoes/Solucoes';
import { CasosUso } from './components/CasosUso/CasosUso';
import { CtaFooter } from './components/CtaFooter/CtaFooter';
import './b2bLanding.css';

export function B2bLanding() {
  return (
    <main className="b2b-page">
      <HeroB2b />
      <Problemas />
      <Solucoes />
      <CasosUso />
      <CtaFooter />
    </main>
  );
}