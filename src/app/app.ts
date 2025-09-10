import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  // Informações pessoais
  protected readonly title = signal('Marcos Vinicius Mulinari - Desenvolvedor de Software');
  protected readonly name = signal('Marcos Vinicius Mulinari');
  protected readonly role = signal('Desenvolvedor de Software');
  protected readonly description = signal('Desenvolvedor há 8 anos com ampla experiência em projetos freelancer e em equipe. Profissional em IA, automação, bancos vetoriais, RAG e visão computacional.');
  
  // Títulos rotativos para animação (sem 'Desenvolvedor' pois está fixo no HTML)
  protected readonly rotatingTitles = [
    'Web - Pleno',
    'Back-end - Pleno', 
    'IA - Pleno',
    'FullStack - Pleno'
  ];
  protected readonly currentTitleIndex = signal(0);
  protected readonly currentRotatingTitle = signal(this.rotatingTitles[0]);
  private titleInterval?: number;
  
  // Contato - Dados reais do currículo
  protected readonly email = signal('marcos.mulinari97@gmail.com');
  protected readonly phone = signal('(92) 99146-1245');
  protected readonly location = signal('Manaus, AM - Brasil');
  protected readonly linkedin = signal('https://www.linkedin.com/in/marcosmulinarii');
  protected readonly github = signal('https://github.com/Marcos934');
  protected readonly linkedinCertifications = signal('https://www.linkedin.com/in/marcosmulinarii/details/certifications');
  protected readonly dioProfile = signal('https://dio.me/users/marcos_mulinari97');
  
  // Estado do menu mobile
  protected readonly isMenuOpen = signal(false);
  
  // Lifecycle hooks
  ngOnInit() {
    this.startTitleRotation();
  }
  
  ngOnDestroy() {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
  }
  
  // Métodos para controle do menu
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
  
  closeMenu() {
    this.isMenuOpen.set(false);
  }
  
  // Método para iniciar a rotação dos títulos com animação de rolagem vertical
  private startTitleRotation() {
    this.titleInterval = setInterval(() => {
      // Adiciona animação de rolagem vertical (de baixo para cima)
      const titleContainer = document.querySelector('.rotating-title-container');
      if (titleContainer) {
        titleContainer.classList.add('slide-up-out');
        
        setTimeout(() => {
          const nextIndex = (this.currentTitleIndex() + 1) % this.rotatingTitles.length;
          this.currentTitleIndex.set(nextIndex);
          this.currentRotatingTitle.set(this.rotatingTitles[nextIndex]);
          
          titleContainer.classList.remove('slide-up-out');
          titleContainer.classList.add('slide-up-in');
          
          setTimeout(() => {
            titleContainer.classList.remove('slide-up-in');
          }, 500);
        }, 250);
      }
    }, 3000); // Troca a cada 3 segundos
  }
  
  // Habilidades técnicas
  protected readonly skills = signal([
    { name: '.NET', level: 80, icon: 'dotnet' },
    { name: 'C#', level: 78, icon: 'csharp' },
    { name: 'JavaScript', level: 90, icon: 'javascript' },
    { name: 'TypeScript', level: 85, icon: 'typescript' },
    { name: 'Angular', level: 88, icon: 'angular' },
    { name: 'PHP', level: 82, icon: 'php' },
    { name: 'Node.js', level: 85, icon: 'nodejs' },
    { name: 'Python', level: 80, icon: 'python' },
    { name: 'Java', level: 75, icon: 'java' },
    { name: 'SQL', level: 85, icon: 'sql' },
    { name: 'MongoDB', level: 78, icon: 'mongodb' },
    { name: 'Git', level: 90, icon: 'git' }
  ]);

  // Método para obter ícone SVG das tecnologias usando devicon.dev CDN
  getSkillIcon(iconName: string): string {
    const iconUrls: { [key: string]: string } = {
      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
      php: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      dotnet: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
      sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    };
    
    const iconUrl = iconUrls[iconName] || iconUrls['git'];
    return `<img src="${iconUrl}" alt="${iconName}" style="width: 100%; height: 100%; object-fit: contain;" />`;
  }
  
  // Experiências profissionais
  protected readonly experiences = signal([
    {
      company: 'Resenha do Eder',
      position: 'Desenvolvedor Full-stack, Remoto (Freelancer)',
      period: '07/2025 - Atualmente',
      description: 'Desenvolvimento de sistema web para gestão de eventos presenciais, com funcionalidades para controle de lotes, depoimentos e relatórios de vendas. Sistema utilizado online e na portaria para validação de ingressos.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Full-Stack']
    },
    {
      company: 'Gold Zone',
      position: 'Desenvolvedor Python, Remoto (Freelancer)',
      period: '11/2024 - 04/2025',
      description: 'Desenvolvi um software em Python que utiliza IA e visão computacional para analisar screenshots de gráficos financeiros da B3, identificando padrões e indicadores técnicos. A solução foi integrada a um banco de dados vetorial (Pinecone), permitindo aprendizado contínuo através da arquitetura RAG (Retrieval-Augmented Generation) para fornecer insights cada vez mais precisos.',
      technologies: ['Python', 'IA', 'Pinecone', 'RAG', 'LLM']
    },
    {
      company: 'Assistente de analise de POKER',
      position: 'Desenvolvedor Python, Remoto (Freelancer)',
      period: '01/2025 - 02/2025',
      description: 'Desenvolvi e implementei um sistema em Python utilizando Inteligência Artificial para análise de jogos de Poker. Através da identificação e interpretação de prints da mesa, o software oferece suporte estratégico em tempo real, auxiliando o usuário a tomar decisões mais assertivas.',
      technologies: ['Python', 'IA', 'OpenCV', 'Visão Computacional', 'LLM', 'PyAutogui']
    },
    {
      company: 'Sistema de vendas de Projetos',
      position: 'Desenvolvedor Full-stack, Remoto (Freelancer)',
      period: '06/2024 - 11/2024',
      description: 'Desenvolvi um portal de e-commerce completo para a venda de projetos arquitetônicos, focado em performance de negócio. O sistema possui um painel de controle que permite gerenciamento dinâmico de todo o conteúdo , desde o catálogo de projetos até banners e configurações de SEO. A solução inclui funcionalidades essenciais para impulsionar vendas, como filtros avançados, contato rápido via WhatsApp e uma integração direta com o Facebook Pixel para acompanhamento de conversões e otimização de campanhas de marketing',
      technologies: ['TypeScript', 'Next.js', 'React', 'Full-Stack']
    },
    {
      company: 'Fundação Paulo Feitosa (FPF)',
      position: 'Analista de sistemas, Híbrido',
      period: '04/2021 - 09/2022',
      description: 'Desenvolvi interfaces web para painéis administrativos de roteadores usando AngularJS e Angular. Com base na documentação de APIs, consumi e integrei dados de forma eficiente, criando soluções personalizadas para grandes clientes como Claro, Bezeq, TIM, Magenta e Deutsche Telekom. Atuei em um ambiente ágil, aplicando metodologias como Kanban e Scrum, e utilizei o Jira para gerenciar o fluxo de trabalho e garantir entregas alinhadas aos requisitos de cada projeto.',
      technologies: ['AngularJS', 'Angular', 'APIs', 'Scrum', 'Kanban', 'Node', 'Docker', 'Jira']
    },
    {
      company: 'MB Consultoria',
      position: 'Desenvolvedor Full Stack, Presencial',
      period: '03/2020 - 03/2021',
      description: 'Atuei como Desenvolvedor Full-stack, sendo responsável pelo ciclo completo de desenvolvimento de software, gestão de bancos de dados relacionais e tomadas de decisão estratégicas. Criei um Sistema de Descrição de Cargos para um cliente internacional, gerenciando o desenvolvimento desde a concepção até a entrega. Desenvolvi e lancei o blog institucional da MB Consultoria, implementando todas as funcionalidades front-end e back-end. Liderei a refatoração completa do site da empresa, melhorando a arquitetura e a experiência do usuário.',
      technologies: ['Full-Stack', 'Banco de Dados', 'Web Development', 'Laravel', 'Codeigniter', 'Mysql']
    }
  ]);
  
  // Projetos em destaque - Dados reais do GitHub
  protected readonly projects = signal([
    {
      title: 'Projeto KIRA - Assistente de Análise de Poker com IA',
      description: 'Software que utiliza visão computacional (OpenCV) e Inteligência Artificial para interpretar screenshots de mesas de poker, analisando a jogada e fornecendo insights em tempo real.',
      technologies: ['Python', 'IA', 'OpenCV', 'Visão Computacional'],
      github: 'https://github.com/Marcos934/kira',
      demo: 'https://github.com/Marcos934/kira'
    },
    {
      title: 'ArqPronto - Venda de Projetos de Arquitetura',
      description: 'Sistema web completo para a venda de projetos de arquitetura. Possui painel administrativo robusto, filtros avançados de catálogo e integração com ferramentas de marketing digital.',
      technologies: ['TypeScript', 'Next.js', 'React', 'Full-Stack'],
      github: 'https://github.com/Marcos934/ArqPronto',
      demo: 'https://github.com/Marcos934/ArqPronto'
    },
    {
      title: 'fromtoswap - Rastreamento de Transações em Blockchain',
      description: 'Aplicação desenvolvida para rastrear e visualizar transações em uma rede blockchain, facilitando o entendimento do fluxo de ativos digitais entre carteiras.',
      technologies: ['JavaScript', 'Blockchain', 'APIs'],
      github: 'https://github.com/Marcos934/fromtoswap',
      demo: 'https://github.com/Marcos934/fromtoswap'
    },
    {
      title: 'passaprodrive - Upload de Arquivos para Google Drive',
      description: 'Solução simples e eficaz para realizar o upload de arquivos diretamente para uma pasta específica no Google Drive, automatizando o processo de armazenamento.',
      technologies: ['PHP', 'Google Drive API'],
      github: 'https://github.com/Marcos934/passaprodrive',
      demo: 'https://github.com/Marcos934/passaprodrive'
    },
    {
      title: 'SISTEMA_COPA - Controle de Consumo Interno',
      description: 'Sistema web para controle de consumo de produtos alimentícios em ambientes corporativos. Permite registro de compras e facilita o fechamento financeiro posterior.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Marcos934/SISTEMA_COPA',
      demo: 'https://github.com/Marcos934/SISTEMA_COPA'
    },
    {
      title: 'Nanobrowser - Extensão Chrome para Automação Web com IA',
      description: 'Extensão Chrome open-source para automação web com IA. Uma alternativa gratuita ao OpenAI Operator com sistema multi-agente e suporte a múltiplos LLMs.',
      technologies: ['Chrome Extension', 'AI Automation', 'Multi-Agent', 'LLM Integration'],
      github: 'https://github.com/Marcos934/nanobrowser',
      demo: 'https://github.com/Marcos934/nanobrowser'
    }
  ]);
}
