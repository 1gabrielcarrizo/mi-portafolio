import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

export const PortfolioLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
