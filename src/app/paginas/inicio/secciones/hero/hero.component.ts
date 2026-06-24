import { Component } from '@angular/core';

import { heroContenido } from '../../../../core/datos/hero.data';
import { BotonComponent } from '../../../../compartido/componentes/boton/boton.component';
import { ChipTecnologiaComponent } from '../../../../compartido/componentes/chip-tecnologia/chip-tecnologia.component';

@Component({
  selector: 'app-hero',
  imports: [BotonComponent, ChipTecnologiaComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  contenido = heroContenido;
}