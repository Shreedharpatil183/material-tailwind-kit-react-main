import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Typography, Button } from "@material-tailwind/react";

export function CourseDetails() {
  const location = useLocation();
  const course = location.state?.course; // Received course data

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Typography variant="h4" color="red">
          No Course Data Found!
        </Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-28 px-4">
      <div className="container mx-auto">
        <Card className="bg-gray-800 p-8 shadow-lg rounded-xl">
          <Typography variant="h3" color="white" className="mb-4 font-bold">
            {course.title}
          </Typography>
          <Typography className="mb-4 text-gray-300">
            {course.description}
          </Typography>

          <div className="flex items-center gap-4 mb-6">
            <Typography variant="h5" color="red">
              {course.price}
            </Typography>
            <Typography variant="small" className="line-through text-gray-400">
              {course.oldPrice}
            </Typography>
          </div>

          <Button size="lg" color="green" className="mb-10">
            Enroll Now
          </Button>

          <Typography variant="h5" color="white" className="mb-4 font-bold">
            Syllabus / Question Topics
          </Typography>

            <div className="space-y-4 mt-6">
  {course.questions?.map((q, index) => (
    <div
      key={index}
      className="flex items-center justify-between border-b border-gray-700 pb-4"
    >
      <div>
        <Typography variant="h6" color="white" className="font-semibold">
          {q.title}
        </Typography>
        <Typography variant="small" className="text-gray-400">
          {q.sections} Sections
        </Typography>
      </div>
      <Button
        size="sm"
        className="bg-gradient-to-r from-indigo-400 to-indigo-700 text-white rounded-full"
      >
        View Question
      </Button>
    </div>
  ))}
</div>

        </Card>
      </div>
    </div>
  );
}

export default CourseDetails;
