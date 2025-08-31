import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"> {/* background */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"> {/* white box */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6"> {/* title text */}
          Login to HealthCompanion
        </h2>

        <form className="space-y-5">
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/*link to sign up */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
