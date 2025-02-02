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
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your First Certificate?
          </h2>
          <p className="text-xl mb-8">
            Sign up for our newsletter to receive tips, tricks, and exclusive
            offers.
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
              className="px-4 py-3 rounded-full flex-grow max-w-md"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-8">
            <Link href="/create" className="text-blue-600 hover:underline">
              Or start creating your certificate now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
