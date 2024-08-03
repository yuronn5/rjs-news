import React from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";

const Main = () => {
  return (
    <main className={styles.main}>
      <NewsBanner />
    </main>
  );
};

export default Main;
