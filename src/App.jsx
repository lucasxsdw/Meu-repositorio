import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // O CSS mágico das animações

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { B2bLanding } from "./pages/B2bLanding/B2bLanding";

function App() {
  // Inicializa o AOS uma única vez quando o site carrega
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação em milissegundos (0.8 segundos)
      once: true,    // Anima apenas uma vez quando rola para baixo
      offset: 100,   // Dispara quando o elemento está 100px para dentro da tela
    });
  }, []);

  return (
    <>
      <div className="bg-stars"></div>
      <Header />
      <Routes>
        <Route path="/" element={<B2bLanding />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;