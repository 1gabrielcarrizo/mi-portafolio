export type TranslationKey =
  | 'nav.projects'
  | 'nav.about'
  | 'nav.contact'
  | 'hero.greeting'
  | 'hero.name'
  | 'hero.title'
  | 'hero.description'
  | 'hero.cta'
  | 'hero.ctaSecondary'
  | 'hero.downloadCv'
  | 'projects.title'
  | 'projects.featuredTitle'
  | 'projects.subtitle'
  | 'projects.searchPlaceholder'
  | 'projects.noResults'
  | 'projects.viewCode'
  | 'projects.viewDemo'
  | 'projects.viewAll'
  | 'projects.allTags'
  | 'projects.page'
  | 'projects.of'
  | 'footer.tagline'
  | 'footer.rights'
  | 'footer.social'
  | 'footer.email'
  | 'footer.quickLinks';

export const translations: Record<'es' | 'en', Record<TranslationKey, string>> = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Ramón Angel Gabriel Carrizo',
    'hero.title': 'Desarrollador Full Stack',
    'hero.description':
      'Estudiante avanzado de Ingeniería en Sistemas de Información y Desarrollador Full Stack. Construyo aplicaciones web modernas y escalables, aplicando sólidos principios de arquitectura de software para crear soluciones eficientes a problemas reales.',
    'hero.cta': 'Ver proyectos',
    'hero.ctaSecondary': 'Contáctame',
    'hero.downloadCv': 'Descargar CV',
    'projects.title': 'Todos los proyectos',
    'projects.featuredTitle': 'Proyectos destacados',
    'projects.subtitle':
      'Una selección de mis trabajos que combinan bases sólidas de ingeniería con un diseño limpio y funcional.',
    'projects.searchPlaceholder': 'Buscar proyectos por título o descripción...',
    'projects.noResults': 'No se encontraron proyectos que coincidan con tu búsqueda.',
    'projects.viewCode': 'Código',
    'projects.viewDemo': 'Demo',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.allTags': 'Todas',
    'projects.page': 'Página',
    'projects.of': 'de',
    'footer.tagline': 'Fusionando ingeniería y código para crear experiencias digitales de alto impacto.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.social': 'Redes sociales',
    'footer.email': 'Correo',
    'footer.quickLinks': 'Enlaces',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Ramón Angel Gabriel Carrizo',
    'hero.title': 'Full Stack Developer',
    'hero.description':
      'Advanced Information Systems Engineering student and Full Stack Developer. I build modern, scalable web applications, applying solid software architecture principles to create efficient solutions for real-world problems.',
    'hero.cta': 'View projects',
    'hero.ctaSecondary': 'Get in touch',
    'hero.downloadCv': 'Download CV',
    'projects.title': 'All projects',
    'projects.featuredTitle': 'Featured projects',
    'projects.subtitle':
      'A selection of my work combining solid engineering foundations with clean and functional design.',
    'projects.searchPlaceholder': 'Search projects by name or description...',
    'projects.noResults': 'No projects found matching your search.',
    'projects.viewCode': 'Code',
    'projects.viewDemo': 'Demo',
    'projects.viewAll': 'View all projects',
    'projects.allTags': 'All',
    'projects.page': 'Page',
    'projects.of': 'of',
    'footer.tagline': 'Merging engineering and code to build high-impact digital experiences.',
    'footer.rights': 'All rights reserved.',
    'footer.social': 'Social',
    'footer.email': 'Email',
    'footer.quickLinks': 'Links',
  },
};

export const translate = (lang: 'es' | 'en', key: TranslationKey): string =>
  translations[lang][key];