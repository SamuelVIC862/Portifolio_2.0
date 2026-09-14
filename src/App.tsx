import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <section
      className={`min-h-screen flex flex-col bg-background transition-all duration-300`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="px-52 flex flex-col">
        <main className="flex-1 min-h-screen"></main>
      </div>
      <Footer />
    </section>
  );
}

export default App;
