import Image from "next/image";

interface TeacherCardProps {
  name: string;
  role: string;
  subjects: string[];
  image: string;
  isFounder?: boolean;
}

export default function TeacherCard({
  name,
  role,
  subjects,
  image,
  isFounder = false,
}: TeacherCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        isFounder ? "col-span-full md:col-span-2" : ""
      }`}
    >
      <div
        className={`flex flex-col md:flex-row ${
          isFounder ? "md:items-center" : ""
        }`}
      >
        <div className={`${isFounder ? "md:w-1/3" : "w-full"}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <div className={`p-6 ${isFounder ? "md:w-2/3" : "w-full"}`}>
          <h3
            className={`font-bold ${isFounder ? "text-2xl" : "text-xl"} mb-2`}
          >
            {name}
          </h3>
          <p className={`text-gray-600 mb-4 ${isFounder ? "text-lg" : ""}`}>
            {role}
          </p>
          <h4 className="font-semibold mb-2">Subjects:</h4>
          <ul className="list-disc list-inside">
            {subjects.map((subject, index) => (
              <li key={index} className="text-gray-700">
                {subject}
              </li>
            ))}
          </ul>
          {isFounder && (
            <p className="mt-4 text-gray-700">
              As the founder and director of Arham Memorial Coaching, Mr. Labu
              brings years of experience and a passion for education to our
              institution.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
