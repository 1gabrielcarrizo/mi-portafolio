import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/shared/hooks/useTranslation';

const CV_URL = '/Carrizo-Ramon-Angel-Gabriel-CV.pdf';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t('hero.greeting')}
          </p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {t('hero.name')}
          </h1>
          <p className="mt-4 text-2xl font-medium text-muted-foreground md:text-3xl">
            {t('hero.title')}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                {t('hero.cta')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                {t('hero.downloadCv')}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/#contact">
                <Mail className="h-4 w-4" />
                {t('hero.ctaSecondary')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
