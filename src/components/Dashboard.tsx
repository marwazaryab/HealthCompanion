import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-12 flex flex-col items-center space-y-8 max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to HealthCompanion
        </h1>
        <p className="text-gray-600">
          Track your health habits, monitor progress, and stay on top of your wellness journey.
        </p>
        <div className="flex space-x-6">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
