import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.3fr_.7fr] md:py-24">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
          Backend Engineer · AI / GenAI
        </p>

        <h1 className="mt-5 text-5xl font-black leading-[.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
          Building useful
          <br />
          <span className="bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">
            software & AI.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 [.light_&]:text-slate-600">
          I’m Vaibhav Nehare, a Computer Science engineer focused on backend
          development, data systems and AI-powered applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 [.light_&]:bg-slate-950 [.light_&]:text-white">
            Explore projects <ArrowDown size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-sky-300 [.light_&]:border-slate-200 [.light_&]:bg-white">
            Let's connect <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-6 flex gap-4 text-slate-400">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-sky-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-nehare-507373243" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-300">
            <Linkedin size={20} />
          </a>

          {/* LeetCode */}
  <a
    href="https://leetcode.com/vaibhavnehare"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
    className="transition hover:text-yellow-400"
  >
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.5 17.5L20 14L16.5 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 20H8.5C5.462 20 3 17.538 3 14.5V9.5C3 6.462 5.462 4 8.5 4H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 8L6.5 12L10 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>

        </div>
      </div>

      <div className="mx-auto grid aspect-square w-full max-w-sm place-items-center overflow-hidden rounded-[2rem] border border-slate-700 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,.25),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(167,139,250,.25),transparent_30%)] [.light_&]:border-slate-200 [.light_&]:bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,.18),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,.14),transparent_30%)]">
        <div className="grid size-36 place-items-center rounded-full border-2 border-slate-600 bg-[#080b12] text-5xl font-black [.light_&]:border-slate-300 [.light_&]:bg-white">
          VN
        </div>
      </div>
    </section>
  );
}