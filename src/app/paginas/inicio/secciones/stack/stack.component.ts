import { Component } from '@angular/core';

import { gruposTecnologia } from '../../../../core/datos/tecnologias.data';
import { ChipTecnologiaComponent } from '../../../../compartido/componentes/chip-tecnologia/chip-tecnologia.component';
import { TituloSeccionComponent } from '../../../../compartido/componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-stack',
  imports: [ChipTecnologiaComponent, TituloSeccionComponent],
  templateUrl: './stack.component.html'
})
export class StackComponent {
  gruposTecnologia = gruposTecnologia;
}