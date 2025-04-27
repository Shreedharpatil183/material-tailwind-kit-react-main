import fs from 'fs';
import path from 'path';

const coursesFile = path.resolve('server/data/courses.json');

// Helper methods
const readCourses = () => {
  const data = fs.readFileSync(coursesFile);
  return JSON.parse(data);
};

const writeCourses = (courses) => {
  fs.writeFileSync(coursesFile, JSON.stringify(courses, null, 2));
};

// Controllers
export const getCourses = (req, res) => {
  const courses = readCourses();
  res.json(courses);
};

export const addCourse = (req, res) => {
  const courses = readCourses();
  const { title, description, price, oldPrice, questions } = req.body;
  
  let pdfUrl = '';
  if (req.file) {
    pdfUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }

  const newCourse = {
    id: Date.now(),
    title,
    description,
    price,
    oldPrice,
    questions: JSON.parse(questions),
    pdf: pdfUrl
  };

  courses.push(newCourse);
  writeCourses(courses);

  res.status(201).json(newCourse);
};

export const updateCourse = (req, res) => {
  const courses = readCourses();
  const { id } = req.params;
  const { title, description, price, oldPrice, questions } = req.body;

  const index = courses.findIndex(course => course.id == id);
  if (index !== -1) {
    let pdfUrl = courses[index].pdf;
    if (req.file) {
      pdfUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    courses[index] = {
      ...courses[index],
      title,
      description,
      price,
      oldPrice,
      questions: JSON.parse(questions),
      pdf: pdfUrl
    };

    writeCourses(courses);
    res.json(courses[index]);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
};

export const deleteCourse = (req, res) => {
  let courses = readCourses();
  const { id } = req.params;
  courses = courses.filter(course => course.id != id);
  writeCourses(courses);
  res.json({ message: "Course deleted successfully" });
};
