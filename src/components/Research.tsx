import { researchProjects } from "@/data/content";
import { ExternalLink } from "lucide-react";

const statusLabel: Record<string, string> = {
  published: "Published",
  preprint: "Preprint",
  submitted: "In Review",
  ongoing: "Ongoing",
};

export default function Research() {
  return (
    <section className="max-w-prose mx-auto px-4 py-16">
      <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Projects</h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-12">
        Cereal genomics, field phenotyping, and computational breeding.
      </p>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {researchProjects.map((project) => (
          <div key={project.title} className="py-8 first:pt-0">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-sm font-medium text-slate-900 dark:text-white leading-snug">
                {project.title}
              </h2>
              <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">
                {statusLabel[project.status] ?? "Ongoing"}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
              {project.description}
            </p>

            {(project.methods ?? []).length > 0 && (
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-3">
                {(project.methods ?? []).join(" · ")}
              </p>
            )}

            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs text-accent-600 dark:text-accent-400 hover:underline"
                  >
                    {link.label}
                    <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
