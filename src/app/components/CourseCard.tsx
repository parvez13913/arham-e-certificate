import Link from "next/link";

interface CourseCardProps {
  class: string;
  subjects: string[];
}

export default function CourseCard({
  class: className,
  subjects,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white py-4 px-6">
        <h3 className="text-xl font-bold">Class {className}</h3>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2">Subjects:</h4>
        <ul className="list-disc list-inside">
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
        <Link
          href={`/courses/class-${className}`}
          className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
