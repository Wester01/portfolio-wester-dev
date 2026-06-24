import { Component, computed, input, output } from '@angular/core';

import { Proyecto } from '../../../core/modelos/proyectos.model';
import { BotonComponent } from '../boton/boton.component';
import { ChipTecnologiaComponent } from '../chip-tecnologia/chip-tecnologia.component';
import { EtiquetaComponent } from '../etiqueta/etiqueta.component';

@Component({
  selector: 'app-tarjeta-proyecto',
  imports: [BotonComponent, ChipTecnologiaComponent, EtiquetaComponent],
  templateUrl: './tarjeta-proyecto.component.html'
})
export class TarjetaProyectoComponent {
  proyecto = input.required<Proyecto>();
  activa = input(false);
  atenuada = input(false);

  alternar = output<string>();

  idDetalle = computed(() => `detalle-${this.proyecto().id}`);

  clases = computed(() => {
    const base =
      'group relative overflow-hidden rounded-3xl border bg-[#10131D]/80 p-6 transition-all duration-300 md:p-8';

    const estado = this.activa()
      ? 'scale-[1.01] border-[#10E0B0]/40 shadow-2xl shadow-[#10E0B0]/10'
      : 'border-white/10';

    const atenuacion = this.atenuada() ? 'opacity-60 saturate-75' : '';

    return `${base} ${estado} ${atenuacion}`;
  });

  textoBoton = computed(() => (this.activa() ? 'Ocultar detalles' : 'Ver detalles'));

  emitirAlternar(): void {
    this.alternar.emit(this.proyecto().id);
  }
}