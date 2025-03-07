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
    image: "/tripti.jpeg",
  },
  {
    name: "Parvez Rahman",
    role: "Mathematics Guru",
    subjects: ["Mathematics", "ICT"],
    image: "/parvez-rahman.png",
  },
  {
    name: "Mansur Hossain",
    role: "Science Specialist",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/mansur.jpg",
  },
  {
    name: "Sabina Yasmin",
    role: "Science Specialist",
    subjects: ["Bangladesh and Global Studies", "Religion"],
    image: "/images/sabina-yasmin.jpg",
  },
  {
    name: "Mohammad Hossain",
    role: "Science Teacher",
    subjects: ["Physics", "ICT"],
    image: "/images/mohammad-hossain.jpg",
  },
  {
    name: "Nasreen Akter",
    role: "Language Specialist",
    subjects: ["Bangla", "English"],
    image: "/images/nasreen-akter.jpg",
  },
  {
    name: "Kamal Uddin",
    role: "Mathematics Teacher",
    subjects: ["Mathematics", "Higher Mathematics"],
    image: "/images/kamal-uddin.jpg",
  },
  {
    name: "Tahmina Begum",
    role: "Science Educator",
    subjects: ["Biology", "Chemistry"],
    image: "/images/tahmina-begum.jpg",
  },
  {
    name: "Anisur Rahman",
    role: "ICT Specialist",
    subjects: ["ICT", "Mathematics"],
    image: "/images/anisur-rahman.jpg",
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
