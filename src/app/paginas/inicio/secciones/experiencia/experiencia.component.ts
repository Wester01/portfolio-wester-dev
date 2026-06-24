import { Component } from '@angular/core';

import { experiencias } from '../../../../core/datos/experiencias.data';
import { TituloSeccionComponent } from '../../../../compartido/componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-experiencia',
  imports: [TituloSeccionComponent],
  templateUrl: './experiencia.component.html'
})
export class ExperienciaComponent {
  experiencias = experiencias;
}