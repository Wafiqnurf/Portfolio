const projects = [
  {
    title: "Smart-Lamp",
    desc: "Developing an Internet of Things (IoT) device that can control lights using the Blynk application and RFID",
    stack: "ESP8266, Blynk",
  },
  {
    title: "Deteksi Kebakaran",
    desc: " Developing Internet of Things (IoT) device that can control lights using the Blynk application and RFID",
    stack: "ESP8266, Whatsapp, MQ-5,",
  },
  {
    title: "Diatensi Care",
    desc: "Aplikasi website untuk pencatatan gula darah dan tensi",
    stack: "Laravel, Java Script, Auth, CSS",
    repo: "https://github.com/Wafiqnurf/Diatensi",
  },
  {
    title: "Website UPTD Balai Benih Hortikultura",
    desc: "Website landing page dan juga pemasaran produk dan layanan UPTD Balai Benih Hortikultura",
    stack: "Laravel, MySQL, Java Script, CSS",
    demo: "https://uptdbalaibenihhortikultura.my.id/",
    repo: "https://github.com/Wafiqnurf/UPTD-BBH-Skripsi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 dark:bg-slate-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
        Featured <span className="text-cyan-500">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {p.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {p.desc}
            </p>
            <p className="text-xs font-medium text-cyan-500 mb-4">{p.stack}</p>
            <div className="space-x-4 text-sm">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-cyan-600"
              >
                Live Demo
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-cyan-600"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
