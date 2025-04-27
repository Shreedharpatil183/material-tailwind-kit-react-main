import React from "react";
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
  Chip,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "@/widgets/cards/CourseCard";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const featuresData = [
  {
    image: "/images/section-a.jpg",
    title: "CCAT Section A",
    description:
      "The CDAC CCAT Section A Covers General Aptitude and Computer Fundamentals ( Notes + Mock Test + Quiz + Live )",
    price: "₹799",
    oldPrice: "₹999",
    link: "1",
  },
  {
    image: "/images/section-b.jpg",
    title: "CCAT Section B",
    description:
      "The CDAC CCAT Section B focuses on C Programming, C++, Data Structures, OS & Networking, Big data & AI Basics.",
    price: "₹999",
    oldPrice: "₹1499",
    link: "2",
  },
  {
    image: "/images/section-c.jpg",
    title: "CCAT Section C",
    description:
      "CDAC CCAT Section C covers Computer Architecture, Digital Electronics, and Microprocessors.",
    price: "₹599",
    oldPrice: "₹799",
    link: "3",
  }
];


const courseData = [
  {
    title: "CDAC - CCAT",
    quizzes: 14,
    mockTests: 3,
    courses: 3,
    image: "/img/cdac-logo.png",
  },
  {
    title: "GATE",
    quizzes: 20,
    mockTests: 5,
    courses: 4,
    image: "/img/gate-logo.png",
  },
  {
    title: "CAT",
    quizzes: 10,
    mockTests: 2,
    courses: 2,
    image: "/img/cat-logo.png",
  },
  {
    title: "GRE",
    quizzes: 18,
    mockTests: 4,
    courses: 3,
    image: "/img/gre-logo.png",
  },
];


const testimonials = [
  {
    name: "Dhone Arjun",
    section: "CCAT Section B",
    text: "Good one , mock test",
    rating: 5,
  },
  {
    name: "Pradeep Singh",
    section: "CCAT Section B",
    text: "Best place to prepare for C-CAT",
    rating: 5,
  },
  {
    name: "Shreedhar Patil",
    section: "CCAT Section B",
    text: "Best place to prepare for C-CAT shreedhar pt123",
    rating: 5,
  },
  // Add more testimonials if needed
];

export function Home() {

  const navigate = useNavigate();

  const handleViewDetails = (course) => {
  navigate("/course-details", { state: { course } });
  };


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Learning Platform to crack various Entrance Exam
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                🎯 Focused preparation platform for excelling in entrance exams and achieving your academic goals.
              </Typography>
            </div>
          </div>
        </div>
      </div>

  
      {/* Features Section */}
          <section className="-mt-32 bg-white px-4 pb-20 pt-4">
            <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* {featuresData.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))} */}
                {featuresData.map((item, index) => (
              <FeatureCard
                key={index}
                {...item}
                onViewDetails={() => handleViewDetails({
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  oldPrice: item.oldPrice,
                  questions: [
                  { title: "Product-Based Companies", sections: 33 },
                  { title: "Service-Based Companies", sections: 13 },
                  { title: "Data Analytics Companies", sections: 11 },
                  { title: "BFSI (banking, financial services, and insurance) & BIG4", sections: 10 },
                  { title: "Big Firms", sections: 12 },
                  { title: "Best Tips & Links", sections: 2 }
                ]

                })}
              />
            ))}
        </div>


          {/* Testimonials Section */}
          <div className="mt-32 text-center">
            <Typography variant="h3" color="blue-gray" className="mb-4 font-bold">
              What My Learners Say
            </Typography>
            <Slider {...sliderSettings} className="mt-10">
              {testimonials.map((item, index) => (
                <div key={index} className="px-4">
                  <Card className="shadow-lg p-6 border rounded-lg h-full">
                    <Typography variant="h6" className="mb-1">
                      {item.name}
                    </Typography>
                    <Typography variant="small" className="text-gray-500 mb-2">
                      {item.section}
                    </Typography>
                    <Typography className="mb-3 text-gray-700">
                      {item.text}
                    </Typography>
                    <Typography className="text-yellow-500">
                      {'★'.repeat(item.rating)}
                    </Typography>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>



      {/* Courses Section */}
      <section className="mt-20 px-4">
        <div className="container mx-auto text-center">
          <Typography variant="h3" color="blue-gray" className="mb-6 font-bold">
            Exam Preparation
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {courseData.map((course, index) => (
              <div key={index} className="p-2">
                <CourseCard
                  title={course.title}
                  quizzes={course.quizzes}
                  mockTests={course.mockTests}
                  courses={course.courses}
                  image={course.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

       

      {/* Team Section
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}


      <section className="mt-20 px-4">
      <div className="bg-gradient-to-br from-blue-400 to-indigo-400 p-1 rounded-xl shadow-lg">
        <div className="bg-white rounded-lg p-6 md:p-10">
          <Chip
            value="Notification"
            className="mb-4 px-3 py-1 bg-blue-100 text-blue-700 font-semibold text-sm w-fit"
          />

          <Typography variant="h4" className="mb-2 font-bold">
            Get Latest Update on LinkedIn / Youtube
          </Typography>

          <Typography className="mb-6 text-gray-600">
            Join Our Youtube / LinkedIn to get Job Reference, Study material, technology updates and CDAC Notifications
          </Typography>

          <div className="flex flex-wrap gap-4">
            <Button
              color="blue"
              className="flex items-center gap-2"
              variant="filled"
            >
              <FaLinkedin /> LinkedIn
            </Button>
            <Button
              color="deep-purple"
              className="flex items-center gap-2"
              variant="filled"
            >
              <FaInstagram /> Instagram
            </Button>
            <Button
              color="red"
              className="flex items-center gap-2"
              variant="filled"
            >
              <FaYoutube /> Youtube
            </Button>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
        
          <PageTitle section="Contact Us" heading="Want to Learn from us ?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
