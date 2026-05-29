import { landingKeywords } from "@/data/content";

export default function Home() {
  return (
    <main className="max-w-prose mx-auto px-4 py-20">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {landingKeywords.join(" · ")}
      </p>
    </main>
  );
}
