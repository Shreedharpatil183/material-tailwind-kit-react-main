// models/Course.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: String,
    oldPrice: String,
    questions: [String],
    pdfPath: String,
    imagePath: String, // ← New field
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
