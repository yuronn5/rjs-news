import Pagination from "../Pagination/Pagination";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;

  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props) => {
  return (
    <>
      {top && <Pagination  {...paginationProps} />}
      {children}
      {bottom && <Pagination  {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
