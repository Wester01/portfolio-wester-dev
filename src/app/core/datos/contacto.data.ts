import { ContactoContenido } from '../modelos/contenido.model';

export const contactoContenido: ContactoContenido = {
  titulo: '¿Hablamos?',
  descripcion:
    'Estoy abierto a oportunidades donde pueda aportar desarrollo web, automatización, criterio visual y mentalidad técnica.',
  acciones: [
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
    }
  ]
};