import React, { useEffect } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import { useState } from "react";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
    const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        console.log(response.news);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
