

import imgSirus from  "../assets/img-saude.png"
import imgSiop from  "../assets/img-siop.png"
import imgInclusao from  "../assets/img-inclusao.png"


export const meusProjetos = [
  {
    id: 1,
    titulo: "SIOP - Sistema de Inteligência de Ocorrências Policiais",
    subtitulo: "Sistema de Inteligência de Ocorrências Policiais",
    descricao: " Plataforma web desenvolvida para o 17º Batalhão da Polícia Militar da Bahia , com o objetivo de automatizar o processamento e análise estratégica de dados de violência doméstica — atualizando planilhas manuais por um sistema estruturado com dashboard em tempo real.",
    tags: ["React", "Python", "Django", "SQL"],
    imgUrl: imgSiop,
    linkGithub: "https://github.com/lucasxsdw/SIOP",
  },

 {
    id: 2,
    titulo: "Diário da Inclusão",
    subtitulo: "Análise de Sentimentos",
    descricao: "Muitos alunos têm dificuldade de expressar suas emoções diretamente para um psicólogo ou coordenador. O sistema oferece um espaço seguro, intuitivo e sem julgamento onde o aluno pode registrar como está se sentindo. Em paralelo, transforma esses relatos em dados estruturados.",
    tags: ["Frontend", "APIs", "UX/UI"],
    imgUrl: imgInclusao,
    linkGithub: "https://github.com/lucasxsdw/inclusao-sentiment-analysis",
  },

    {
    id: 3,
    titulo: "SIRUS - Sistema Integrado de Regulação e Urgência em Saúde",
    subtitulo: "Regulação médica",
    descricao: "A iniciativa nasceu da identificação de um gargalo crítico no atendimento de urgência e emergência: o uso exclusivo de formulários de papel. Percebemos que o preenchimento manual gerava lentidão, riscos de rasuras e dificuldade na organização dos dados.",
    tags: ["Frontend", "APIs", "UX/UI", "Dados", "Saúde"],
    imgUrl: imgSirus,
    linkDeploy: "https://sirus.app.br/"
  },

];


export const minhaFormacao = [
  {
    id: 1,
    periodo: "2023 — jun 2026",
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "IF Baiano · Ensino Superior",
    descricao: "Formação focada em engenharia de software, modelagem de bancos de dados, programação orientada a objetos e desenvolvimento web e mobile.",
    tag: "FORMAÇÃO",
    lado: "esquerda" 
  },


    {
    id: 2,
    periodo: "2025 - 2026",
    titulo: "Engenharia de Software: Ecossistema SIRUS",
    instituicao: "IF Baiano & SAMU Regional",
    descricao: "Atuação no desenvolvimento do Sistema Integrado de Regulação em Saúde. Foco na digitalização de fluxos críticos de urgência, englobando engenharia de requisitos, desenvolvimento web/mobile e testes de validação em ambiente ágil (Scrum).",
    tag: "PESQUISA APLICADA",
    lado: "direita" 
  },

  {
    id: 3,
    periodo: "Março a Dezembro de 2025",
    titulo: "Estágio em Engenharia de Software",
    instituicao: "17º Batalhão de Polícia Militar",
    descricao: "Automação e estruturação da inteligência de dados da corporação. Substituição de planilhas analógicas por um sistema web escalável, integrando painéis com métricas em tempo real e módulos de alertas automáticos para resposta rápida e tomada de decisão estratégica.",
    tag: "ESTÁGIO",
    lado: "esquerda"
  },

  {
    id: 4,
    periodo: "2026", 
    titulo: "Formação em Cloud Computing: AWS",
    instituicao: "Amazon Web Services (AWS)", 
    descricao: "Especialização em infraestrutura de nuvem com foco em provisionamento e segurança. Domínio prático na configuração de servidores virtuais (EC2), gerenciamento de armazenamento escalável (S3) e controle rigoroso de acessos e identidades (IAM) para aplicações web.",
    tag: "CLOUD & DEVOPS",
    lado: "direita" 
  },


  {
    id: 5,
    periodo: "2025",
    titulo: "Formação Front-end - HTML, CSS, JavaScript, React e +",
    instituicao: "Udemy",
    descricao: "Certificação focada em aprender as melhores práticas de desenvolvimento, conceitos-chave e técnicas avançadas que são essenciais para criar interfaces de usuário eficientes e atraentes.",
    tag: "CERTIFICAÇÃO",
    lado: "direita"
  },

   {
    id: 6,
    periodo: "2026",
    titulo: "Extração e Consumo de APIs com Python",
    instituicao: "Udemy",
    descricao: "Especialização avançada em integração de sistemas e consumo de APIs RESTful com Python. Domínio em otimização de performance via requisições assíncronas e paralelismo, além de gerenciamento estrutural de Rate Limits, Throttling e autenticação segura (SSL).",    
    tag: "CERTIFICAÇÃO",
    lado: "esquerda"
  },

  


];

export const minhasHabilidades = [
  { 
    id: 1, 
    nome: "Python", 
    categoria: "BACKEND", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
  },
  { 
    id: 2, 
    nome: "Django", 
    categoria: "BACKEND", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" 
  },
  { 
    id: 3, 
    nome: "React", 
    categoria: "FRONTEND", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
  },
  { 
    id: 4, 
    nome: "JavaScript", 
    categoria: "FRONTEND", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
  },
  { 
    id: 5, 
    nome: "HTML5", 
    categoria: "FRONTEND", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
  },
  { 
    id: 6, 
    nome: "CSS3", 
    categoria: "FRONTEND", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
  },
  { 
    id: 8, 
    nome: "BD", 
    categoria: "BANCO DE DADOS", 
    /* Usando a logo do PostgreSQL como representação visual universal de Banco de Dados */
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
  },
  { 
    id: 10, 
    nome: "Docker", 
    categoria: "DEVOPS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
  },
  { 
    id: 11, 
    nome: "Git", 
    categoria: "TOOLS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
  },
  { 
    id: 12, 
    nome: "Figma", 
    categoria: "TOOLS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
  },
  { 
    id: 13, 
    nome: "N8N", 
    categoria: "Automação", 
    /* Logo original do N8N direto do repositório do SimpleIcons */
    icon: "https://cdn.simpleicons.org/n8n/ea4b71" 
  },
{ 
    id: 14, 
    nome: "CRM", 
    categoria: "Gestão de Relacionamento", 
    icon: "https://cdn.simpleicons.org/hubspot/FF7A59" 
  }
];