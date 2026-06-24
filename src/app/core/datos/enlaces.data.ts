import {
  EnlaceNavegacion,
  EnlaceSocial
} from '../modelos/enlace.model';

export const enlacesSociales: EnlaceSocial[] = [
  {
    nombre: 'LinkedIn',
    url: 'https://www.linkedin.com/in/westerdev',
    tipo: 'linkedin',
    externo: true
  },
  {
    nombre: 'GitHub',
    url: 'https://github.com/Wester01',
    tipo: 'github',
    externo: true
  },
  {
    nombre: 'WebP Crusher',
    url: 'https://github.com/Wester01/webp-crusher',
    tipo: 'github',
    externo: true
  }
];

export const enlacesNavegacion: EnlaceNavegacion[] = [
  { texto: 'Inicio', destino: '#inicio' },
  { texto: 'Proyectos', destino: '#proyectos' },
  { texto: 'Experiencia', destino: '#experiencia' },
  { texto: 'Stack', destino: '#stack' },
  { texto: 'Sobre mí', destino: '#sobre-mi' },
  { texto: 'Contacto', destino: '#contacto' }
];