import { Component } from '@angular/core';

import { HeroComponent } from './secciones/hero/hero.component';
import { PilaresComponent } from './secciones/pilares/pilares.component';
import { ProyectosComponent } from './secciones/proyectos/proyectos.component';
import { ExperienciaComponent } from './secciones/experiencia/experiencia.component';
import { StackComponent } from './secciones/stack/stack.component';
import { FormacionComponent } from './secciones/formacion/formacion.component';
import { SobreMiComponent } from './secciones/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

@Component({
  selector: 'app-inicio',
  imports: [
    HeroComponent,
    PilaresComponent,
    ProyectosComponent,
    ExperienciaComponent,
    StackComponent,
    FormacionComponent,
    SobreMiComponent,
    ContactoComponent
  ],
  templateUrl: './inicio.component.html'
})
export class InicioComponent {}