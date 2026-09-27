import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-800 py-20 [.light_&]:border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Education</h2>
        <p className="mt-3 text-slate-400 [.light_&]:text-slate-600">My academic background.</p>

        <article className="mt-8 grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-[150px_1fr] [.light_&]:border-slate-200 [.light_&]:bg-white">
          <div className="font-bold text-sky-300">{education.period}</div>
          <div>
            <h3 className="text-lg font-bold">{education.degree}</h3>
            <p className="text-slate-400 [.light_&]:text-slate-600">{education.field}</p>
            <p className="mt-2 text-sm text-slate-500">{education.institution}</p>
          </div>
        </article>
      </div>
    </section>
  );
}