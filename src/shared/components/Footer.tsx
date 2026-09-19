import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/shared/hooks/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();

  const socials = [
    { icon: Github, href: 'https://github.com/1gabrielcarrizo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/1gabrielcarrizo/', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: t('nav.projects'), to: '/projects' },
    { label: t('nav.about'), to: '/#about' },
    { label: t('nav.contact'), to: '/#contact' },
  ];

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:place-items-center md:text-center">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left md:items-center md:text-center">
            <h3 className="text-lg font-semibold">Gabriel.dev</h3>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left md:items-center md:text-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left md:items-center md:text-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.social')}
            </h4>
            <div className="mt-4 flex justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-border hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:gabrielcarrizo2139@gmail.com"
              className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              gabrielcarrizo2139@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ramón Angel Gabriel Carrizo. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
