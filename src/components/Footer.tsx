import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();

  const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Gabriel.dev</h3>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.social')}
            </h4>
            <div className="mt-4 flex gap-3">
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
              href="mailto:hello@Gabriel.dev"
              className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              hello@Gabriel.dev
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
}
