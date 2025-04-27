import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem('admin', true);
      navigate('/admin/dashboard');
    } else {
      alert("Invalid password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 w-full border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
