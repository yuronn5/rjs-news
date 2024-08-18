import Header from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main/Main";
import { useAppSelector } from "./store";

function App() {
  const { isDark } = useTheme();
  const news = useAppSelector((state) => state.news.news);
  console.log(news);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
