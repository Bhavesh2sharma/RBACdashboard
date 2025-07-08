import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username.trim(), password.trim());
  };  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 relative">
        {/* Icon at top center */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-500 to-green-500 p-4 rounded-full shadow-md">
          <UserCircle className="text-white w-12 h-12" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-6 mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-8">Login to your account</p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => alert("Forgot Password Clicked")}
            >
              Forgot password?
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform font-semibold"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => alert("Signup Clicked")}
            className="text-green-600 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
