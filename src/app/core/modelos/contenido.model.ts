import { EnlaceSocial } from './enlace.model';

export interface PilarValor {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface SobreMi {
  titulo: string;
  parrafos: string[];
  imagen: string;
  alt: string;
}

export interface ContactoContenido {
  titulo: string;
  descripcion: string;
  acciones: EnlaceSocial[];
}