import { Component, signal, OnInit, OnDestroy, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSelectorComponent } from './components/language-selector.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';
import { DataTranslationService } from './services/data-translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LanguageSelectorComponent, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  
  constructor(
    private translationService: TranslationService,
    private dataTranslationService: DataTranslationService
  ) {
    // Effect para escutar mudanças de idioma e atualizar dados automaticamente
    effect(() => {
      // Reage a mudanças no idioma atual
      const currentLang = this.translationService.getCurrentLanguage()();
      // Atualiza os dados traduzidos quando o idioma muda
      this.experiences.set(this.dataTranslationService.getExperiences());
      this.projects.set(this.dataTranslationService.getProjects());
    });
  }
  
  // Método para alterar idioma
  changeLanguage(language: string) {
    this.translationService.setLanguage(language);
    // Atualiza os dados traduzidos quando o idioma muda
    this.experiences.set(this.dataTranslationService.getExperiences());
    this.projects.set(this.dataTranslationService.getProjects());
  }
  // Informações pessoais
  protected readonly title = signal('Marcos Vinicius Mulinari - Desenvolvedor de Software');
  protected readonly name = signal('Marcos Vinicius Mulinari');
  protected readonly role = signal('Desenvolvedor de Software');
  protected description() {
    return this.translationService.translate('about.developer-description');
  }
  
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
  
  // Estado do collapse de tecnologias no footer
  protected readonly isTechnologiesOpen = signal(false);
  
  // Lifecycle hooks
  ngOnInit() {
    this.startTitleRotation();
    // Inicializa os dados traduzidos
    this.experiences.set(this.dataTranslationService.getExperiences());
    this.projects.set(this.dataTranslationService.getProjects());
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
  
  // Método para controlar o collapse de tecnologias
  toggleTechnologies() {
    this.isTechnologiesOpen.set(!this.isTechnologiesOpen());
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
    { name: 'GitHub', level: 90, icon: 'github' }
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
      github: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
    };
    
    const iconUrl = iconUrls[iconName] || iconUrls['github'];
    return `<img src="${iconUrl}" alt="${iconName}" style="width: 100%; height: 100%; object-fit: contain;" />`;
  }
  
  // Experiências profissionais (inicializadas no ngOnInit)
  protected readonly experiences = signal<any[]>([]);
  
  // Projetos em destaque (inicializados no ngOnInit)
  protected readonly projects = signal<any[]>([]);
}
