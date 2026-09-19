import { create } from 'zustand';

interface UiState {
  theme: 'light' | 'dark';
  lang: 'es' | 'en';
  toggleTheme: () => void;
  setLang: (lang: 'es' | 'en') => void;
}

// 1. Helpers para el Tema
const applyThemeToDom = (theme: 'light' | 'dark'): void => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
};

const getInitialTheme = (): 'light' | 'dark' => {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// 2. Helper para el Idioma (Nuevo)
const getInitialLang = (): 'es' | 'en' => {
  const stored = localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en') {
    return stored;
  }
  return 'es'; // Idioma por defecto
};

const initialTheme = getInitialTheme();
const initialLang = getInitialLang();

applyThemeToDom(initialTheme);

export const useUiStore = create<UiState>((set, get) => ({
  theme: initialTheme,
  lang: initialLang, // Carga el idioma guardado

  toggleTheme: () => {
    const nextTheme = get().theme === 'dark' ? 'light' : 'dark';
    applyThemeToDom(nextTheme);
    set({ theme: nextTheme });
  },

  setLang: (lang) => {
    localStorage.setItem('lang', lang); // Guarda la elección del usuario
    set({ lang });
  },
}));