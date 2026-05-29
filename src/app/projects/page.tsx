import type { Metadata } from "next";
import Research from "@/components/Research";

export const metadata: Metadata = {
  title: "Projects | Siim Samuel Sepp",
  description: "Research projects in genomics, phenomics, and barley breeding by Siim Samuel Sepp.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Research />
    </main>
  );
}
