export default function About() {
  const stats = [
    ["400+", "LeetCode problems"],
    // ["250+", "CodeChef problems"],
    // ["1st", "Ecothon 3.0 prize"],
  ];

  return (
    <section id="about" className="border-t border-slate-800 py-20 [.light_&]:border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">About me</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-400 [.light_&]:text-slate-600">
          I enjoy turning complex problems into practical software. My interests
          span scalable backend services, information retrieval, LLM
          applications, data engineering and machine learning.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoCard title="What I do">
            I build backend services, REST APIs, data pipelines and AI-powered
            applications using modern software engineering practices.
          </InfoCard>
          <InfoCard title="What I like">
            Backend engineering, GenAI, LLMs, competitive programming, machine
            learning and solving challenging technical problems.
          </InfoCard>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 [.light_&]:border-slate-200 [.light_&]:bg-white">
              <strong className="block text-3xl">{value}</strong>
              <span className="text-sm text-slate-400 [.light_&]:text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, children }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-sky-300/60 [.light_&]:border-slate-200 [.light_&]:bg-white">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 leading-7 text-slate-400 [.light_&]:text-slate-600">{children}</p>
    </article>
  );
}