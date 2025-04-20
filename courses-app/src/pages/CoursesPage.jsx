import { Footer } from "@/widgets/layout";
import { Input } from "@material-tailwind/react";
import { Search } from "lucide-react";

const courses = [
  {
    title: "CCAT Section A",
    discount: 20,
    image: "/images/section-a.png",
  },
  {
    title: "CCAT Section B",
    discount: 33,
    image: "/images/section-b.png",
  },
  {
    title: "CCAT Section C",
    discount: 25,
    image: "/images/section-c.png",
  },
];

export default function CoursesPage() {
    return (
    <>
    <section className="w-full py-16 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-3xl font-extrabold">Courses</h2>
          <span className="bg-purple-800 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
            📣 {courses.length} Courses
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8 max-w-4xl">
          Excel in your entrance exams with our diverse range of expert-led courses. Discover comprehensive content, practice tests, and personalized study plans designed to boost your performance. Start your journey to success today.
        </p>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-sm">
          <Input
            placeholder="Search Your Course.."
            className="rounded-full px-5 py-3 pr-12 bg-slate-800 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 rounded-2xl shadow-lg p-4 relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                -{course.discount}% Off
              </div>

              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg mb-4"
              />

              {/* Course Title */}
              <h3 className="text-lg font-bold">{course.title}</h3>
            </div>
          ))}
        </div>

        {/* Packages Pricing Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">Packages Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Combo A+B+C */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between gap-6">
              {/* Left */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Course Combo Section ( A + B + C )</h3>
                <p className="text-3xl font-extrabold mb-4">₹1199</p>
                <button className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition">
                  Enroll Now →
                </button>
                <p className="mt-2 text-red-600 font-semibold text-sm">
                  Contains - Notes + Mock Test + Quiz ( All In Single Pack )
                </p>
              </div>

              {/* Right */}
              <div className="bg-gray-100 rounded-xl p-4 relative w-full md:w-1/2">
                <span className="absolute -top-3 right-3 bg-indigo-800 text-white px-3 py-1 text-xs rounded-md font-bold">
                  12 MONTHS
                </span>
                <h4 className="font-semibold mb-2">Course Includes</h4>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>✔️ CCAT Section C</li>
                  <li>✔️ CCAT Section A</li>
                  <li>✔️ CCAT Section B</li>
                </ul>
              </div>
            </div>

            {/* Combo A+B */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between gap-6">
              {/* Left */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Course Combo Section ( A + B )</h3>
                <p className="text-3xl font-extrabold mb-4">₹999</p>
                <button className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition">
                  Enroll Now →
                </button>
                <p className="mt-2 text-red-600 font-semibold text-sm">
                  Contains - Notes + Mock Test + Quiz ( All In Single Pack )
                </p>
              </div>

              {/* Right */}
              <div className="bg-gray-100 rounded-xl p-4 relative w-full md:w-1/2">
                <span className="absolute -top-3 right-3 bg-indigo-800 text-white px-3 py-1 text-xs rounded-md font-bold">
                  12 MONTHS
                </span>
                <h4 className="font-semibold mb-2">Course Includes</h4>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>✔️ CCAT Section B</li>
                  <li>✔️ CCAT Section A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-white">
        <Footer />
    </div>
</>
  );
}
