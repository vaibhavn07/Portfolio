import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 py-20 [.light_&]:border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Projects
        </h2>
        <p className="mt-3 text-slate-400 [.light_&]:text-slate-600">
          {/* Selected projects across software engineering and AI. */}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-300/60 [.light_&]:border-slate-200 [.light_&]:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-sky-300">
                  {project.tag}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight
                    className="text-slate-600 transition group-hover:text-sky-300"
                    size={18}
                  />
                </a>
              </div>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="mt-2 leading-7 text-slate-400 [.light_&]:text-slate-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
