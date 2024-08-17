import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
  isDark: boolean;
}

const Search = ({ keywords, setKeywords, isDark }: Props) => {
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};

export default Search;
