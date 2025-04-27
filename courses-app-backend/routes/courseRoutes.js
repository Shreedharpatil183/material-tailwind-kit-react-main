import express from "express";
import multer from "multer";
import { getCourses, addCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

// Course APIs
router.get("/", getCourses);

// Note: Now using 'upload.single' middleware for PDF file
router.post("/", upload.single('pdf'), addCourse);

router.put("/:id", upload.single('pdf'), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
