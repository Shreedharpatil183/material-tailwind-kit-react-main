import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  VideoCameraIcon,
  ClipboardDocumentCheckIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export default function CourseCard({
  title,
  quizzes,
  mockTests,
  courses,
  image,
  buttons = [],
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1">
        <Typography variant="h4" className="mb-4">
          {title}
        </Typography>
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-blue-gray-600">
            <VideoCameraIcon className="h-5 w-5" />
            <span>Quizzes: {quizzes}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-gray-600">
            <ClipboardDocumentCheckIcon className="h-5 w-5" />
            <span>Mock Tests: {mockTests}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-gray-600">
            <BookOpenIcon className="h-5 w-5" />
            <span>Courses: {courses}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {buttons.map(({ label, href }, idx) => (
            <Button
              key={idx}
              size="sm"
              className="bg-blue-900 text-white rounded-lg px-4"
              onClick={() => window.location.href = href}
            >
              {label} →
            </Button>
          ))}
        </div>
      </div>
      <div className="w-48 h-48 flex-shrink-0">
        <img
          src={image}
          alt="course"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
