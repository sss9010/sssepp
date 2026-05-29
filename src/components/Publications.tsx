"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { publications } from "@/data/content";
import { ExternalLink, BookOpen } from "lucide-react";

const typeLabels: Record<string, { text: string; class: string }> = {
  journal:     { text: "Journal",   class: "bg-accent-50  dark:bg-accent-950/40 text-accent-700  dark:text-accent-300  border-accent-100  dark:border-accent-800/50" },
  preprint:    { text: "Preprint",  class: "bg-amber-50   dark:bg-amber-950/30  text-amber-700   dark:text-amber-300   border-amber-100   dark:border-amber-800/40" },
  "in-review": { text: "In Review", class: "bg-blue-50    dark:bg-blue-950/30   text-blue-700    dark:text-blue-300    border-blue-100    dark:border-blue-800/40" },
};

const allYears = ["All", ...Array.from(new Set(publications.map((p) => String(p.year)))).sort((a, b) => +b - +a)];

export default function Publications() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? publications : publications.filter((p) => String(p.year) === filter);

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <p className="section-label mb-3">Publications</p>
          <h1 className="section-heading mb-4">Research Output</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10">
            Peer-reviewed articles, preprints, and registered varieties in plant genomics and breeding.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setFilter(year)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === year
                  ? "bg-accent-600 border-accent-600 text-white"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {year}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {visible.map((pub, i) => {
            const typeStyle = typeLabels[pub.type] ?? typeLabels.journal;
            return (
              <AnimatedSection key={pub.id} delay={0.05 * i}>
                <article className="group h-full flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 hover:border-accent-200 dark:hover:border-accent-800/60 hover:shadow-lg hover:shadow-slate-100 dark:hover:shadow-slate-900/50 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent-50 dark:group-hover:bg-accent-950/40 transition-colors">
                        <BookOpen size={14} className="text-slate-500 dark:text-slate-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 tabular-nums">
                        {pub.year}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${typeStyle.class}`}>
                      {typeStyle.text}
                    </span>
                  </div>

                  <h3 className="text-sm font-medium text-slate-900 dark:text-white leading-snug mb-2 flex-1 group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{pub.authors}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic mb-3">
                    {pub.journal}{pub.volume ? `, ${pub.volume}` : ""}
                  </p>

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-auto text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                    >
                      <ExternalLink size={11} />
                      doi:{pub.doi}
                    </a>
                  )}
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
