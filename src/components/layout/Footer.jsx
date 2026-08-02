const Footer = () => {

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <footer
      id="contact"
      className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white"
    >

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl shadow-lg">

                🚗

              </div>

              <div>

                <h2 className="text-3xl font-extrabold">

                  RoadAssist

                </h2>

                <p className="text-blue-400 text-sm">

                  Smart Roadside Platform

                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-8">

              RoadAssist provides fast, reliable and trusted roadside
              assistance across India. Connect with verified mechanics,
              towing partners and emergency support anytime.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => scrollToSection("home")}
              >
                Home
              </li>

              <li
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => scrollToSection("services")}
              >
                Services
              </li>

              <li
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => scrollToSection("about")}
              >
                About
              </li>

              <li
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Services

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>🔧 Breakdown Repair</li>

              <li>🚚 Towing Service</li>

              <li>🔋 Battery Jump Start</li>

              <li>⛽ Fuel Delivery</li>

              <li>🛞 Flat Tyre Repair</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Contact Us

            </h3>

            <div className="space-y-5 text-gray-400">

              <p>

                📍 Available Across India

              </p>

              <p>

                📞 +91 1800-123-ROAD

              </p>

              <p>

                ✉ support@roadassist.com

              </p>

              <p>

                🕒 24×7 Emergency Support

              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-700 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-center">

              © 2026 <span className="text-white font-semibold">RoadAssist</span>.
              All Rights Reserved.

            </p>

            <div className="flex gap-6 text-2xl">

              <span className="hover:scale-125 transition cursor-pointer">

                🌐

              </span>

              <span className="hover:scale-125 transition cursor-pointer">

                📘

              </span>

              <span className="hover:scale-125 transition cursor-pointer">

                📷

              </span>

              <span className="hover:scale-125 transition cursor-pointer">

                💼

              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;