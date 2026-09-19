import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useTranslation } from '@/shared/hooks/useTranslation';

interface ProjectsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ProjectsPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsPaginationProps) => {
  const { t } = useTranslation();

  if (totalPages <= 1) return null;

  const getVisiblePages = (): (number | 'ellipsis')[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: (number | 'ellipsis')[] = [1];

    if (currentPage > 3) pages.push('ellipsis');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page += 1) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) pages.push('ellipsis');

    pages.push(totalPages);
    return pages;
  };

  const handlePrevious = (): void => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="mt-12 space-y-4">
      <p className="text-center text-sm text-muted-foreground">
        {t('projects.page')} {currentPage} {t('projects.of')} {totalPages}
      </p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handlePrevious();
              }}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>

          {getVisiblePages().map((page, index) =>
            page === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(event) => {
                    event.preventDefault();
                    onPageChange(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleNext();
              }}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
