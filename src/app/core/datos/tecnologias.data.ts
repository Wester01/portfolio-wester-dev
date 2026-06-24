import { GrupoTecnologia } from '../modelos/tecnologia.model';

export const gruposTecnologia: GrupoTecnologia[] = [
  {
    id: 'frontend',
    titulo: 'Frontend',
    descripcion:
      'Interfaces modernas, arquitectura de componentes y experiencia responsive.',
    tecnologias: [
      'Angular',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'SASS/SCSS',
      'HTML',
      'CSS'
    ]
  },
  {
    id: 'backend-datos',
    titulo: 'Backend & datos',
    descripcion:
      'APIs, lógica de servidor y persistencia de datos en entornos relacionales y no relacionales.',
    tecnologias: [
      'Python',
      'FastAPI',
      'Java',
      'Spring Boot',
      'PHP',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase'
    ]
  },
  {
    id: 'automatizacion-seguridad',
    titulo: 'Automatización, tooling & seguridad',
    descripcion:
      'Herramientas, despliegue, automatización, autenticación y análisis técnico.',
    tecnologias: [
      'Node.js',
      'Sharp',
      'Gemini API',
      'OAuth2',
      'JWT',
      'Nmap',
      'Git/GitHub',
      'Vercel',
      'CLI tools'
    ]
  }
];