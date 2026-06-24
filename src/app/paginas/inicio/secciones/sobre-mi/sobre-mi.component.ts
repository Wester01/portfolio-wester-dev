import { Component } from '@angular/core';

import { sobreMi } from '../../../../core/datos/sobre-mi.data';
import { TituloSeccionComponent } from '../../../../compartido/componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-sobre-mi',
  imports: [TituloSeccionComponent],
  templateUrl: './sobre-mi.component.html'
})
export class SobreMiComponent {
  contenido = sobreMi;
}