import { createBrowserRouter } from 'react-router-dom';
import { PortfolioLayout } from '@/layouts/PortfolioLayout';
import { HomePage } from '@/home/pages/HomePage';
import { ProjectsPage } from '@/projects/pages/ProjectsPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
    ],
  },
]);
