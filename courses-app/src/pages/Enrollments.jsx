import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/enrollments");
      setEnrollments(response.data);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <Typography variant="h4" color="blue-gray" className="mb-6">
        Enrollments
      </Typography>
      <Card className="p-6 overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-gray-100">
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2">Course Title</th>
              <th className="px-4 py-2">Enrolled On</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.length > 0 ? (
              enrollments.map((enroll, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2 text-center">{enroll.studentName}</td>
                  <td className="px-4 py-2 text-center">{enroll.courseTitle}</td>
                  <td className="px-4 py-2 text-center">{new Date(enroll.enrolledAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">No Enrollments Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Enrollments;
