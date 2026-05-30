import { personal, researchInterests, skills, education, awards } from "@/data/content";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <main className="max-w-prose mx-auto px-4 py-16 space-y-12">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">About</h1>
        <div className="flex gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/pic1.jpg`}
            alt={personal.name}
            className="w-36 h-36 rounded-xl object-cover object-[center_20%] flex-shrink-0"
          />
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
          Research Interests
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {researchInterests.join(" · ")}
        </p>
      </section>

      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
          Skills
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {skills.join(" · ")}
        </p>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap size={14} className="text-slate-400 dark:text-slate-500" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Education
          </h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {education.map((edu, i) => (
            <div key={i} className="py-4 first:pt-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-medium text-slate-900 dark:text-white leading-snug">
                  {edu.degree}
                </h3>
                <span className="text-xs text-slate-400 dark:text-slate-500 tabular-nums shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {edu.institution} · {edu.location}
              </p>
              {edu.thesis && (
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 leading-relaxed">
                  &ldquo;{edu.thesis}&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award size={14} className="text-slate-400 dark:text-slate-500" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Honours &amp; Scholarships
          </h2>
        </div>
        <ul className="space-y-1.5">
          {awards.map((award) => (
            <li key={award} className="text-sm text-slate-600 dark:text-slate-400">
              {award}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
