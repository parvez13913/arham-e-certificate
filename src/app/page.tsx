import Certificate from "./components/certificate";
import CTA from "./components/CTA";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <Certificate />
      <CTA />
    </main>
  );
}
