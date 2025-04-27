// src/pages/admin/CourseForm.jsx
import React, { useState } from "react";
import axios from "axios";

function CourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("oldPrice", oldPrice);
    formData.append("pdf", pdf);

    try {
      await axios.post("http://localhost:5000/api/courses", formData);
      alert("Course created successfully");
      setTitle("");
      setDescription("");
      setPrice("");
      setOldPrice("");
      setPdf(null);
    } catch (error) {
      console.error(error);
      alert("Failed to create course");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Old Price"
          className="w-full p-2 border border-gray-300 rounded"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          required
        />
        <input
          type="file"
          accept="application/pdf"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setPdf(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default CourseForm;
