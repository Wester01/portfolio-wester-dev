import { Component } from '@angular/core';

import { contactoContenido } from '../../../../core/datos/contacto.data';
import { BotonComponent } from '../../../../compartido/componentes/boton/boton.component';

@Component({
  selector: 'app-contacto',
  imports: [BotonComponent],
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  contenido = contactoContenido;
}