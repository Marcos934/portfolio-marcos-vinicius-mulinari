import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

/**
 * Pipe personalizado para tradução de textos
 * Uso: {{ 'chave.da.traducao' | translate }}
 */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Permite que o pipe seja reavaliado quando o idioma muda
})
export class TranslatePipe implements PipeTransform {
  private translationService = inject(TranslationService);

  transform(key: string): string {
    return this.translationService.translate(key);
  }
}