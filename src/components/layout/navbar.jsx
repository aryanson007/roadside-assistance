import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          🚗 RoadAssist
        </Link>

        {/* Navigation */}

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Services
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Contact
          </li>

        </ul>

        {/* Buttons */}

        <div className="flex gap-3">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;