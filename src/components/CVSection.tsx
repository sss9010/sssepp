import AnimatedSection from "./AnimatedSection";
import { education, experience, awards, personal } from "@/data/content";
import { GraduationCap, Briefcase, Award } from "lucide-react";

function TimelineItem({
  period,
  title,
  subtitle,
  meta,
  description,
  awards: itemAwards,
}: {
  period: string;
  title: string;
  subtitle: string;
  meta?: string;
  description?: string;
  awards?: string[];
}) {
  return (
    <div className="relative flex gap-5">
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-500 dark:bg-accent-400 flex-shrink-0 mt-1.5 ring-4 ring-accent-50 dark:ring-accent-950/50" />
        <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
      </div>

      <div className="pb-8 min-w-0">
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 tabular-nums">{period}</span>
        <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-0.5 leading-snug">{title}</h4>
        <p className="text-sm text-accent-600 dark:text-accent-400 font-medium">{subtitle}</p>
        {meta && <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{meta}</p>}
        {description && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{description}</p>
        )}
        {itemAwards && itemAwards.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {itemAwards.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-800/40 text-amber-700 dark:text-amber-300"
              >
                <Award size={10} />
                {a}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CVSection() {
  return (
    <section id="cv" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="section-label mb-3">CV</p>
          <h2 className="section-heading mb-4">Background &amp; Experience</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-8">
            Multi-institutional background spanning Estonia, Sweden, Germany, and the United States.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center">
                <GraduationCap size={16} className="text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                Education
              </h3>
            </div>
            <div>
              {education.map((edu, i) => (
                <TimelineItem
                  key={i}
                  period={edu.period}
                  title={edu.degree}
                  subtitle={edu.institution}
                  meta={[edu.location, edu.gpa ? `GPA: ${edu.gpa}` : ""].filter(Boolean).join(" · ")}
                  description={edu.thesis ? `Thesis: "${edu.thesis}"` : undefined}
                  awards={edu.awards}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Experience + Awards */}
          <div className="space-y-16">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center">
                  <Briefcase size={16} className="text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                  Experience
                </h3>
              </div>
              <div>
                {experience.map((exp, i) => (
                  <TimelineItem
                    key={i}
                    period={exp.period}
                    title={exp.role}
                    subtitle={exp.organization}
                    meta={exp.location}
                    description={exp.description}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
                  <Award size={16} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                  Honours &amp; Scholarships
                </h3>
              </div>
              <ul className="space-y-2.5">
                {awards.map((award) => (
                  <li key={award} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-accent-500 flex-shrink-0 mt-2" />
                    {award}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
