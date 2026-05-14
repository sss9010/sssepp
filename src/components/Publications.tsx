"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { publications } from "@/data/content";
import { ExternalLink, BookOpen } from "lucide-react";

const typeLabels: Record<string, { text: string; class: string }> = {
  journal:   { text: "Journal",   class: "bg-accent-50  dark:bg-accent-950/40 text-accent-700  dark:text-accent-300  border-accent-100  dark:border-accent-800/50" },
  preprint:  { text: "Preprint",  class: "bg-amber-50   dark:bg-amber-950/30  text-amber-700   dark:text-amber-300   border-amber-100   dark:border-amber-800/40" },
  "in-review": { text: "In Review", class: "bg-blue-50  dark:bg-blue-950/30   text-blue-700    dark:text-blue-300    border-blue-100    dark:border-blue-800/40" },
};

const allYears = ["All", ...Array.from(new Set(publications.map((p) => String(p.year)))).sort((a, b) => +b - +a)];

export default function Publications() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? publications : publications.filter((p) => String(p.year) === filter);

  return (
    <section id="publications" className="py-28 px-6 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="section-label mb-3">Publications</p>
          <h2 className="section-heading mb-4">Research Output</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-10">
            Peer-reviewed articles, preprints, and registered varieties in plant genomics and breeding.
          </p>
        </AnimatedSection>

        {/* Year filter */}
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

        <div className="space-y-4">
          {visible.map((pub, i) => {
            const typeStyle = typeLabels[pub.type] ?? typeLabels.journal;
            return (
              <AnimatedSection key={pub.id} delay={0.05 * i}>
                <article className="group flex gap-5 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-accent-200 dark:hover:border-accent-800/60 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-slate-900/40 transition-all duration-300">
                  {/* Icon */}
                  <div className="hidden sm:flex w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 items-center justify-center mt-0.5 group-hover:bg-accent-50 dark:group-hover:bg-accent-950/40 transition-colors">
                    <BookOpen size={15} className="text-slate-500 dark:text-slate-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 tabular-nums">
                        {pub.year}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${typeStyle.class}`}>
                        {typeStyle.text}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-snug mb-1 group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {pub.authors}
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                      {pub.journal}
                      {pub.volume && `, ${pub.volume}`}
                    </p>

                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                      >
                        <ExternalLink size={11} />
                        doi:{pub.doi}
                      </a>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
