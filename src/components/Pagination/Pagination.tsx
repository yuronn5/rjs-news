import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

interface Props {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;

}

const Pagination = ({ totalPages, handlePageClick, handlePrevPage, handleNextPage, currentPage  }: Props) => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button disabled={currentPage <= 1} onClick={handlePrevPage} className={styles.arrow}>{"<"}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button disabled={currentPage === index + 1} onClick={() => handlePageClick(index + 1)} className={styles.pageNumber} key={index}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{">"}</button>
    </div>
  );
};

export default Pagination;
