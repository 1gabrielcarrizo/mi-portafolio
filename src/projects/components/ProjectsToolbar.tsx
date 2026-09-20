import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/shared/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface ProjectsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  availableTags: string[];
  selectedTags: string[]; // <-- Ahora recibe el array
  onTagToggle: (tag: string | null) => void; // <-- Nueva función
}

export const ProjectsToolbar = ({
  search,
  onSearchChange,
  availableTags,
  selectedTags,
  onTagToggle,
}: ProjectsToolbarProps) => {
  const { t } = useTranslation();

  return (
    <div className="mb-10 space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t('projects.searchPlaceholder')}
          className="pl-9"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Botón de "Todas" */}
        <Badge
          variant={selectedTags.length === 0 ? 'default' : 'outline'}
          className={cn(
            'cursor-pointer px-3 py-1 text-sm transition-colors',
            selectedTags.length > 0 && 'hover:bg-secondary'
          )}
          onClick={() => onTagToggle(null)}
        >
          {t('projects.allTags')}
        </Badge>

        {/* Lista dinámica de Tags */}
        {availableTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);

          return (
            <Badge
              key={tag}
              variant={isSelected ? 'default' : 'outline'}
              className={cn(
                'cursor-pointer px-3 py-1 text-sm transition-colors',
                !isSelected && 'hover:bg-secondary'
              )}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};