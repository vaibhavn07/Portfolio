import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Stack", "#stack"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#080b12]/85 backdrop-blur-xl [.light_&]:border-slate-200 [.light_&]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="text-xl font-black tracking-tight">
          Vaibhav<span className="text-sky-300">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-400 transition hover:text-sky-300 [.light_&]:text-slate-500 [.light_&]:hover:text-sky-600"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid size-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-sky-300 hover:text-sky-300 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-700"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-slate-700 md:hidden [.light_&]:border-slate-200"
            aria-label="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-800 px-5 py-4 md:hidden [.light_&]:border-slate-200">
          <div className="mx-auto grid max-w-6xl gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-slate-900 hover:text-sky-300 [.light_&]:text-slate-700 [.light_&]:hover:bg-slate-100"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}