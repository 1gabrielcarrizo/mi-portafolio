export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
}
