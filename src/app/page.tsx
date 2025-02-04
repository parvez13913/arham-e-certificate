import Hero from "./components/hero";
import CoursesPage from "./course-outline/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <CoursesPage />
    </main>
  );
}
