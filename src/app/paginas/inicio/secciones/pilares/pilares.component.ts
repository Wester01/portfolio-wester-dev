import { Component } from '@angular/core';

import { pilaresValor } from '../../../../core/datos/pilares.data';
import { TituloSeccionComponent } from '../../../../compartido/componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-pilares',
  imports: [TituloSeccionComponent],
  templateUrl: './pilares.component.html'
})
export class PilaresComponent {
  pilares = pilaresValor;

  obtenerIcono(icono: string): string {
    const iconos: Record<string, string> = {
      codigo: '</>',
      automatizacion: '⚙',
      rendimiento: '◆'
    };

    return iconos[icono] ?? '•';
  }
}