import { useState } from "react";
import { techStack } from "../data/portfolio";

const filters = [
  ["all", "All"],
  ["languages", "Languages"],
  ["backend", "Backend"],
  ["ai", "AI / GenAI"],
  ["data", "Data"],
  ["cloud", "Cloud"],
  ["frontend", "Frontend"],
];

export default function TechStack() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? techStack
      : techStack.filter((item) => item.filter === active);

  return (
    <section id="stack" className="border-t border-slate-800 py-20 [.light_&]:border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Tech stack</h2>
        <p className="mt-3 text-slate-400 [.light_&]:text-slate-600">
          Filter the technologies by category.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map(([value, label]) => (
            <button
              type="button"
              key={value}
              onClick={() => setActive(value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === value
                  ? "border-sky-300 text-sky-300"
                  : "border-slate-700 text-slate-400 hover:border-sky-300 hover:text-sky-300 [.light_&]:border-slate-200 [.light_&]:text-slate-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article key={item.category} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-300/60 [.light_&]:border-slate-200 [.light_&]:bg-white">
              <h3 className="font-bold">{item.category}</h3>
              <p className="mt-2 leading-7 text-slate-400 [.light_&]:text-slate-600">{item.items}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}