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
    <header className="bg-white dark:bg-slate-900 dark:border-b dark:border-slate-800">
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

      {/* Foam wave — light mode only */}
      <div className="dark:hidden overflow-hidden h-8">
        <svg
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          <path
            d="M0,16 C50,28 100,4 150,16 C200,28 250,4 300,16 C350,28 400,4 450,16 C500,28 550,4 600,16 C650,28 700,4 750,16 C800,28 850,4 900,16 C950,28 1000,4 1050,16 C1100,28 1150,4 1200,16 L1200,32 L0,32 Z"
            fill="#FAE96F"
          />
        </svg>
      </div>
    </header>
  );
}
