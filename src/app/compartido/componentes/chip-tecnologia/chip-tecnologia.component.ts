import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip-tecnologia',
  templateUrl: './chip-tecnologia.component.html'
})
export class ChipTecnologiaComponent {
  texto = input.required<string>();
  destacado = input(false);
}