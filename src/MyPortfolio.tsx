import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/router/app.router';

export const MyPortfolio = () => {
  return <RouterProvider router={appRouter} />;
};
