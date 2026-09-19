import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/projects/data/projects.data';
import { Project } from '@/projects/interfaces/project.interface';

const PROJECTS_PER_PAGE = 6;

interface UseProjectsReturn {
  search: string;
  setSearch: (value: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
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
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      const matchesTag =
        !selectedTag || project.tags.some((tag) => tag === selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedTag]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  return {
    search,
    setSearch,
    selectedTag,
    setSelectedTag,
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
