export interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
}