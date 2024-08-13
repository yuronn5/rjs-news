import React from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  // const { data: dataCategories } = useFetch(getCategories);

  // const handleNextPage = () => {
  //   if (filters.page_number < TOTAL_PAGES) {
  //     changeFilter("page_number", filters.page_number + 1);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (filters.page_number > 1) {
  //     changeFilter("page_number", filters.page_number - 1);
  //   }
  // };

  // const handlePageClick = (pageNumber) => {
  //   changeFilter("page_number", pageNumber);
  // };

  return (
    <main className={styles.main}>
      <LatestNews banners={data && data.news } isLoading={isLoading} />

      <NewsByFilters filters={filters} changeFilter={changeFilter} isLoading={isLoading} news={data?.news} />

      {/* {dataCategories ? (
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

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      /> */}
    </main>
  );
};

export default Main;
