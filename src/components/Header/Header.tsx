import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import {themeIcons} from "../../assets/index";

interface Props {
  setIsDark: () => void;
  isDark: boolean;
}

const Header = ({ setIsDark, isDark }: Props) => {
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
        onClick={setIsDark}
      />
    </header>
  );
};

export default Header;
