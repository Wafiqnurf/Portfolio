export default function About() {
  return (
    <section id="about" className="py-20 px-4 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
          About <span className="text-cyan-500">Wafiq</span>
        </h2>

        {/* Kontainer foto + teks sangat rapat */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          {/* Foto persegi panjang */}
          <div className="relative flex-shrink-0 w-40 md:w-44 h-56 md:h-64 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/public/images/wafiq.jpg"
              alt="Wafiq"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Teks */}
          <div className="flex-1 space-y-4 dark:text-slate-200">
            <p className="text-base md:text-lg leading-relaxed">
              I am a graduate of the Telecommunications Systems program with a
              GPA of 3.60 from Universitas Pendidikan Indonesia. I have
              experience and a strong interest in website development, IT
              support, and the implementation of Internet of Things (IoT)
              technology. I continuously strive to improve my technical skills
              and am ready to contribute to innovative and impactful technology
              projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                  Tech Stack
                </h4>
                <ul className="text-sm space-y-1">
                  <li>React, Next.js, Tailwind</li>
                  <li>Node, Laravel, MySQL</li>
                  <li>ESP32, Arduino, ESP8266</li>
                  <li>Linux, Git</li>
                </ul>
              </div>

              <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                  Fun Facts
                </h4>
                <ul className="text-sm space-y-1">
                  <li>Gaming and Live Stream</li>
                  <li>Cert: Google IT Support</li>
                  <li>Domisili Sumedang</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
