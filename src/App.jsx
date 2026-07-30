import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Sobre } from "./components/Sobre/Sobre";
import { Projetos } from "./components/Projetos/Projetos"; 
import "./App.css";
import { Formacao } from "./components/Formacao/Formacao";
import { Habilidades } from "./components/Habilidades/Habilidades";
import { B2bServices } from "./components/B2bServices/B2bServices";

function App() {
  return (
    <>
    <div className="bg-stars">  </div>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Formacao />
      <B2bServices />
      <Habilidades />
    
    </>
    
  );
}

export default App;
