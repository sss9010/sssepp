import AnimatedSection from "./AnimatedSection";
import { personal, researchInterests, skills, education } from "@/data/content";
import { GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="section-label mb-3">About</p>
          <h2 className="section-heading mb-16">Bridging Field and Genome</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <AnimatedSection delay={0.1} className="space-y-5">
            {personal.bio.map((para, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="flex items-center gap-2 pt-2 text-sm text-slate-500 dark:text-slate-500">
              <MapPin size={14} className="text-accent-600 dark:text-accent-400 flex-shrink-0" />
              <span>{personal.location} · {personal.institution}</span>
            </div>
          </AnimatedSection>

          {/* Right column */}
          <div className="space-y-10">
            <AnimatedSection delay={0.2}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-4">
                Research Interests
              </h3>
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
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-4">
                Technical Skills
              </h3>
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
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.slice(0, 3).map((edu, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center">
                      <GraduationCap size={14} className="text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white leading-snug">{edu.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {edu.institution} · {edu.period}
                        {edu.gpa && (
                          <span className="ml-1 text-xs text-slate-400 dark:text-slate-500">GPA {edu.gpa}</span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
