import express from "express";
import Course from "../models/Course.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// Create a new course
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    const { title, description, price, oldPrice, questions } = req.body;
    let pdfPath = null;
    let imagePath = null;

    if (req.files && req.files.pdf) {
      const pdf = req.files.pdf;
      const uploadPath = path.join("uploads", pdf.name);
      pdf.mv(uploadPath);
      pdfPath = `/${uploadPath}`;
      console.log(pdfPath);
    }

     if (req.files?.image) {
      const image = req.files.image;
      const imageUploadPath = path.join("uploads", image.name);
      await image.mv(imageUploadPath);
      imagePath = `/${imageUploadPath}`;
    }

    const newCourse = new Course({
      title,
      description,
      price,
      oldPrice,
      questions: JSON.parse(questions),
      pdfPath,
      imagePath
    });
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
    console.log(savedCourse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a course
router.put("/:id", async (req, res) => {
  try {
    const { title, description, price, oldPrice, questions } = req.body;
    const course = await Course.findById(req.params.id);
    
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (req.files && req.files.pdf) {
      const pdf = req.files.pdf;
      const uploadPath = path.join("uploads", pdf.name);
      pdf.mv(uploadPath);
      course.pdfPath = `/${uploadPath}`;
    }

    if (req.files?.image) {
      const image = req.files.image;
      const imageUploadPath = path.join("uploads", image.name);
      await image.mv(imageUploadPath);
      course.imagePath = `/${imageUploadPath}`;
    }

    course.title = title;
    course.description = description;
    course.price = price;
    course.oldPrice = oldPrice;
    course.questions = JSON.parse(questions);

    const updated = await course.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a course
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (course?.pdfPath) {
      const fullPath = path.join("uploads", path.basename(course.pdfPath));
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    }
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
