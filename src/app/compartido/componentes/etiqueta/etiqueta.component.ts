import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html'
})
export class EtiquetaComponent {
  texto = input.required<string>();

  clases = computed(() => {
    const base =
      'inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium';

    const textoNormalizado = this.texto().toLowerCase();

    if (textoNormalizado.includes('producción')) {
      return `${base} border-[#10E0B0]/20 bg-[#10E0B0]/10 text-[#10E0B0]`;
    }

    if (textoNormalizado.includes('repositorio')) {
      return `${base} border-[#3082DF]/20 bg-[#3082DF]/10 text-[#7DB7FF]`;
    }

    if (textoNormalizado.includes('ia')) {
      return `${base} border-[#8040E0]/20 bg-[#8040E0]/10 text-[#C9B6FF]`;
    }

    return `${base} border-white/10 bg-white/5 text-[#A7B0C0]`;
  });
}