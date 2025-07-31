import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDark = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDark(!dark);
  };

  // Tambahkan shadow saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cek dark-mode awal
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "shadow-lg" : ""}
        bg-white/70 dark:bg-slate-900/70 backdrop-blur-md`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600"
        >
          Wafiq.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark-mode toggle */}
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full text-slate-700 dark:text-slate-200
                     hover:bg-slate-200 dark:hover:bg-slate-700 transition"
        >
          {dark ? "🌙" : "☀️"}
        </button>

        {/* Mobile menu (optional) – bisa di-expand sesuai kebutuhan */}
      </nav>
    </header>
  );
}
