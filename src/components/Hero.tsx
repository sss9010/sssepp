"use client";

import { motion } from "framer-motion";
import { Mail, Microscope, BookOpen, Github, Linkedin, GraduationCap, Award } from "lucide-react";
import { personal, researchInterests, skills, education, awards } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

function TimelineItem({
  period,
  title,
  subtitle,
  meta,
  description,
}: {
  period: string;
  title: string;
  subtitle: string;
  meta?: string;
  description?: string;
}) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-accent-500 dark:bg-accent-400 flex-shrink-0 mt-1.5 ring-4 ring-white dark:ring-slate-950" />
        <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
      </div>
      <div className="pb-7 min-w-0">
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 tabular-nums">{period}</span>
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5 leading-snug">{title}</h4>
        <p className="text-sm text-accent-600 dark:text-accent-400">{subtitle}</p>
        {meta && <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{meta}</p>}
        {description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

const socialLinks = [
  { label: "Google Scholar", href: personal.social.googleScholar, icon: BookOpen },
  { label: "GitHub", href: personal.social.github, icon: Github },
  { label: "LinkedIn", href: personal.social.linkedin, icon: Linkedin },
].filter((s) => s.href);

export default function Hero() {
  return (
    <section>
      {/* ── Opening ── */}
      <div className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-100 dark:bg-accent-900/10 blur-3xl opacity-50" />
          <div className="absolute bottom-1/4 left-1/6 w-[350px] h-[350px] rounded-full bg-slate-100 dark:bg-slate-800/15 blur-3xl opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto w-full py-24">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 dark:bg-accent-950/50 border border-accent-200/70 dark:border-accent-800/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-accent-700 dark:text-accent-300 text-xs font-medium">
                PhD Candidate · Cornell University · Expected 2026
              </span>
            </motion.div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.07]">
                {personal.name}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-light text-slate-500 dark:text-slate-400">
                Plant Breeding &amp; Genetics ·{" "}
                <span className="text-slate-700 dark:text-slate-300 font-normal">Genomics &amp; Phenomics</span>
              </p>
            </div>

            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed text-balance">
              {personal.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 active:scale-[0.97] text-white text-sm font-medium transition-all duration-200 shadow-md shadow-accent-600/20 hover:shadow-lg hover:shadow-accent-600/25"
              >
                <Microscope size={16} />
                View Research
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/40 active:scale-[0.97] transition-all duration-200"
              >
                <Mail size={16} />
                Email
              </a>

              {socialLinks.length > 0 && (
                <div className="flex items-center gap-1 ml-1">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bio + Interests + Skills ── */}
      <div className="border-t border-slate-100 dark:border-slate-800/60 py-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1} className="space-y-5">
            {personal.bio.map((para, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {para}
              </p>
            ))}
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
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
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
                Skills
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
          </div>
        </div>
      </div>

      {/* ── Education + Experience ── */}
      <div className="bg-slate-50 dark:bg-slate-900/40 py-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-7 h-7 rounded-lg bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center">
                <GraduationCap size={14} className="text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                Education
              </h3>
            </div>
            {education.map((edu, i) => (
              <TimelineItem
                key={i}
                period={edu.period}
                title={edu.degree}
                subtitle={edu.institution}
                meta={edu.location}
                description={edu.thesis ? `"${edu.thesis}"` : undefined}
              />
            ))}
          </AnimatedSection>

          <div className="space-y-14">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
                  <Award size={14} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  Honours &amp; Scholarships
                </h3>
              </div>
              <ul className="space-y-2">
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
