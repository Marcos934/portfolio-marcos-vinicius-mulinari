import { Injectable, signal } from '@angular/core';

/**
 * Serviço de tradução personalizado para gerenciar idiomas dinamicamente
 * Permite alternar entre português e inglês sem necessidade de builds separados
 */
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Signal para o idioma atual
  public currentLanguage = signal<string>('pt-BR');
  
  // Dicionário de traduções
  private translations: { [key: string]: { [key: string]: string } } = {
    'pt-BR': {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.more-about': 'Mais sobre mim',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      'hero.greeting': 'Olá, eu sou',
      'hero.title': 'Desenvolvedor de Software',
      'hero.open-to-opportunities': 'Aberto a Oportunidades!',
      'hero.description': 'Especializado em desenvolvimento web moderno com Angular, React e Node.js. Apaixonado por criar soluções inovadoras e experiências digitais excepcionais.',
      'hero.cta': 'Ver Projetos',
      'hero.contact': 'Entre em Contato',
      'about.title': 'Sobre Mim',
    'about.profile-alt': 'Marcos Vinicius Mulinari',
      'about.subtitle': 'Conheça um pouco mais sobre minha trajetória',
      'about.description1': 'Sou desenvolvedor há 8 anos, com ampla experiência em projetos como freelancer e em equipe.',
      'about.description2': 'Especializado em desenvolvimento web moderno, tenho paixão por criar soluções inovadoras que combinam tecnologia de ponta com experiências de usuário excepcionais.',
      'about.description3': 'Atualmente focado em projetos que envolvem inteligência artificial, automação. Tenho experiência com bancos de dados vetoriais, RAG, visão computacional.',
      'about.developer-description': 'Desenvolvedor há 8 anos com ampla experiência em projetos freelancer e em equipe. Profissional em IA, automação, bancos vetoriais, RAG e visão computacional.',
      'about.education-title': 'Formação & Certificações',
      'skills.title': 'Habilidades',
      'skills.subtitle': 'Tecnologias e ferramentas que utilizo no desenvolvimento',
      'soft-skills.title': 'Soft Skills',
      'soft-skills.subtitle': 'Habilidades comportamentais que complementam minha expertise técnica',
      'soft-skills.communication': 'Comunicação clara',
      'soft-skills.fast-learning': 'Aprendizado rápido',
      'soft-skills.resilience': 'Resiliência e adaptabilidade',
      'soft-skills.analytical-thinking': 'Pensamento analítico',
      'soft-skills.curiosity-innovation': 'Curiosidade e busca por inovação',
      'soft-skills.empathy-openness': 'Empatia e abertura',
      'soft-skills.creative-problem-solving': 'Criatividade para resolver problemas',
      'soft-skills.strategic-vision': 'Visão estratégica',
      'experience.title': 'Experiência Profissional',
      'experience.subtitle': 'Minha trajetória profissional e principais conquistas',
      'education.technical': 'Técnico em Informática',
    'education.latest-certification': 'Última Certificação Recente (09/2025)',
    'education.view-certificate': 'Ver Certificado',
    'education.bachelor': 'Bacharel em Ciência da Computação',
    'education.bachelor-institution': 'Uninorte Laureate, Manaus (04/2019)',
      'projects.title': 'Projetos em Destaque',
      'projects.subtitle': 'Alguns dos projetos que desenvolvi recentemente',
      'projects.view-project': 'Ver Projeto',
      'projects.github': 'GitHub',
      'contact.title': 'Entre em Contato',
      'contact.subtitle': 'Vamos conversar sobre seu próximo projeto',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',
      'contact.location': 'Localização',
      'contact.connect': 'Conecte-se Comigo',
      'contact.more-certifications': 'Mais certificações',
      'contact.dio-profile': 'Perfil DIO',
      'more-about.title': 'Mais sobre mim',
      'more-about.subtitle': 'Descubra mais detalhes sobre minha personalidade e interesses',
      'more-about.personality-title': 'Personalidade',
      'more-about.personality-description': 'Sou uma pessoa comunicativa, proativa e sempre em busca de novos desafios. Gosto de trabalhar em equipe e compartilhar conhecimentos, acreditando que a colaboração é fundamental para o crescimento profissional e pessoal.',
      'more-about.faith-description': 'Tenho uma forte base de valores cristãos que guiam minhas decisões pessoais e profissionais.',
      'more-about.family-description': 'Valorizo muito o tempo com a família e acredito que ela é a base de tudo.',
      'more-about.values-title': 'Valores',
      'more-about.values-description': 'Valorizo a honestidade, transparência e qualidade em tudo que faço. Acredito na importância da educação continuada e no desenvolvimento constante de novas habilidades para acompanhar a evolução tecnológica.',
      'more-about.hobbies-title': 'Hobbies & Interesses',
      'more-about.games-title': 'Jogos',
      'more-about.games-subtitle': 'Jogos',
      'more-about.drone-title': 'Pilotar Drone',
      'more-about.drone-piloting': 'Pilotagem de Drone',
      'more-about.games-description': 'Age of Empires IV e League of Legends',
      'more-about.drone-description': 'Pilotagem recreativa e fotografia aérea',
      'more-about.curiosities-title': 'Curiosidades',
      'more-about.curiosities-subtitle': 'Curiosidades',
      'more-about.parachute-description': 'Já fiz salto de paraquedas',
      'more-about.parachute-jump': 'Já fiz salto de paraquedas',
      'more-about.dogs-description': 'Tenho 5 cadelas em casa',
      'more-about.five-dogs': 'Tenho 5 cadelas em casa',
      'footer.role': 'Desenvolvedor de Software',
      'footer.technologies-title': 'Tecnologias utilizadas nesse portfólio',
    'footer.frontend-framework': 'Framework Frontend',
    'footer.styling': 'Estilização',
    'footer.internationalization': 'Internacionalização',
    'footer.dev-tools': 'Ferramentas de Desenvolvimento',
    'footer.build-deploy': 'Build e Deploy',
    'footer.rights': '© 2024 Marcos Vinicius Mulinari. Todos os direitos reservados.'
    },
    'en-US': {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.more-about': 'More about me',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.greeting': 'Hello, I\'m',
      'hero.title': 'Software Developer',
      'hero.open-to-opportunities': 'Open to Opportunities!',
      'hero.description': 'Specialized in modern web development with Angular, React and Node.js. Passionate about creating innovative solutions and exceptional digital experiences.',
      'hero.cta': 'View Projects',
      'hero.contact': 'Get in Touch',
      'about.title': 'About Me',
    'about.profile-alt': 'Marcos Vinicius Mulinari',
      'about.subtitle': 'Learn more about my journey',
      'about.description1': 'I have been a developer for 8 years, with extensive experience in freelance and team projects.',
      'about.description2': 'Specialized in modern web development, I have a passion for creating innovative solutions that combine cutting-edge technology with exceptional user experiences.',
      'about.description3': 'Currently focused on projects involving artificial intelligence and automation. I have experience with vector databases, RAG, computer vision.',
      'about.developer-description': 'Developer with 8 years of experience in freelance and team projects. Professional in AI, automation, vector databases, RAG and computer vision.',
      'about.education-title': 'Education & Certifications',
      'skills.title': 'Skills',
      'skills.subtitle': 'Technologies and tools I use in development',
      'soft-skills.title': 'Soft Skills',
      'soft-skills.subtitle': 'Behavioral skills that complement my technical expertise',
      'soft-skills.communication': 'Clear communication',
      'soft-skills.fast-learning': 'Fast learning',
      'soft-skills.resilience': 'Resilience and adaptability',
      'soft-skills.analytical-thinking': 'Analytical thinking',
      'soft-skills.curiosity-innovation': 'Curiosity and innovation seeking',
      'soft-skills.empathy-openness': 'Empathy and openness',
      'soft-skills.creative-problem-solving': 'Creative problem solving',
      'soft-skills.strategic-vision': 'Strategic vision',
      'experience.title': 'Experience',
      'experience.subtitle': 'My professional journey and main achievements',
      'education.technical': 'Computer Technician',
    'education.latest-certification': 'Latest Recent Certification (09/2025)',
    'education.view-certificate': 'View Certificate',
    'education.bachelor': 'Bachelor in Computer Science',
    'education.bachelor-institution': 'Uninorte Laureate, Manaus (04/2019)',
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of the projects I have developed recently',
      'projects.view-project': 'View Project',
      'projects.github': 'GitHub',
      'contact.title': 'Get in Touch',
      'contact.subtitle': 'Let\'s talk about your next project',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',
      'contact.location': 'Location',
      'contact.connect': 'Connect with Me',
      'contact.more-certifications': 'More certifications',
      'contact.dio-profile': 'DIO Profile',
      'more-about.title': 'More about me',
      'more-about.subtitle': 'Discover more details about my personality and interests',
      'more-about.personality-title': 'Personality',
      'more-about.personality-description': 'I am a communicative, proactive person always looking for new challenges. I enjoy working in teams and sharing knowledge, believing that collaboration is fundamental for professional and personal growth.',
      'more-about.faith-description': 'I have a strong foundation of Christian values that guide my personal and professional decisions.',
      'more-about.family-description': 'I greatly value time with family and believe it is the foundation of everything.',
      'more-about.values-title': 'Values',
      'more-about.values-description': 'I value honesty, transparency and quality in everything I do. I believe in the importance of continuous education and constant development of new skills to keep up with technological evolution.',
      'more-about.hobbies-title': 'Hobbies & Interests',
      'more-about.games-title': 'Games',
      'more-about.games-subtitle': 'Games',
      'more-about.drone-title': 'Drone Piloting',
      'more-about.drone-piloting': 'Drone Piloting',
      'more-about.games-description': 'Age of Empires IV and League of Legends',
      'more-about.drone-description': 'Recreational piloting and aerial photography',
      'more-about.curiosities-title': 'Fun Facts',
      'more-about.curiosities-subtitle': 'Fun Facts',
      'more-about.parachute-description': 'I have done skydiving',
      'more-about.parachute-jump': 'I have done skydiving',
      'more-about.dogs-description': 'I have 5 female dogs at home',
      'more-about.five-dogs': 'I have 5 female dogs at home',
      'footer.role': 'Software Developer',
      'footer.technologies-title': 'Technologies used in this portfolio',
    'footer.frontend-framework': 'Frontend Framework',
    'footer.styling': 'Styling',
    'footer.internationalization': 'Internationalization',
    'footer.dev-tools': 'Development Tools',
    'footer.build-deploy': 'Build & Deploy',
    'footer.rights': '© 2024 Marcos Vinicius Mulinari. All rights reserved.'
    }
  };

  constructor() {
    // Carregar idioma salvo do localStorage
    const savedLanguage = this.getSavedLanguage();
    this.currentLanguage.set(savedLanguage);
  }

  /**
   * Obtém o idioma atual como signal
   */
  getCurrentLanguage() {
    return this.currentLanguage.asReadonly();
  }

  /**
   * Altera o idioma atual
   */
  setLanguage(language: string): void {
    this.currentLanguage.set(language);
    this.saveLanguage(language);
  }

  /**
   * Obtém uma tradução específica
   */
  translate(key: string): string {
    const currentLang = this.currentLanguage();
    return this.translations[currentLang]?.[key] || key;
  }

  /**
   * Salva o idioma no localStorage
   */
  private saveLanguage(language: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedLanguage', language);
    }
  }

  /**
   * Obtém o idioma salvo do localStorage
   */
  private getSavedLanguage(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'pt-BR';
    }
    return 'pt-BR';
  }
}