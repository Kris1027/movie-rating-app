import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComponent({
  page,
  handleNextPage,
  handlePreviousPage,
}: {
  page: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}) {
  return (
    <Pagination className="pt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePreviousPage} />
        </PaginationItem>
        {page - 1 === 0 ? null : (
          <PaginationItem>
            <PaginationLink onClick={handlePreviousPage}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={handleNextPage}>{page + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
