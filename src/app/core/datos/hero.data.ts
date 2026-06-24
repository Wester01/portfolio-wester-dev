import { HeroContenido } from '../modelos/hero.model';

export const heroContenido: HeroContenido = {
  nombre: 'Guillermo Romero',
  marca: 'Wester Dev',
  rol: 'Full Stack Developer',
  descripcion:
    'Desarrollo interfaces modernas, automatizo procesos con Python e IA y construyo soluciones web con foco en rendimiento, seguridad y experiencia de usuario.',
  tecnologias: ['Angular', 'TypeScript', 'Python', 'React', 'Tailwind CSS'],
  acciones: [
    {
      texto: 'Ver proyectos',
      destino: '#proyectos',
      tipo: 'principal',
      aria: 'Ir a la sección de proyectos destacados'
    },
    {
      texto: 'Contactar por LinkedIn',
      destino: 'https://www.linkedin.com/in/westerdev',
      tipo: 'secundaria',
      externo: true,
      aria: 'Abrir perfil de LinkedIn de Guillermo Romero'
    }
  ]
};