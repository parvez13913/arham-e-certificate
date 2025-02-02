import CTA from "./components/CTA";
import Features from "./components/features";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
