import { Component, computed, input } from '@angular/core';

import { TipoAccion } from '../../../core/modelos/enlace.model';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html'
})
export class BotonComponent {
  texto = input.required<string>();
  destino = input<string | null>(null);
  tipo = input<TipoAccion>('principal');
  externo = input(false);
  aria = input<string | null>(null);
  deshabilitado = input(false);

  clases = computed(() => {
    const base =
      'inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#10E0B0]/60';

    const variantes: Record<TipoAccion, string> = {
      principal:
        'bg-gradient-to-r from-[#10E0B0] via-[#10A0C0] to-[#8040E0] text-white shadow-lg shadow-[#10E0B0]/10 hover:scale-[1.01] hover:shadow-[#8040E0]/20',
      secundaria:
        'border border-white/10 bg-white/5 text-white hover:border-[#10E0B0]/50 hover:bg-white/10',
      fantasma:
        'px-4 py-2 text-[#A7B0C0] hover:text-white'
    };

    const estado = this.deshabilitado()
      ? 'pointer-events-none cursor-not-allowed opacity-50'
      : '';

    return `${base} ${variantes[this.tipo()]} ${estado}`;
  });

  rel = computed(() => (this.externo() ? 'noopener noreferrer' : null));

  target = computed(() => (this.externo() ? '_blank' : null));
}