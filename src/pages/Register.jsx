import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";

import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!accepted) {
      toast.warning("Please accept the Terms & Conditions.");
      return;
    }

    toast.success("🎉 Registration Successful!");

    setTimeout(() => {
      navigate("/login");
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
              Join RoadAssist
            </h1>

            <p className="mt-6 text-blue-100 text-lg">
              Create your account and get instant access to verified roadside
              assistance anytime, anywhere.
            </p>

            <div className="mt-10 space-y-4">
              <p>✔ Quick Registration</p>
              <p>✔ Secure Account</p>
              <p>✔ Emergency Assistance</p>
              <p>✔ Trusted Mechanics</p>
            </div>

            <div className="text-8xl mt-12 text-center">
              🚗
            </div>

          </div>

          {/* Right Section */}

          <div className="p-12">

            <h2 className="text-4xl font-bold text-gray-800">
              Register
            </h2>

            <p className="text-gray-500 mt-2">
              Create your RoadAssist account
            </p>

            <form
              onSubmit={handleRegister}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

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

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="flex items-center gap-2 text-sm text-gray-600">

                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />

                I agree to the Terms & Conditions

              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Create Account
              </button>

            </form>

            <p className="text-center mt-8 text-gray-600">

              Already have an account?

              <Link
                to="/login"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Register;