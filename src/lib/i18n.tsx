import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

type TranslationKey =
  | 'nav.projects'
  | 'nav.about'
  | 'nav.contact'
  | 'hero.greeting'
  | 'hero.name'
  | 'hero.title'
  | 'hero.description'
  | 'hero.cta'
  | 'hero.ctaSecondary'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.searchPlaceholder'
  | 'projects.noResults'
  | 'projects.viewProject'
  | 'footer.tagline'
  | 'footer.rights'
  | 'footer.social'
  | 'footer.email'
  | 'footer.quickLinks';

type Translations = Record<TranslationKey, string>;

const translations: Record<Language, Translations> = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Ramón Angel Gabriel Carrizo',
    'hero.title': 'Desarrollador Full Stack',
    'hero.description': 'Construyo aplicaciones web modernas, rápidas y escalables. Especializado en React, Node.js y arquitecturas en la nube que resuelven problemas reales.',
    'hero.cta': 'Ver proyectos',
    'hero.ctaSecondary': 'Contáctame',
    'projects.title': 'Proyectos destacados',
    'projects.subtitle': 'Una selección de trabajos recientes que combinan diseño limpio con ingeniería sólida.',
    'projects.searchPlaceholder': 'Buscar proyectos o tecnologías...',
    'projects.noResults': 'No se encontraron proyectos que coincidan con tu búsqueda.',
    'projects.viewProject': 'Ver proyecto',
    'footer.tagline': 'Construyendo experiencias digitales con propósito.',
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
    'hero.description': 'I build modern, fast, and scalable web applications. Specialized in React, Node.js, and cloud architectures that solve real-world problems.',
    'hero.cta': 'View projects',
    'hero.ctaSecondary': 'Get in touch',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of recent work combining clean design with solid engineering.',
    'projects.searchPlaceholder': 'Search projects or technologies...',
    'projects.noResults': 'No projects found matching your search.',
    'projects.viewProject': 'View project',
    'footer.tagline': 'Building digital experiences with purpose.',
    'footer.rights': 'All rights reserved.',
    'footer.social': 'Social',
    'footer.email': 'Email',
    'footer.quickLinks': 'Links',
  },
};

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');
  const t = (key: TranslationKey) => translations[lang][key];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
