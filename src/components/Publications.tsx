"use client";

import { useState } from "react";
import { publications } from "@/data/content";
import { ExternalLink } from "lucide-react";

const typeLabel: Record<string, string> = {
  journal: "Journal",
  preprint: "Preprint",
  "in-review": "In Review",
};

const allYears = ["All", ...Array.from(new Set(publications.map((p) => String(p.year)))).sort((a, b) => +b - +a)];

export default function Publications() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? publications : publications.filter((p) => String(p.year) === filter);

  return (
    <section className="max-w-prose mx-auto px-4 py-16">
      <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Publications</h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">
        Peer-reviewed articles, preprints, and variety registrations.
      </p>

      <div className="flex flex-wrap gap-4 text-sm mb-12">
        {allYears.map((year) => (
          <button
            key={year}
            onClick={() => setFilter(year)}
            className={`transition-colors ${
              filter === year
                ? "text-slate-900 dark:text-white font-medium"
                : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {visible.map((pub) => (
          <div key={pub.id} className="py-7 first:pt-0">
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <span className="text-xs text-slate-400 dark:text-slate-500 tabular-nums">{pub.year}</span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{typeLabel[pub.type] ?? pub.type}</span>
            </div>
            <h2 className="text-sm font-medium text-slate-900 dark:text-white leading-snug mb-1">
              {pub.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{pub.authors}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 italic mb-2">
              {pub.journal}{pub.volume ? `, ${pub.volume}` : ""}
            </p>
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent-600 dark:text-accent-400 hover:underline"
              >
                doi:{pub.doi}
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
