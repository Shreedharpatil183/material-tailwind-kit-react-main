// routes/enrollmentRoutes.js
import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

// Create a new enrollment
router.post("/", async (req, res) => {
  try {
    const { studentName, studentEmail, courseId } = req.body;
    const newEnrollment = new Enrollment({ studentName, studentEmail, courseId });
    await newEnrollment.save();
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create enrollment" });
  }
});

// Get all enrollments
router.get("/", async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate("courseId", "title");
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
});

// Delete an enrollment
router.delete("/:id", async (req, res) => {
  try {
    await Enrollment.findByIdAndDelete(req.params.id);
    res.json({ message: "Enrollment deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete enrollment" });
  }
});

export default router;
