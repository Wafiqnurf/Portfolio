import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="relative">
      {/* Navbar + toggle */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm px-6 py-3 flex justify-between items-center">
        <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">
          Wafiq.
        </span>
        <button
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </nav>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
