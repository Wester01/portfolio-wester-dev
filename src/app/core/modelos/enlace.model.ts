export type TipoAccion = 'principal' | 'secundaria' | 'fantasma';

export type TipoEnlaceSocial = 'linkedin' | 'github' | 'web';

export interface Accion {
  texto: string;
  destino: string;
  tipo: TipoAccion;
  externo?: boolean;
  aria?: string;
}

export interface EnlaceSocial {
  nombre: string;
  url: string;
  tipo: TipoEnlaceSocial;
  externo: boolean;
}

export interface EnlaceNavegacion {
  texto: string;
  destino: string;
}