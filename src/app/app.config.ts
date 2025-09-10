import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';

import { routes } from './app.routes';

// Registrar locales
registerLocaleData(localePt, 'pt-BR');
registerLocaleData(localeEn, 'en-US');

/**
 * Obtém o idioma selecionado do localStorage ou usa pt-BR como padrão
 */
function getSelectedLocale(): string {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('selectedLanguage') || 'pt-BR';
  }
  return 'pt-BR';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: getSelectedLocale() }
  ]
};
