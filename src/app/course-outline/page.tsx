import CourseCard from "../components/CourseCard";

const courseOutline = [
  {
    level: "Primary",
    classes: [
      {
        class: "4",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Bangladesh and Global Studies",
          "Primary Science",
        ],
      },
      {
        class: "5",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Bangladesh and Global Studies",
          "Primary Science",
        ],
      },
    ],
  },
  {
    level: "Secondary",
    classes: [
      {
        class: "6",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Science",
          "Bangladesh and Global Studies",
          "Religion",
          "ICT",
        ],
      },
      {
        class: "7",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Science",
          "Bangladesh and Global Studies",
          "Religion",
          "ICT",
        ],
      },
      {
        class: "8",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Science",
          "Bangladesh and Global Studies",
          "Religion",
          "ICT",
        ],
      },
      {
        class: "9",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology",
          "Bangladesh and Global Studies",
          "Religion",
          "ICT",
        ],
      },
      {
        class: "10",
        subjects: [
          "Bangla",
          "English",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology",
          "Bangladesh and Global Studies",
          "Religion",
          "ICT",
        ],
      },
    ],
  },
  {
    level: "Higher Secondary",
    classes: [
      {
        class: "11",
        subjects: [
          "Bangla",
          "English",
          "ICT",
          "Physics",
          "Chemistry",
          "Biology",
          "Higher Mathematics",
        ],
      },
      {
        class: "12",
        subjects: [
          "Bangla",
          "English",
          "ICT",
          "Physics",
          "Chemistry",
          "Biology",
          "Higher Mathematics",
        ],
      },
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Course Outline
        </h1>

        {courseOutline.map((level, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              {level.level} Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {level.classes.map((course) => (
                <CourseCard
                  key={course.class}
                  class={course.class}
                  subjects={course.subjects}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
