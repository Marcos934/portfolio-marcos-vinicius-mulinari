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
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      'hero.greeting': 'Olá, eu sou',
      'hero.title': 'Desenvolvedor de Software',
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
      'skills.subtitle': 'Tecnologias e ferramentas que domino',
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
      'footer.role': 'Desenvolvedor de Software',
      'footer.rights': '© 2024 Marcos Vinicius Mulinari. Todos os direitos reservados.'
    },
    'en-US': {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.greeting': 'Hello, I\'m',
      'hero.title': 'Software Developer',
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
      'skills.subtitle': 'Technologies and tools I master',
      'experience.title': 'Professional Experience',
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
      'footer.role': 'Software Developer',
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