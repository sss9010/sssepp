import { Mail, Microscope, BookOpen, Github, Linkedin, Download } from "lucide-react";
import { personal } from "@/data/content";

const socialLinks = [
  { label: "Google Scholar", href: personal.social.googleScholar, icon: BookOpen },
  { label: "GitHub", href: personal.social.github, icon: Github },
  { label: "LinkedIn", href: personal.social.linkedin, icon: Linkedin },
].filter((s) => s.href);

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
        {personal.name}
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
        {personal.title} · {personal.institution}, {personal.location}
      </p>

      <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
        {personal.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-balance">
        {personal.tagline}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-700 active:scale-[0.97] text-white text-sm font-medium transition-all"
        >
          <Microscope size={15} />
          Projects
        </a>
        <a
          href={personal.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
        >
          <Download size={15} />
          CV
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
        >
          <Mail size={15} />
          Email
        </a>

        {socialLinks.length > 0 && (
          <div className="flex items-center gap-0.5 ml-1">
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
    </main>
  );
}
