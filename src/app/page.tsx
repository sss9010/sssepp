import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import CVSection from "@/components/CVSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Research />
      <Publications />
      <CVSection />
    </main>
  );
}
