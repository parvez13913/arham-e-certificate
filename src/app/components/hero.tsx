import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Create Professional Certificates in Minutes
          </h1>
          <p className="text-xl mb-8">
            Our easy-to-use certificate generator helps you design and create
            beautiful certificates for any occasion.
          </p>
          <Link
            href="/create"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
