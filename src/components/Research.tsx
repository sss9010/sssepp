import AnimatedSection from "./AnimatedSection";
import { researchProjects } from "@/data/content";
import { ExternalLink, FlaskConical, Leaf, Satellite, Dna } from "lucide-react";

const statusLabel: Record<string, { text: string; class: string }> = {
  published: { text: "Published", class: "bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-300 border-accent-100 dark:border-accent-800/50" },
  preprint:  { text: "Preprint",  class: "bg-amber-50  dark:bg-amber-950/30  text-amber-700  dark:text-amber-300  border-amber-100  dark:border-amber-800/40" },
  submitted: { text: "In Review", class: "bg-blue-50   dark:bg-blue-950/30   text-blue-700   dark:text-blue-300   border-blue-100   dark:border-blue-800/40" },
  ongoing:   { text: "Ongoing",   class: "bg-slate-100 dark:bg-slate-800     text-slate-600  dark:text-slate-400  border-slate-200  dark:border-slate-700" },
};

const icons = [FlaskConical, Dna, Leaf, Satellite];

export default function Research() {
  return (
    <section id="research" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="section-label mb-3">Research</p>
          <h2 className="section-heading mb-4">Projects &amp; Focus Areas</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-16">
            My work spans cereal genomics, field phenotyping, and computational breeding, with a focus on
            practical variety improvement for Northeast U.S. agriculture.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {researchProjects.map((project, i) => {
            const Icon = icons[i % icons.length];
            const status = statusLabel[project.status] ?? statusLabel.ongoing;
            return (
              <AnimatedSection key={project.title} delay={0.1 + i * 0.08}>
                <article className="group h-full flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-accent-200 dark:hover:border-accent-800/60 hover:shadow-lg hover:shadow-slate-100 dark:hover:shadow-slate-900/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-950/50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 dark:group-hover:bg-accent-900/40 transition-colors">
                      <Icon size={18} className="text-accent-600 dark:text-accent-400" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${status.class}`}>
                      {status.text}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.methods.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex gap-3 mt-auto">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                        >
                          <ExternalLink size={12} />
                          {link.label}
                        </a>
                      ))}
                    </div>
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
