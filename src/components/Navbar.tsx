"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { personal } from "@/data/content";

const navLinks = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/publications", label: "publications" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-100 dark:border-slate-800/60">
      <nav className="max-w-2xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-sm font-medium text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
        >
          {personal.shortName}
        </Link>

        <div className="flex items-center gap-1">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
