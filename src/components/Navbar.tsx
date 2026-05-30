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

      {/* Bubbly foam edge — light mode only */}
      <div className="dark:hidden" aria-hidden>
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 block"
        >
          {/* white foam fills everything */}
          <rect width="1200" height="50" fill="white" />
          {/* yellow beer reclaims the bottom strip */}
          <rect y="28" width="1200" height="22" fill="#FAE96F" />
          {/* white circles punch back through the yellow — the bubbles */}
          <circle cx="14"   cy="28" r="14" fill="white" />
          <circle cx="40"   cy="28" r="17" fill="white" />
          <circle cx="70"   cy="28" r="13" fill="white" />
          <circle cx="98"   cy="28" r="18" fill="white" />
          <circle cx="130"  cy="28" r="14" fill="white" />
          <circle cx="158"  cy="28" r="17" fill="white" />
          <circle cx="190"  cy="28" r="20" fill="white" />
          <circle cx="224"  cy="28" r="13" fill="white" />
          <circle cx="252"  cy="28" r="16" fill="white" />
          <circle cx="280"  cy="28" r="14" fill="white" />
          <circle cx="310"  cy="28" r="19" fill="white" />
          <circle cx="344"  cy="28" r="12" fill="white" />
          <circle cx="370"  cy="28" r="17" fill="white" />
          <circle cx="402"  cy="28" r="15" fill="white" />
          <circle cx="432"  cy="28" r="18" fill="white" />
          <circle cx="464"  cy="28" r="13" fill="white" />
          <circle cx="492"  cy="28" r="20" fill="white" />
          <circle cx="528"  cy="28" r="14" fill="white" />
          <circle cx="558"  cy="28" r="16" fill="white" />
          <circle cx="588"  cy="28" r="13" fill="white" />
          <circle cx="618"  cy="28" r="18" fill="white" />
          <circle cx="650"  cy="28" r="15" fill="white" />
          <circle cx="680"  cy="28" r="17" fill="white" />
          <circle cx="712"  cy="28" r="20" fill="white" />
          <circle cx="748"  cy="28" r="12" fill="white" />
          <circle cx="774"  cy="28" r="16" fill="white" />
          <circle cx="804"  cy="28" r="14" fill="white" />
          <circle cx="834"  cy="28" r="19" fill="white" />
          <circle cx="868"  cy="28" r="13" fill="white" />
          <circle cx="896"  cy="28" r="17" fill="white" />
          <circle cx="928"  cy="28" r="15" fill="white" />
          <circle cx="960"  cy="28" r="20" fill="white" />
          <circle cx="996"  cy="28" r="12" fill="white" />
          <circle cx="1022" cy="28" r="16" fill="white" />
          <circle cx="1052" cy="28" r="14" fill="white" />
          <circle cx="1082" cy="28" r="19" fill="white" />
          <circle cx="1116" cy="28" r="13" fill="white" />
          <circle cx="1144" cy="28" r="17" fill="white" />
          <circle cx="1176" cy="28" r="15" fill="white" />
          <circle cx="1200" cy="28" r="16" fill="white" />
        </svg>
      </div>
    </header>
  );
}
