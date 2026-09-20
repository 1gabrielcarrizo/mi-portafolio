import { Project } from '@/projects/interfaces/project.interface';

export const projects: Project[] = [
  {
    id: 1,
    title: {
      es: 'UpTask',
      en: 'UpTask'
    },
    description: {
      es: 'Plataforma Full Stack (MERN) para gestión de tareas. Incorpora autenticación segura con JWT, recuperación por email, roles de colaboradores y actualización del estado de tareas en tiempo real mediante Socket.io. Incluye un dashboard con progreso dinámico. Credenciales demo: admin@admin.com / 123456.',
      en: 'Full Stack (MERN) platform for task management. Features secure JWT authentication, password recovery, team roles, and real-time task status updates via Socket.io. Includes a dynamic progress dashboard. Demo credentials: admin@admin.com / 123456.'
    },
    image: '/project-master-adm-netlify-app.webp',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/uptask_frontend',
    demoUrl: 'https://project-master-adm.netlify.app/',
    featured: true,
  },
  {
    id: 2,
    title: {
      es: 'Calendar App',
      en: 'Calendar App'
    },
    description: {
      es: 'Aplicación MERN de calendario interactivo. Permite a usuarios autenticados gestionar eventos mediante un CRUD completo. El estado global del cliente está administrado eficientemente con Redux Toolkit, integrando React Big Calendar para la interfaz.',
      en: 'MERN interactive calendar application. Allows authenticated users to manage events through a complete CRUD. Global client state is efficiently managed with Redux Toolkit, integrating React Big Calendar for the UI.'
    },
    image: '/calendar-app-1gabrielcarrizo-netlify-app-auth-login.webp',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/mern-calendar',
    demoUrl: 'https://calendar-app-1gabrielcarrizo.netlify.app/auth/login',
    featured: true,
  },
  {
    id: 3,
    title: {
      es: 'Heroes App',
      en: 'Heroes App'
    },
    description: {
      es: 'SPA moderna orientada a dominios consumiendo una API en NestJS. Incluye filtrado avanzado de personajes, manejo de caché y estado asíncrono con TanStack Query. Desarrollada con React 19, TypeScript estricto y componentes UI accesibles.',
      en: 'Modern domain-oriented SPA consuming a NestJS API. Includes advanced character filtering, cache management, and asynchronous state with TanStack Query. Developed with React 19, strict TypeScript, and accessible UI components.'
    },
    image: '/heroes-app-1gabrielcarrizo-netlify-app.webp',
    tags: ['React', 'TypeScript', 'TanStack Query', 'NestJS', 'shadcn/ui', 'Tailwind CSS'],
    repoUrl: 'https://github.com/1gabrielcarrizo/heroes-app-frontend',
    demoUrl: 'https://heroes-app-1gabrielcarrizo.netlify.app/',
    featured: true,
  },
  {
    id: 4,
    title: {
      es: 'Seguimiento Pacientes Veterinaria',
      en: 'Veterinary Patient Tracking'
    },
    description: {
      es: 'Interfaz web reactiva para clínicas que permite el registro y seguimiento de historias clínicas. Implementa un sistema CRUD completo con persistencia de datos local (LocalStorage) y un diseño de layout a dos columnas totalmente responsive.',
      en: 'Reactive web interface for clinics that allows registration and tracking of medical records. Implements a complete CRUD system with local data persistence (LocalStorage) and a fully responsive two-column layout.'
    },
    image: '/appointments-vet-netlify-app.webp',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage', 'SweetAlert2'],
    repoUrl: 'https://github.com/1gabrielcarrizo/appointments-vet',
    demoUrl: 'https://appointments-vet.netlify.app/',
    featured: false,
  },
  {
    id: 5,
    title: {
      es: 'Cotizador Criptomonedas',
      en: 'Cryptocurrency Quote App'
    },
    description: {
      es: 'Dashboard que consume APIs externas mediante Axios para calcular tasas de cambio en tiempo real entre divisas fiduciarias y criptoactivos. Interfaz estilizada con Emotion (CSS-in-JS).',
      en: 'Dashboard that consumes external APIs via Axios to calculate real-time exchange rates between fiat currencies and crypto assets. Styled interface with Emotion (CSS-in-JS).'
    },
    image: '/criptomonedas-1gabrielcarrizo-netlify-app.webp',
    tags: ['React', 'JavaScript', 'Emotion', 'Axios'],
    repoUrl: 'https://github.com/1gabrielcarrizo/criptomonedas',
    demoUrl: 'https://criptomonedas-1gabrielcarrizo.netlify.app/',
    featured: false,
  },
  {
    id: 6,
    title: {
      es: 'Buscador de Bebidas',
      en: 'Cocktail Explorer'
    },
    description: {
      es: 'Explorador de catálogos de coctelería alimentado por una API REST. Implementa múltiples filtros combinados (categoría/nombre) y diseño responsivo utilizando React Bootstrap.',
      en: 'Cocktail catalog explorer powered by a REST API. Implements multiple combined filters (category/name) and responsive design using React Bootstrap.'
    },
    image: '/buscar-bebida-1gabrielcarrizo-netlify-app.webp',
    tags: ['React', 'JavaScript', 'React Bootstrap', 'Axios'],
    repoUrl: 'https://github.com/1gabrielcarrizo/search-drink-api',
    demoUrl: 'https://buscar-bebida-1gabrielcarrizo.netlify.app/',
    featured: false,
  },
  {
    id: 7,
    title: {
      es: 'Planificador de Gastos',
      en: 'Expense Planner'
    },
    description: {
      es: 'Aplicación de control financiero con definición de presupuestos y categorización de gastos. Incorpora gráficos dinámicos (barras de progreso) e interacciones swipeables.',
      en: 'Financial control application with budget definition and expense categorization. Incorporates dynamic charts (progress bars) and swipeable interactions.'
    },
    image: '/controlfinanciero-netlify-app.webp',
    tags: ['React', 'LocalStorage', 'SweetAlert2', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/expenses-control',
    demoUrl: 'https://controlfinanciero.netlify.app/',
    featured: false,
  },
  {
    id: 8,
    title: {
      es: 'Journal App',
      en: 'Journal App'
    },
    description: {
      es: 'Diario personal con backend como servicio. Integra autenticación y almacenamiento de archivos mediante Firebase, estado global con Redux Toolkit y diseño con Material UI. Credenciales demo: admin@admin.com / 123456.',
      en: 'Personal diary with Backend-as-a-Service. Integrates authentication and file storage via Firebase, global state with Redux Toolkit, and Material UI design. Demo credentials: admin@admin.com / 123456.'
    },
    image: '/journal-app-1gabrielcarrizo-netlify-app-auth-login.webp',
    tags: ['React', 'Redux Toolkit', 'Material UI', 'Firebase', 'JavaScript'],
    repoUrl: 'https://github.com/1gabrielcarrizo/journal-app',
    demoUrl: 'https://journal-app-1gabrielcarrizo.netlify.app/auth/login',
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);