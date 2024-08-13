import React from "react";
import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { getCategories, getNews } from "../../api/apiNews";
import { useFilters } from "../../helpers/hooks/useFilters";
import { TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import LatestNews from "../LatestNews/LatestNews";
import BannersList from "../BannersList/BannersList";
import NewsBanner from "../NewsBanner/NewsBanner";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
// import

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
        {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) => changeFilter("category", category)}
          selectedCategory={filters.category}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      />
    </section>
  );
};

export default NewsByFilters;
