import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/projects/data/projects.data';
import { Project } from '@/projects/interfaces/project.interface';
import { useTranslation } from '@/shared/hooks/useTranslation'; // <-- 1. Importar el hook

const PROJECTS_PER_PAGE = 6;

interface UseProjectsReturn {
  search: string;
  setSearch: (value: string) => void;
  selectedTags: string[];
  toggleTag: (tag: string | null) => void;
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
  // 2. Extraer el idioma actual (usamos 'es' por defecto por seguridad)
  const { lang } = useTranslation();
  const currentLang = lang || 'es';

  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const toggleTag = (tag: string | null) => {
    if (tag === null) {
      setSelectedTags([]);
      return;
    }

    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      }

      const newTags = [...prevTags, tag];

      if (newTags.length === availableTags.length) {
        return [];
      }

      return newTags;
    });
  };

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      // 3. Filtrar utilizando el texto del idioma actual
      const matchesSearch =
        !query ||
        project.title[currentLang].toLowerCase().includes(query) ||
        project.description[currentLang].toLowerCase().includes(query);

      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTag;
    });
  }, [search, selectedTags, currentLang]); // <-- 4. currentLang agregado a las dependencias

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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