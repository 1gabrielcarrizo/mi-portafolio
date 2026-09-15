import { useMemo, useState } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DataFlow Dashboard',
    description: 'Real-time analytics platform with customizable widgets, live charts, and team collaboration features.',
    image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
  },
  {
    id: 2,
    title: 'PocketFit',
    description: 'Cross-platform fitness companion with workout tracking, social challenges, and AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Insight Reports',
    description: 'Automated reporting tool that transforms raw data into beautiful, shareable visual summaries.',
    image: 'https://images.pexels.com/photos/5561915/pexels-photo-5561915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Next.js', 'Prisma', 'Chart.js'],
  },
];

export function Projects() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="relative mb-10 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('projects.searchPlaceholder')}
            className="pl-9"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            {t('projects.noResults')}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border/60 transition-all duration-300 hover:border-border hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <h3 className="flex items-center justify-between text-lg font-semibold">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 px-5 pb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
