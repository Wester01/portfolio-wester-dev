import { Proyecto } from '../modelos/proyectos.model';

export const proyectos: Proyecto[] = [
  {
    id: 'life-iris',
    titulo: 'Life & Iris',
    estado: 'Proyecto full stack desplegado | Repositorio',
    resumen:
      'Portal web premium con Angular y panel administrativo protegido mediante autenticación real con JWT.',
    descripcion:
      'Life & Iris es una aplicación full stack desarrollada para una marca real del sector bienestar. El proyecto combina un portal público responsive con un panel privado llamado Oráculo Admin, protegido mediante login real, backend propio, base de datos PostgreSQL y despliegue completo en servicios cloud.',
    problema:
      'Crear una presencia digital profesional para una marca de bienestar, incorporando una zona administrativa privada sin exponer datos reales del cliente y manteniendo una arquitectura preparada para evolucionar.',
    solucion:
      'Desarrollo de una SPA en Angular con separación entre portal público y panel privado, conectada a una API REST en Node.js y Express. El acceso administrativo se protege con JWT, usuario persistido en PostgreSQL mediante Prisma y despliegue independiente en Netlify, Render y Neon.',
    puntosTecnicos: [
      'Frontend desarrollado con Angular y TypeScript',
      'Arquitectura modular con separación entre público y privado',
      'Panel administrativo protegido con guards',
      'Interceptor HTTP para sesión JWT',
      'API REST con Node.js, Express y TypeScript',
      'Autenticación real con JWT y bcrypt',
      'Base de datos PostgreSQL en Neon',
      'ORM con Prisma 7',
      'Despliegue frontend en Netlify',
      'Despliegue backend en Render',
      'Documentación técnica completa',
      'Auditoría de secretos con Gitleaks'
    ],
    tecnologias: [
      'Angular',
      'TypeScript',
      'SCSS',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'Netlify',
      'Render',
      'Neon'
    ],
    acciones: [
      {
        texto: 'Ver demo',
        destino: 'https://life-iris-demo.netlify.app/',
        tipo: 'principal',
        externo: true,
        aria: 'Abrir demo online de Life & Iris'
      },
      {
        texto: 'Frontend',
        destino: 'https://github.com/Wester01/demo-app-salud',
        tipo: 'secundaria',
        externo: true,
        aria: 'Abrir repositorio frontend de Life & Iris en GitHub'
      },
      {
        texto: 'Backend',
        destino: 'https://github.com/Wester01/demo-app-salud-api',
        tipo: 'secundaria',
        externo: true,
        aria: 'Abrir repositorio backend de Life & Iris en GitHub'
      }
    ],
    nota:
      'La identidad visual se muestra con autorización del cliente. Los datos administrativos, métricas, usuarios e interacciones son ficticios o adaptados para demo.'
  },
  {
    id: 'la-nueva-ola-records',
    titulo: 'La Nueva Ola Records',
    estado: 'Proyecto real en producción',
    resumen:
      'SPA para una marca musical urbana con foco en identidad visual, rendimiento y escalabilidad futura.',
    descripcion:
      'La Nueva Ola Records es una plataforma web desarrollada para una marca musical urbana, orientada a reforzar su presencia digital mediante una experiencia visual coherente, navegación sencilla y una estructura preparada para evolucionar hacia nuevas funcionalidades.',
    problema:
      'Crear una presencia digital sólida para una marca musical, con una identidad visual potente y una base técnica capaz de crecer sin rehacer el proyecto desde cero.',
    solucion:
      'Desarrollo de una SPA centrada en marca, contenido y rendimiento, desplegada en Vercel y construida con una arquitectura frontend preparada para futuras ampliaciones.',
    puntosTecnicos: [
      'Desarrollo SPA',
      'Diseño responsive',
      'Identidad visual personalizada',
      'Despliegue en Vercel',
      'Estructura preparada para evolución comercial',
      'Optimización de recursos visuales'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Vercel'],
    acciones: [
      {
        texto: 'Ver web',
        destino: 'https://lanuevaolarecords.com',
        tipo: 'principal',
        externo: true,
        aria: 'Abrir el proyecto La Nueva Ola Records'
      }
    ]
  },
  {
    id: 'webp-crusher',
    titulo: 'WebP Crusher',
    estado: 'Repositorio público',
    resumen:
      'CLI local para convertir y comprimir imágenes a WebP sin depender de servicios externos.',
    descripcion:
      'WebP Crusher es una herramienta CLI en Node.js diseñada para optimizar imágenes en flujos reales de publicación web. Convierte archivos a WebP mediante Sharp, permite procesar imágenes individuales o carpetas completas y preserva los originales por defecto.',
    problema:
      'Optimizar imágenes para proyectos web sin depender de Photoshop, GIMP, servicios externos ni herramientas pesadas en equipos con recursos limitados.',
    solucion:
      'Creación de una CLI local con calidad configurable, salida personalizada, modo recursivo, protección contra sobrescritura, dry-run y borrado explícito de originales solo cuando el usuario lo solicita.',
    puntosTecnicos: [
      'Conversión local a WebP con Sharp',
      'Procesamiento de archivo individual o carpeta',
      'Modo recursivo',
      'Calidad configurable',
      'Carpeta de salida personalizada',
      'Protección contra sobrescritura',
      'Modo dry-run',
      'Borrado explícito de originales'
    ],
    tecnologias: ['Node.js', 'Sharp', 'CLI', 'WebP', 'Web Performance'],
    acciones: [
      {
        texto: 'Ver repositorio',
        destino: 'https://github.com/Wester01/webp-crusher',
        tipo: 'principal',
        externo: true,
        aria: 'Abrir repositorio de WebP Crusher en GitHub'
      }
    ]
  },
  {
    id: 'autoblog',
    titulo: 'Autoblog',
    estado: 'Case study IA',
    resumen:
      'Sistema de automatización editorial para reducir tareas repetitivas en flujos de marketing.',
    descripcion:
      'Autoblog es un caso de uso de automatización editorial desarrollado para acelerar tareas repetitivas de generación de contenido mediante Python y agentes de IA, manteniendo la revisión humana como paso obligatorio antes de cualquier publicación.',
    problema:
      'Reducir el tiempo invertido en tareas repetitivas de preparación y generación de contenido sin eliminar el criterio humano del proceso editorial.',
    solucion:
      'Diseño de un flujo automatizado con Python y Gemini API para generar borradores estructurados, revisables y adaptables a distintos contextos de marketing.',
    puntosTecnicos: [
      'Automatización con Python',
      'Orquestación de agentes de IA',
      'Uso de Gemini API',
      'Flujo human-in-the-loop',
      'Generación de borradores estructurados',
      'Revisión humana antes de publicación',
      'Preparado para futura interfaz visual'
    ],
    tecnologias: ['Python', 'Gemini API', 'Automatización', 'Human-in-the-loop'],
    nota:
      'La demo visual se incorporará en una fase posterior, cuando la interfaz esté preparada para mostrar el flujo de forma clara y controlada.'
  }
];