import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password.");
      return;
    }

    // Temporary frontend login
    localStorage.setItem("isLoggedIn", "true");

    toast.success("Login Successful!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-6 py-10">

        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* Left Section */}

          <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

            <h1 className="text-5xl font-extrabold">
              Welcome Back!
            </h1>

            <p className="mt-6 text-blue-100 text-lg">
              Login to request emergency roadside assistance,
              connect with nearby mechanics and track your bookings.
            </p>

            <div className="mt-10 space-y-4">
              <p>✔ 24/7 Emergency Support</p>
              <p>✔ 500+ Verified Mechanics</p>
              <p>✔ Live Tracking</p>
              <p>✔ Fast & Secure</p>
            </div>

            <div className="text-8xl mt-12 text-center">
              🚗
            </div>

          </div>

          {/* Right Section */}

          <div className="p-12">

            <h2 className="text-4xl font-bold text-gray-800">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Welcome back to RoadAssist
            </p>

            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-between text-sm">

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Login
              </button>

            </form>

            <p className="text-center mt-8 text-gray-600">

              Don't have an account?

              <Link
                to="/register"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Login;