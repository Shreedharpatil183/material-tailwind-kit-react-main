// CourseList.jsx
import React, { useEffect, useState } from "react";
import { Button, Typography, Card } from "@material-tailwind/react";
import axios from "axios";

export function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/courses");
    setCourses(res.data);
  };

  const deleteCourse = async (id) => {
    await axios.delete(`http://localhost:5000/api/courses/${id}`);
    fetchCourses();
  };

  return (
    <div className="p-8">
      <Typography variant="h4" className="mb-6">
        Courses
      </Typography>
      <div className="grid gap-6">
        {courses.map((course) => (
          <Card key={course._id} className="p-4 bg-gray-800 text-white">
            <Typography variant="h5">{course.title}</Typography>
            <Typography className="text-sm text-gray-300 mb-2">
              {course.description}
            </Typography>
            <div className="flex gap-4">
              <Button color="red" onClick={() => deleteCourse(course._id)}>
                Delete
              </Button>
              {/* Edit button can be linked to CourseForm with course data */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
