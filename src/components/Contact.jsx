import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800 py-20 [.light_&]:border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-7 md:flex-row md:items-center [.light_&]:border-slate-200 [.light_&]:bg-white">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Let’s build something.</h2>
            <p className="mt-2 max-w-xl leading-7 text-slate-400 [.light_&]:text-slate-600">
              Interested in backend engineering, AI applications or data systems? Let’s connect.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/vaibhav-nehare-507373243"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 [.light_&]:bg-slate-950 [.light_&]:text-white"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <a
              href="https://github.com/vaibhavn07"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold [.light_&]:border-slate-200"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="mailto:vaibhavn2007@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold [.light_&]:border-slate-200"
            >
              <Mail size={17} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}