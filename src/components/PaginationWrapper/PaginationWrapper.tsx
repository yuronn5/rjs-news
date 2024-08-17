import Pagination from "../Pagination/Pagination";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
  isDark: boolean;

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
  isDark,
  ...paginationProps
}: Props) => {
  return (
    <>
      {top && <Pagination isDark={isDark} {...paginationProps} />}
      {children}
      {bottom && <Pagination isDark={isDark} {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
