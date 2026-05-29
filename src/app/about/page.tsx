import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Siim Samuel Sepp",
  description: "Research interests, skills, education, and background of Siim Samuel Sepp.",
};

export default function AboutPage() {
  return <About />;
}
