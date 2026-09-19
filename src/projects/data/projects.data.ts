import { Project } from '@/projects/interfaces/project.interface';

export const projects: Project[] = [
  {
    id: 1,
    title: 'UpTask',
    description:
      'Plataforma Full Stack (MERN) para gestión de tareas. Incorpora autenticación segura con JWT, recuperación por email, roles de colaboradores y actualización del estado de tareas en tiempo real mediante Socket.io. Incluye un dashboard con progreso dinámico. Credenciales demo: admin@admin.com / 123456.',
    image:
      '/project-master-adm-netlify-app.png',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/uptask_frontend',
    demoUrl: 'https://project-master-adm.netlify.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Calendar App',
    description:
      'Aplicación MERN de calendario interactivo. Permite a usuarios autenticados gestionar eventos mediante un CRUD completo. El estado global del cliente está administrado eficientemente con Redux Toolkit, integrando React Big Calendar para la interfaz.',
    image:
      '/calendar-app-1gabrielcarrizo-netlify-app-auth-login.png',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/mern-calendar',
    demoUrl: 'https://calendar-app-1gabrielcarrizo.netlify.app/auth/login',
    featured: true,
  },
  {
    id: 3,
    title: 'Heroes App',
    description:
      'SPA moderna orientada a dominios consumiendo una API en NestJS. Incluye filtrado avanzado de personajes, manejo de caché y estado asíncrono con TanStack Query. Desarrollada con React 19, TypeScript estricto y componentes UI accesibles.',
    image:
      '/heroes-app-1gabrielcarrizo-netlify-app.png',
    tags: ['React', 'TypeScript', 'TanStack Query', 'NestJS', 'shadcn/ui', 'Tailwind CSS'],
    repoUrl: 'https://github.com/1gabrielcarrizo/heroes-app-frontend',
    demoUrl: 'https://heroes-app-1gabrielcarrizo.netlify.app/',
    featured: true,
  },
  {
    id: 4,
    title: 'Seguimiento Pacientes Veterinaria',
    description:
      'Interfaz web reactiva para clínicas que permite el registro y seguimiento de historias clínicas. Implementa un sistema CRUD completo con persistencia de datos local (LocalStorage) y un diseño de layout a dos columnas totalmente responsive.',
    image:
      '/appointments-vet-netlify-app.png',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage', 'SweetAlert2'],
    repoUrl: 'https://github.com/1gabrielcarrizo/appointments-vet',
    demoUrl: 'https://appointments-vet.netlify.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Cotizador Criptomonedas',
    description:
      'Dashboard que consume APIs externas mediante Axios para calcular tasas de cambio en tiempo real entre divisas fiduciarias y criptoactivos. Interfaz estilizada con Emotion (CSS-in-JS).',
    image:
      '/criptomonedas-1gabrielcarrizo-netlify-app.png',
    tags: ['React', 'JavaScript', 'Emotion', 'Axios'],
    repoUrl: 'https://github.com/1gabrielcarrizo/criptomonedas',
    demoUrl: 'https://criptomonedas-1gabrielcarrizo.netlify.app/',
    featured: false,
  },
  {
    id: 6,
    title: 'Buscador de Bebidas',
    description:
      'Explorador de catálogos de coctelería alimentado por una API REST. Implementa múltiples filtros combinados (categoría/nombre) y diseño responsivo utilizando React Bootstrap.',
    image:
      '/buscar-bebida-1gabrielcarrizo-netlify-app.png',
    tags: ['React', 'JavaScript', 'React Bootstrap', 'Axios'],
    repoUrl: 'https://github.com/1gabrielcarrizo/search-drink-api',
    demoUrl: 'https://buscar-bebida-1gabrielcarrizo.netlify.app/',
    featured: false,
  },
  {
    id: 7,
    title: 'Planificador de Gastos',
    description:
      'Aplicación de control financiero con definición de presupuestos y categorización de gastos. Incorpora gráficos dinámicos (barras de progreso) e interacciones swipeables.',
    image:
      '/controlfinanciero-netlify-app.png',
    tags: ['React', 'LocalStorage', 'SweetAlert2', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/expenses-control',
    demoUrl: 'https://controlfinanciero.netlify.app/',
    featured: false,
  },
  {
    id: 8,
    title: 'Journal App',
    description:
      'Diario personal con backend como servicio. Integra autenticación y almacenamiento de archivos mediante Firebase, estado global con Redux Toolkit y diseño con Material UI. Credenciales demo: admin@admin.com / 123456.',
    image:
      '/journal-app-1gabrielcarrizo-netlify-app-auth-login.png',
    tags: ['React', 'Redux Toolkit', 'Material UI', 'Firebase', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/journal-app',
    demoUrl: 'https://journal-app-1gabrielcarrizo.netlify.app/auth/login',
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
