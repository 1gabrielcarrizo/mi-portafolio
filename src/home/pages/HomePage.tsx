import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AboutMe } from '@/home/components/AboutMe';
import { ProjectCard } from '@/projects/components/ProjectCard';
import { featuredProjects } from '@/projects/data/projects.data';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/shared/hooks/useTranslation';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutMe />

      <section id="projects" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t('projects.featuredTitle')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                {t('projects.viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
