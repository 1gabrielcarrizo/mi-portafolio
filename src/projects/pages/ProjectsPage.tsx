import { ProjectCard } from '@/projects/components/ProjectCard';
import { ProjectsPagination } from '@/projects/components/ProjectsPagination';
import { ProjectsToolbar } from '@/projects/components/ProjectsToolbar';
import { useProjects } from '@/projects/hooks/useProjects.hook';
import { useTranslation } from '@/shared/hooks/useTranslation';

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const {
    search,
    setSearch,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
    availableTags,
    paginatedProjects,
    totalPages,
    totalFiltered,
  } = useProjects();

  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t('projects.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        <ProjectsToolbar
          search={search}
          onSearchChange={setSearch}
          availableTags={availableTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />

        {totalFiltered === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            {t('projects.noResults')}
          </p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <ProjectsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </section>
  );
};
