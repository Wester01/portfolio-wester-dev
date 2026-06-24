import { Component } from '@angular/core';

import { enlacesSociales } from '../../datos/enlaces.data';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent {
  anio = new Date().getFullYear();

  enlaces = enlacesSociales.filter((enlace) =>
    ['LinkedIn', 'GitHub'].includes(enlace.nombre)
  );
}