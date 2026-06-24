import { Accion } from './enlace.model';

export interface HeroContenido {
  nombre: string;
  marca: string;
  rol: string;
  descripcion: string;
  tecnologias: string[];
  acciones: Accion[];
}