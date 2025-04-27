import { useNavigate } from "react-router-dom";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import Enrollments from "./Enrollments";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded">Logout</button>
      </div>

      <CourseForm />
      <CourseList />
      <Enrollments />
    </div>
  );
}

export default AdminDashboard;
