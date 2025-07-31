import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const words = ["Web Developer", "IoT Enthusiast", "IT Support"];
  let i = 0,
    j = 0,
    forward = true;

  useEffect(() => {
    const timer = setInterval(() => {
      if (forward) {
        setText(words[i].slice(0, ++j));
        if (j === words[i].length) {
          forward = false;
          setTimeout(() => {}, 800);
        }
      } else {
        setText(words[i].slice(0, --j));
        if (j === 0) {
          forward = true;
          i = (i + 1) % words.length;
        }
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 animate-gradient-xy">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Wafiq <span className="text-yellow-300">Nur Fadhlullah</span>
        </h1>
        <p className="text-2xl md:text-3xl h-9 mb-8">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
