import type { Metadata } from "next";
import Publications from "@/components/Publications";

export const metadata: Metadata = {
  title: "Publications | Siim Samuel Sepp",
  description: "Peer-reviewed articles and preprints by Siim Samuel Sepp in plant genomics and breeding.",
};

export default function PublicationsPage() {
  return (
    <main>
      <Publications />
    </main>
  );
}
