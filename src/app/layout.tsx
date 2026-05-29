import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Siim Samuel Sepp | Plant Breeding & Genetics",
  description:
    "PhD Candidate in Plant Breeding and Genetics at Cornell University. Research in genomics, phenomics, GWAS, and barley breeding for malting quality and climate resilience.",
  keywords: [
    "Siim Sepp",
    "plant breeding",
    "genomics",
    "barley",
    "GWAS",
    "phenomics",
    "Cornell University",
    "malting barley",
    "genomic prediction",
  ],
  authors: [{ name: "Siim Samuel Sepp", url: "mailto:sss322@cornell.edu" }],
  openGraph: {
    title: "Siim Samuel Sepp | Plant Breeding & Genetics",
    description:
      "PhD Candidate in Plant Breeding and Genetics at Cornell University. Research in genomics, phenomics, and barley breeding.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Siim Samuel Sepp | Plant Breeding & Genetics",
    description: "PhD Candidate at Cornell University. Genomics, phenomics, and barley breeding.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} font-sans bg-[#FAE96F] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <ConditionalFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
