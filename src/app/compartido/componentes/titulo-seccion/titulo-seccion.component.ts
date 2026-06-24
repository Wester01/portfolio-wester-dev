import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  templateUrl: './titulo-seccion.component.html'
})
export class TituloSeccionComponent {
  titulo = input.required<string>();
  descripcion = input<string | null>(null);
  etiqueta = input<string | null>(null);
}