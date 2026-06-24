import { Accion } from './enlace.model';

export interface Proyecto {
  id: string;
  titulo: string;
  estado: string;
  resumen: string;
  descripcion: string;
  problema: string;
  solucion: string;
  puntosTecnicos: string[];
  tecnologias: string[];
  acciones?: Accion[];
  nota?: string;
}