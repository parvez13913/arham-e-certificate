import Link from "next/link";

export default function Hero() {
  return (
    <main>
      <section className="bg-[url('/background.jpg')] bg-cover bg-center h-screen w-full relative">
        <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
        {/* Overlay for better text visibility */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Arham Memorial Coaching
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8">
            Empowering minds, shaping futures
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
            Founded by Mahabub Labu, we are dedicated to providing exceptional
            education and guidance to help you achieve your goals.
          </p>
          <Link
            href="/course-outline"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
