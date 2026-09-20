import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/projects/data/projects.data';
import { Project } from '@/projects/interfaces/project.interface';

const PROJECTS_PER_PAGE = 6;

interface UseProjectsReturn {
  search: string;
  setSearch: (value: string) => void;
  selectedTags: string[]; // <-- AHORA ES UN ARRAY DE STRINGS
  toggleTag: (tag: string | null) => void; // <-- NUEVA FUNCIÓN PARA MANEJAR EL CLIC
  currentPage: number;
  setCurrentPage: (page: number) => void;
  availableTags: string[];
  filteredProjects: Project[];
  paginatedProjects: Project[];
  totalPages: number;
  totalFiltered: number;
  projectsPerPage: number;
}

export const useProjects = (): UseProjectsReturn => {
  const [search, setSearch] = useState('');
  // Iniciamos con un array vacío (que representa que "Todas" está seleccionado)
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // ESTA ES LA MAGIA DEL NUEVO FILTRADO
  const toggleTag = (tag: string | null) => {
    // Si hace clic explícitamente en el botón "Todas"
    if (tag === null) {
      setSelectedTags([]);
      return;
    }

    setSelectedTags((prevTags) => {
      // Si el tag ya estaba seleccionado, lo removemos
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      }

      // Si no estaba seleccionado, lo agregamos a los que ya estaban
      const newTags = [...prevTags, tag];

      // TU REGLA: Si al seleccionar este tag se alcanzan TODOS los tags disponibles,
      // se resetea automáticamente al estado inicial ("Todas").
      if (newTags.length === availableTags.length) {
        return [];
      }

      return newTags;
    });
  };

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      // Si el array está vacío, pasan todos.
      // .every() asegura que el proyecto tenga TODOS los tags seleccionados (Ej: React Y TypeScript).
      // (Nota: Si prefieres que muestre proyectos que tengan React O TypeScript, cambia ".every" por ".some")
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTag;
    });
  }, [search, selectedTags]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Reiniciamos a la página 1 cuando el usuario escribe en el buscador o toca los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedTags]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  return {
    search,
    setSearch,
    selectedTags,
    toggleTag,
    currentPage,
    setCurrentPage,
    availableTags,
    filteredProjects,
    paginatedProjects,
    totalPages,
    totalFiltered: filteredProjects.length,
    projectsPerPage: PROJECTS_PER_PAGE,
  };
};