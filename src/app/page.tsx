import Hero from "./components/hero";
import CoursesPage from "./course-outline/page";
import TeachersPage from "./teachers/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <CoursesPage />
      <TeachersPage />
    </main>
  );
}
