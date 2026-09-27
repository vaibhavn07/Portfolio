import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800 py-20 [.light_&]:border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Experience</h2>
        <p className="mt-3 text-slate-400 [.light_&]:text-slate-600">
          My professional experience and internships.
        </p>

        <div className="mt-8 grid gap-4">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-[150px_1fr] [.light_&]:border-slate-200 [.light_&]:bg-white">
              <div className="text-sm font-bold text-sky-300">{item.period}</div>
              <div>
                <h3 className="font-bold">{item.role}</h3>
                <div className="mt-1 text-sm text-violet-400">{item.company}</div>
                <p className="mt-3 leading-7 text-slate-400 [.light_&]:text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}