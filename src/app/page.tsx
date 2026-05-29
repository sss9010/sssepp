import Link from "next/link";
import { personal, landingKeywords } from "@/data/content";

const pages = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/publications", label: "publications" },
];

export default function Home() {
  return (
    <main className="max-w-prose mx-auto px-4 py-20 space-y-10">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
          {personal.name}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">
          {personal.institution} · {personal.location}
        </p>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {landingKeywords.join(" · ")}
      </p>

      <nav className="flex flex-wrap gap-2">
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="px-4 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
