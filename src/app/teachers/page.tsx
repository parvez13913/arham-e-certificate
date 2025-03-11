import TeacherCard from "../components/TeacherCard";

const teachers = [
  {
    name: "Mahabub LaBu",
    role: "Founder & Director",
    subjects: ["English"],
    image: "/founder.jpg",
    isFounder: true,
  },
  {
    name: "Md Palash Khan",
    role: "Senior Teacher",
    subjects: ["English"],
    image: "/polash-1.png",
  },
  {
    name: "Abir Hasan",
    role: "Senior Teacher",
    subjects: ["Higher Mathematics", "Physics"],
    image: "/abir.jpg",
  },
  {
    name: "Tarek Rahman",
    role: "Social Science Teacher",
    subjects: ["Social Science", "Bangla"],
    image: "/tarek.jpg",
  },
  {
    name: "Tasmeri Islam Tripti",
    role: "Commerce Tutor",
    subjects: ["Accounting", "Business Law"],
    image: "/tarek.jpg",
  },
  {
    name: "Parvez Rahman",
    role: "Mathematics Guru",
    subjects: ["Mathematics", "ICT", "Chemistry"],
    image: "/parvez-rahman.png",
  },
  {
    name: "Utsho Hossain",
    role: "Science Specialist",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/tarek.jpg",
  },
  {
    name: "Mansur Hossain",
    role: "Science Specialist",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/tarek.jpg",
  },
  {
    name: "Sajid",
    role: "Science Specialist",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/tarek.jpg",
  },
  {
    name: "Md Asad Ullah",
    role: "Science",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/tarek.jpg",
  },
  {
    name: "Md Asad Ullah",
    role: "Science Specialist",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/tarek.jpg",
  },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Teachers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              role={teacher.role}
              subjects={teacher.subjects}
              image={teacher.image}
              isFounder={teacher.isFounder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
