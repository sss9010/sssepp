import { personal, researchInterests, skills, education, awards } from "@/data/content";
import { GraduationCap, Award, MapPin } from "lucide-react";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">About</h1>
      <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500 mb-10">
        <MapPin size={13} className="text-accent-600 dark:text-accent-400" />
        {personal.location} · {personal.institution}
      </div>

      {/* Bio */}
      <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
        {personal.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Research Interests */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
          Research Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 rounded-full text-sm bg-accent-50 dark:bg-accent-950/40 border border-accent-100 dark:border-accent-800/50 text-accent-700 dark:text-accent-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-7">
          <div className="w-7 h-7 rounded-lg bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center">
            <GraduationCap size={14} className="text-accent-600 dark:text-accent-400" />
          </div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
            Education
          </h2>
        </div>
        {education.map((edu, i) => (
          <div key={i} className="relative flex gap-4 pb-7">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-accent-500 dark:bg-accent-400 flex-shrink-0 mt-1.5 ring-4 ring-white dark:ring-slate-950" />
              {i < education.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
              )}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 tabular-nums">
                {edu.period}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">{edu.institution}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{edu.location}</p>
              {edu.thesis && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  &ldquo;{edu.thesis}&rdquo;
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Awards */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
            <Award size={14} className="text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
            Honours &amp; Scholarships
          </h2>
        </div>
        <ul className="space-y-2">
          {awards.map((award) => (
            <li key={award} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <span className="w-1 h-1 rounded-full bg-accent-500 flex-shrink-0 mt-2" />
              {award}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
