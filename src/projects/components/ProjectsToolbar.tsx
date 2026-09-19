import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/shared/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface ProjectsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  availableTags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export const ProjectsToolbar = ({
  search,
  onSearchChange,
  availableTags,
  selectedTag,
  onTagSelect,
}: ProjectsToolbarProps) => {
  const { t } = useTranslation();

  const handleTagClick = (tag: string | null): void => {
    onTagSelect(selectedTag === tag ? null : tag);
  };

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
        <Badge
          variant={selectedTag === null ? 'default' : 'outline'}
          className={cn(
            'cursor-pointer px-3 py-1 text-sm transition-colors',
            selectedTag !== null && 'hover:bg-secondary'
          )}
          onClick={() => handleTagClick(null)}
        >
          {t('projects.allTags')}
        </Badge>
        {availableTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTag === tag ? 'default' : 'outline'}
            className={cn(
              'cursor-pointer px-3 py-1 text-sm transition-colors',
              selectedTag !== tag && 'hover:bg-secondary'
            )}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
