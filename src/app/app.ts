import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CabeceraComponent } from './core/layout/cabecera/cabecera.component';
import { PieComponent } from './core/layout/pie/pie.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent, PieComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}