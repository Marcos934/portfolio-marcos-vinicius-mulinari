import { Injectable, signal } from '@angular/core';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class DataTranslationService {
  constructor(private translationService: TranslationService) {}

  // Dados de experiências traduzidos
  getExperiences() {
    const currentLang = this.translationService.currentLanguage();
    
    if (currentLang === 'en-US') {
      return [
        {
          company: 'Resenha do Eder',
          position: 'Full-stack Developer, Remote (Freelancer)',
          period: '07/2025 - Currently',
          description: 'Development of web system for managing in-person events, with functionalities for batch control, testimonials and sales reports. System used online and at the entrance for ticket validation.',
          technologies: ['Next.js', 'React', 'TypeScript', 'Full-Stack']
        },
        {
          company: 'Gold Zone',
          position: 'Python Developer, Remote (Freelancer)',
          period: '11/2024 - 04/2025',
          description: 'I developed a Python software that uses AI and computer vision to analyze screenshots of B3 financial charts, identifying patterns and technical indicators. The solution was integrated with a vector database (Pinecone), enabling continuous learning through RAG (Retrieval-Augmented Generation) architecture to provide increasingly accurate insights.',
          technologies: ['Python', 'AI', 'Pinecone', 'RAG', 'LLM']
        },
        {
          company: 'POKER Analysis Assistant',
          position: 'Python Developer, Remote (Freelancer)',
          period: '01/2025 - 02/2025',
          description: 'I developed and implemented a Python system using Artificial Intelligence for poker game analysis. Through identification and interpretation of table screenshots, the software provides real-time strategic support, helping users make more assertive decisions.',
          technologies: ['Python', 'AI', 'OpenCV', 'Computer Vision', 'LLM', 'PyAutogui']
        },
        {
          company: 'Project Sales System',
          position: 'Full-stack Developer, Remote (Freelancer)',
          period: '06/2024 - 11/2024',
          description: 'I developed a complete e-commerce portal for selling architectural projects, focused on business performance. The system has a control panel that allows dynamic management of all content, from the project catalog to banners and SEO settings. The solution includes essential features to boost sales, such as advanced filters, quick WhatsApp contact and direct integration with Facebook Pixel for conversion tracking and marketing campaign optimization.',
          technologies: ['TypeScript', 'Next.js', 'React', 'Full-Stack']
        },
        {
          company: 'Fundação Paulo Feitosa (FPF)',
        position: 'Systems Analyst, Hybrid',
          period: '04/2021 - 09/2022',
          description: 'I developed web interfaces for router administrative panels using AngularJS and Angular. Based on API documentation, I consumed and integrated data efficiently, creating customized solutions for major clients such as Claro, Bezeq, TIM, Magenta and Deutsche Telekom. I worked in an agile environment, applying methodologies such as Kanban and Scrum, and used Jira to manage workflow and ensure deliveries aligned with each project requirements.',
          technologies: ['AngularJS', 'Angular', 'APIs', 'Scrum', 'Kanban', 'Node', 'Docker', 'Jira']
        },
        {
          company: 'MB Consultoria',
          position: 'Full Stack Developer, On-site',
          period: '03/2020 - 03/2021',
          description: 'I worked as a Full-stack Developer, being responsible for the complete software development cycle, relational database management and strategic decision making. I created a Job Description System for an international client, managing development from conception to delivery. I developed and launched MB Consultoria institutional blog, implementing all front-end and back-end functionalities. I led the complete refactoring of the company website, improving architecture and user experience.',
          technologies: ['Full-Stack', 'Database', 'Web Development', 'Laravel', 'Codeigniter', 'Mysql']
        }
      ];
    }
    
    // Retorna dados em português por padrão
    return [
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
    ];
  }

  // Dados de projetos traduzidos
  getProjects() {
    const currentLang = this.translationService.currentLanguage();
    
    if (currentLang === 'en-US') {
      return [
        {
          title: 'KIRA Project - AI Poker Analysis Assistant',
          description: 'Software that uses computer vision (OpenCV) and Artificial Intelligence to interpret poker table screenshots, analyzing plays and providing real-time insights.',
          technologies: ['Python', 'AI', 'OpenCV', 'Computer Vision'],
          github: 'https://github.com/Marcos934/kira',
          demo: 'https://github.com/Marcos934/kira'
        },
        {
          title: 'ArqPronto - Architecture Project Sales',
          description: 'Complete web system for selling architecture projects. Features robust administrative panel, advanced catalog filters and integration with digital marketing tools.',
          technologies: ['TypeScript', 'Next.js', 'React', 'Full-Stack'],
          github: 'https://github.com/Marcos934/ArqPronto',
          demo: 'https://github.com/Marcos934/ArqPronto'
        },
        {
          title: 'fromtoswap - Blockchain Transaction Tracking',
          description: 'Application developed to track and visualize transactions on a blockchain network, facilitating understanding of digital asset flow between wallets.',
          technologies: ['JavaScript', 'Blockchain', 'APIs'],
          github: 'https://github.com/Marcos934/fromtoswap',
          demo: 'https://github.com/Marcos934/fromtoswap'
        },
        {
          title: 'passaprodrive - Google Drive File Upload',
          description: 'Simple and effective solution to upload files directly to a specific Google Drive folder, automating the storage process.',
          technologies: ['PHP', 'Google Drive API'],
          github: 'https://github.com/Marcos934/passaprodrive',
          demo: 'https://github.com/Marcos934/passaprodrive'
        },
        {
          title: 'SISTEMA_COPA - Internal Consumption Control',
          description: 'Web system for controlling consumption of food products in corporate environments. Allows purchase registration and facilitates subsequent financial closing.',
          technologies: ['JavaScript', 'HTML', 'CSS'],
          github: 'https://github.com/Marcos934/SISTEMA_COPA',
          demo: 'https://github.com/Marcos934/SISTEMA_COPA'
        },
        {
          title: 'Nanobrowser - Chrome Extension for AI Web Automation',
          description: 'Open-source Chrome extension for AI web automation. A free alternative to OpenAI Operator with multi-agent system and support for multiple LLMs.',
          technologies: ['Chrome Extension', 'AI Automation', 'Multi-Agent', 'LLM Integration'],
          github: 'https://github.com/Marcos934/nanobrowser',
          demo: 'https://github.com/Marcos934/nanobrowser'
        }
      ];
    }
    
    // Retorna dados em português por padrão
    return [
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
    ];
  }
}