import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useTranslation } from '@/shared/hooks/useTranslation';
import { Project } from '@/projects/interfaces/project.interface';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  // Asegúrate de extraer la variable del idioma (lang o language según tu hook)
  const { t, lang } = useTranslation();

  // Si tu hook lo llama diferente (por ejemplo, 'language'), cámbialo arriba.
  // Usamos 'es' como fallback de seguridad.
  const currentLang = lang || 'es';

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/60 transition-all duration-300 hover:border-border hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title[currentLang]} // Traducción del atributo alt
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-5">

        {/* Traducción del Título */}
        <h3 className="text-lg font-semibold">
          {project.title[currentLang]}
        </h3>

        {/* Traducción de la Descripción */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description[currentLang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Botones (Mantenemos un solo botón de código como pediste) */}
      <CardFooter className="gap-2 px-5 pb-5 pt-0">
        <Button variant="outline" size="sm" className="gap-1.5" asChild>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3.5 w-3.5" />
            {t('projects.viewCode')}
          </a>
        </Button>
        <Button size="sm" className="gap-1.5" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
            {t('projects.viewDemo')}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};