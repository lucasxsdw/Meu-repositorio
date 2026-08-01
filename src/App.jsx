import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { B2bLanding } from "./pages/B2bLanding/B2bLanding";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <>
      {/* O fundo de estrelas e o Header ficam fixos em todas as telas */}
      <div className="bg-stars"></div>
      <Header />
      
      {/* As rotas controlam o que aparece no meio da tela */}
      <Routes>
        {/* Como a página B2B foi deletada, vamos apontar tudo para o Portfolio por enquanto */}
        <Route path="/" element={<B2bLanding />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;