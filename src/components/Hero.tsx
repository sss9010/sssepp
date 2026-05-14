"use client";

import { motion } from "framer-motion";
import { Mail, Download, Microscope, ArrowDown } from "lucide-react";
import { personal } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
      {/* Background blobs */}
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
          {/* Status badge */}
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

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 active:scale-[0.97] text-white text-sm font-medium transition-all duration-200 shadow-md shadow-accent-600/20 hover:shadow-lg hover:shadow-accent-600/25"
            >
              <Microscope size={16} />
              View Research
            </a>
            <a
              href={personal.cvPath}
              download="cv_sepp.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/40 active:scale-[0.97] transition-all duration-200"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/40 active:scale-[0.97] transition-all duration-200"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
          aria-hidden
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
