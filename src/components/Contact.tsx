export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
          Let’s <span className="text-cyan-500">Connect</span>
        </h2>

        <form
          action="https://formspree.io/f/mpwlrvaq"
          method="POST"
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama"
            required
            className="w-full p-3 bg-white/30 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/20 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 bg-white/30 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/20 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Pesan"
            rows={5}
            required
            className="w-full p-3 bg-white/30 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/20 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-indigo-700"
          >
            Kirim Pesan
          </button>
        </form>

        <div className="text-center mt-10 space-x-6 text-sm dark:text-slate-300">
          <a href="mailto:wafiqnur66@gmail.com" className="hover:text-cyan-400">
            wafiqnur66@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/wafiqnurf/"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a href="https://github.com/wafiqnf" className="hover:text-cyan-400">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
