import {
  afterNextRender,
  Component,
  ElementRef,
  QueryList,
  signal,
  ViewChildren
} from '@angular/core';

import { proyectos } from '../../../../core/datos/proyectos.data';
import { TarjetaProyectoComponent } from '../../../../compartido/componentes/tarjeta-proyecto/tarjeta-proyecto.component';
import { TituloSeccionComponent } from '../../../../compartido/componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-proyectos',
  imports: [TituloSeccionComponent, TarjetaProyectoComponent],
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent {
  proyectos = proyectos;
  proyectoActivoId = signal<string | null>(null);

  @ViewChildren('tarjetaProyecto')
  tarjetasProyecto?: QueryList<ElementRef<HTMLElement>>;

  alternarProyecto(id: string): void {
    const nuevoId = this.proyectoActivoId() === id ? null : id;
    this.proyectoActivoId.set(nuevoId);

    if (nuevoId) {
      this.enfocarProyecto(nuevoId);
    }
  }

  estaActivo(id: string): boolean {
    return this.proyectoActivoId() === id;
  }

  estaAtenuado(id: string): boolean {
    const activoId = this.proyectoActivoId();

    return Boolean(activoId && activoId !== id);
  }

  private enfocarProyecto(id: string): void {
    afterNextRender(() => {
      const tarjeta = this.tarjetasProyecto?.find(
        (item) => item.nativeElement.dataset['proyectoId'] === id
      );

      tarjeta?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  }
}