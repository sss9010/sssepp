import { Mail, Github, Linkedin, BookOpen } from "lucide-react";
import { personal } from "@/data/content";

const socials = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
    show: true,
  },
  {
    label: "Google Scholar",
    href: personal.social.googleScholar || "#",
    icon: BookOpen,
    show: !!personal.social.googleScholar,
  },
  {
    label: "GitHub",
    href: personal.social.github || "#",
    icon: Github,
    show: !!personal.social.github,
  },
  {
    label: "LinkedIn",
    href: personal.social.linkedin || "#",
    icon: Linkedin,
    show: !!personal.social.linkedin,
  },
].filter((s) => s.show);

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">{personal.name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
            {personal.title} · {personal.institution}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-600 text-center sm:text-right">
          © {new Date().getFullYear()} {personal.shortName}
        </p>
      </div>
    </footer>
  );
}
