"use client";
import Image from "next/image";
import { useState } from "react";

function Certificate() {
  const [name, setName] = useState("");
  const handleGenerate = () => {
    setName("");
  };
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center my-4">Generate your Certificate</h1>
      <div className="space-x-4 mx-auto w-fit m-4">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGenerate}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Clear
        </button>
      </div>
      <div className="flex items-center justify-center relative">
        <Image
          src="/certificate.png"
          alt="Certificate image"
          width={800}
          height={800}
          className="object-cover"
        />
        <h1 className="absolute bottom-72 text-4xl">{name}</h1>
      </div>
    </div>
  );
}

export default Certificate;
