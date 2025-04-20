import { Footer } from "@/widgets/layout";
import { Button } from "@material-tailwind/react";
import { CalendarDays, GraduationCap } from "lucide-react";

const interviewCourses = [
  {
    title: "Data Engineering Interviews Experiences",
    price: 499,
    originalPrice: 999,
    validity: "6 Months",
    image: "/images/data-engineering-interview.png",
  },
  {
    title: "SQL Interview Questions and Answers for Experienced or Freshers",
    price: 499,
    originalPrice: 999,
    validity: "12 Months",
    image: "/images/sql-interview.png",
  },
  {
    title: "Java Interview Mastery for Developers",
    price: 499,
    originalPrice: 999,
    validity: "12 Months",
    image: "/images/java-interview.png",
  },
];

export default function InterviewPrepPage() {
    return (
    <>
     <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-2">Nail the Interview</h2>
          <span className="inline-block bg-indigo-600 shadow px-4 py-1 rounded-full text-white font-semibold text-sm">
            🛠 3 Prep Courses
          </span>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            Prepare to ace your next job interview with our comprehensive
            courses. Learn expert strategies, master common questions, and build
            confidence with mock interviews and personalized feedback. Equip
            yourself with the skills to impress employers and secure your dream
            job.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {interviewCourses.map((course, index) => (
            <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col text-gray-900"
                >
                <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-md w-full h-40 object-cover mb-4"
                />
                <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                    <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 text-gray-700" /> Programming
                    </span>
                    <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4 text-gray-700" /> Validity: {course.validity}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {course.title}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                    <p className="text-xl font-bold text-gray-900">
                    ₹{course.price}
                    </p>
                    <p className="text-sm line-through text-gray-400">
                    ₹{course.originalPrice}
                    </p>
                </div>
                <Button
                    color="indigo"
                    className="mt-auto w-full rounded-md py-2 font-medium"
                >
                    View Details →
                </Button>
            </div>

          ))}
        </div>
      </div>
    </section>
    <div className="bg-white">
        <Footer />
    </div>
 </>
  );
}
