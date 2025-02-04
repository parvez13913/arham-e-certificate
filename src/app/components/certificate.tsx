"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import generatePDF from "react-to-pdf";

function Certificate() {
  const [name, setName] = useState("");
  const targetRef = useRef(null);

  const handleClear = () => {
    setName("");
  };

  return (
    <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-500">
      <h1 className="text-4xl text-center font-semibold my-4">
        Generate Certificate
      </h1>
      <div className="space-x-4 mx-auto w-fit m-4">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Clear
        </button>
        {/* Download PDF Button */}

        <button
          onClick={() =>
            generatePDF(targetRef, { filename: "certificate.pdf" })
          }
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Download PDF
        </button>
      </div>

      {/* Certificate Section to be downloaded */}
      <div
        ref={targetRef}
        className="flex items-center justify-center relative p-4"
      >
        <Image
          src="/certificate.png"
          alt="Certificate image"
          width={800}
          height={800}
          className="object-cover"
        />
        <h1 className="absolute bottom-80 text-4xl dancing-font font-bold">
          {name}
        </h1>
      </div>
    </div>
  );
}

export default Certificate;
