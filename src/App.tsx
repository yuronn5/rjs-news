import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header setIsDark={() => setIsDark((prev) => !prev)} isDark={isDark} />
      <div className="container">
        <Main isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
