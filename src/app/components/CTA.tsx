"use client";

import Link from "next/link";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server or email service
    console.log("Submitted email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Educational Certificates?
          </h2>
          <p className="text-xl mb-8">
            Join our community of educators and start creating professional
            certificates today.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-full flex-grow max-w-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Get Started
            </button>
          </form>
          <div className="mt-8">
            <Link href="/create" className="text-white hover:underline">
              Or start creating your educational certificates now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
