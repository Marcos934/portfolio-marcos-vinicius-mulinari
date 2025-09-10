import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

/**
 * Componente seletor de idioma
 * Permite alternar entre português (pt-BR) e inglês (en-US)
 */
@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-selector">
      <button 
        class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
        (click)="toggleDropdown()"
        [attr.aria-expanded]="isDropdownOpen"
        aria-haspopup="true"
      >
        <span class="text-2xl">{{ getCurrentFlag() }}</span>
        <span class="text-sm font-medium text-gray-700">{{ getCurrentLanguageName() }}</span>
        <svg 
          class="w-4 h-4 text-gray-500 transition-transform"
          [class.rotate-180]="isDropdownOpen"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div 
        *ngIf="isDropdownOpen"
        class="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50"
      >
        <button 
          *ngFor="let lang of languages"
          class="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
          [class.bg-blue-50]="lang.code === currentLocale"
          (click)="changeLanguage(lang.code)"
        >
          <span class="text-2xl">{{ lang.flag }}</span>
          <span class="text-sm font-medium text-gray-700">{{ lang.name }}</span>
          <svg 
            *ngIf="lang.code === currentLocale"
            class="w-4 h-4 text-blue-600 ml-auto"
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .language-selector {
      position: relative;
      display: inline-block;
    }
    
    .rotate-180 {
      transform: rotate(180deg);
    }
    
    /* Correção de alinhamento dos elementos internos */
    .language-selector button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
    }
    
    .language-selector button span {
      display: inline-flex;
      align-items: center;
    }
  `]
})
export class LanguageSelectorComponent {
  // Estado do dropdown
  private isOpen = signal(false);
  
  get isDropdownOpen(): boolean {
    return this.isOpen();
  }
  
  // Idiomas disponíveis
  languages = [
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' }
  ];

  private translationService = inject(TranslationService);

  get currentLocale(): string {
     return this.translationService.getCurrentLanguage()();
   }

  /**
   * Alterna a visibilidade do dropdown
   */
  toggleDropdown(): void {
    this.isOpen.update(value => !value);
  }

  /**
   * Obtém a bandeira do idioma atual
   */
  getCurrentFlag(): string {
    const currentLang = this.languages.find(lang => lang.code === this.currentLocale);
    return currentLang?.flag || '🇧🇷';
  }

  /**
   * Obtém o nome do idioma atual
   */
  getCurrentLanguageName(): string {
    const currentLang = this.languages.find(lang => lang.code === this.currentLocale);
    return currentLang?.name || 'Português';
  }

  /**
   * Altera o idioma da aplicação
   * Usa o serviço de tradução para alternar idiomas dinamicamente
   */
  changeLanguage(localeCode: string): void {
    this.translationService.setLanguage(localeCode);
    this.isOpen.set(false); // Fechar o dropdown após selecionar
  }
}