import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function PaginationUI({
  className,
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  className?: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) {
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(currentPage !== 1 ? currentPage - 1 : 1);
              window.scrollTo({ top: 500, behavior: "smooth" });
            }}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }).map((page, index) => (
          <PaginationItem key={"page_" + index}>
            <PaginationLink
              href="#"
              isActive={currentPage === index + 1}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(Number(index + 1));
                window.scrollTo({ top: 500, behavior: "smooth" });
              }}
            >
              {Number(index + 1)}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(currentPage + 1);
              window.scrollTo({ top: 500, behavior: "smooth" });
            }}
            scroll
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
