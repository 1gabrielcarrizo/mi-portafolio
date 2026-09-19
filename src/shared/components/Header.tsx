import { Link } from 'react-router-dom';
import { Moon, Sun, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUiStore } from '@/shared/store/ui.store';
import { useTranslation } from '@/shared/hooks/useTranslation';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { theme, toggleTheme } = useUiStore();
  const { lang, setLang, t } = useTranslation();

  const navItems = [
    { label: t('nav.projects'), to: '/projects' },
    { label: t('nav.about'), to: '/#about' },
    { label: t('nav.contact'), to: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Code2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-base">Gabriel.dev</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 font-medium">
                <span className="text-xs uppercase">{lang}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-24">
              <DropdownMenuItem
                onClick={() => setLang('es')}
                className={cn(lang === 'es' && 'font-semibold')}
              >
                Español
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLang('en')}
                className={cn(lang === 'en' && 'font-semibold')}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
