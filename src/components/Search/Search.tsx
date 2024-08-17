import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={styles.search}>
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
