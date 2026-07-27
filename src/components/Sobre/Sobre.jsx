import { section } from "framer-motion/client";
import "./sobre.css";

export function Sobre() {
  return (
    <section className="container-sobre">
      <div className="text-blue">
        <span>Sobre mim</span>
      </div>

      <h2 className="titulo-sobre">
        Construindo experiências <span className="text-color">digitais</span>
      </h2>

      <p className="descricao-sobre">
        Sou um Desenvolvedor de Software apaixonado por transformar desafios
        complexos em soluções digitais eficientes e inteligentes. Acredito que a
        tecnologia é a melhor ferramenta para otimizar processos e gerar impacto
        positivo na sociedade e nos negócios. Ao longo da minha trajetória,
        construí uma sólida experiência no desenvolvimento de sistemas de alta
        criticidade, atuando de ponta a ponta em projetos estratégicos para as
        áreas de saúde pública, segurança e educação. Essa vivência me ensinou a
        projetar softwares que não são apenas funcionais, mas também seguros,
        escaláveis e preparados para lidar com cenários reais e dados sensíveis.
        Meu objetivo é ser a ponte entre uma grande ideia e um produto de
        excelência. Seja auxiliando empresas a modernizarem suas operações ou
        desenvolvendo novas soluções do zero para clientes, meu foco é sempre
        entregar um código limpo, arquiteturas robustas e resultados que
        realmente fazem a diferença.
      </p>
    </section>
  );
}
