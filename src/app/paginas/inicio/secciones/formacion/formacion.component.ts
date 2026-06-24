import { Component } from '@angular/core';

import { formaciones } from '../../../../core/datos/formaciones.data';
import { TituloSeccionComponent } from '../../../../compartido/componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-formacion',
  imports: [TituloSeccionComponent],
  templateUrl: './formacion.component.html'
})
export class FormacionComponent {
  formaciones = formaciones;
}