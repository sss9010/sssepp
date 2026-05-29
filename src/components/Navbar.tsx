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
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-prose mx-auto px-4 flex items-center justify-between py-3">
        <Link
          href="/"
          className="font-normal text-slate-900 dark:text-white hover:opacity-60 transition-opacity"
        >
          {personal.shortName}
        </Link>

        <div className="flex items-center gap-0.5">
          <ul className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-2.5 py-1 transition-colors hover:text-slate-900 dark:hover:text-white ${
                    pathname === link.href ? "text-slate-900 dark:text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
