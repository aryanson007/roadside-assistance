import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-32 pb-24"
    >
      {/* Background Decorations */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>

      <div className="absolute top-40 right-20 w-20 h-20 bg-blue-400/20 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}

        <div>

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold shadow-sm">

            🚗 India's Trusted Roadside Assistance

          </span>

          <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

            Roadside Help
            <br />

            <span className="text-blue-600">
              Anytime.
            </span>

            <br />

            Anywhere.

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

            Get instant roadside assistance from verified mechanics,
            towing partners and emergency experts.

            Whether it's a flat tyre, battery failure or engine issue,
            RoadAssist connects you with trusted professionals in minutes.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={() => navigate("/emergency")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              🚨 Request Help
            </button>

            <button
              onClick={scrollToServices}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition duration-300"
            >
              Explore Services
            </button>

          </div>

          {/* Trust Cards */}

          <div className="grid grid-cols-3 gap-5 mt-14">

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center">

              <h2 className="text-3xl font-extrabold text-blue-600">

                500+

              </h2>

              <p className="text-gray-600 mt-2 text-sm">

                Verified Mechanics

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center">

              <h2 className="text-3xl font-extrabold text-blue-600">

                24×7

              </h2>

              <p className="text-gray-600 mt-2 text-sm">

                Emergency Support

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center">

              <h2 className="text-3xl font-extrabold text-blue-600">

                20+

              </h2>

              <p className="text-gray-600 mt-2 text-sm">

                Cities Covered

              </p>

            </div>

          </div>

        </div>
                {/* Right Section */}

        <div className="relative flex justify-center">

          {/* Floating Badge */}

          <div className="absolute -top-6 left-0 bg-white shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3 animate-bounce">

            <span className="text-2xl">⭐</span>

            <div>

              <p className="font-bold text-gray-800">
                4.9 Rating
              </p>

              <p className="text-sm text-gray-500">
                Trusted by Drivers
              </p>

            </div>

          </div>

          {/* Main Card */}

          <div className="relative bg-white/80 backdrop-blur-lg border border-white rounded-[32px] shadow-2xl p-10 w-full max-w-lg hover:scale-105 transition duration-500">

            <div className="flex justify-center">

              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-7xl shadow-2xl">

                🚗

              </div>

            </div>

            <h2 className="text-3xl font-bold text-center mt-8 text-gray-800">

              RoadAssist

            </h2>

            <p className="text-center text-gray-500 mt-2">

              Fast • Reliable • Trusted

            </p>

            {/* Services */}

            <div className="space-y-4 mt-10">

              <div className="flex items-center justify-between bg-blue-50 rounded-2xl p-4">

                <div className="flex items-center gap-3">

                  <span className="text-2xl">🔧</span>

                  <span className="font-medium">
                    Breakdown Repair
                  </span>

                </div>

                <span className="text-green-600 font-semibold">
                  Available
                </span>

              </div>

              <div className="flex items-center justify-between bg-blue-50 rounded-2xl p-4">

                <div className="flex items-center gap-3">

                  <span className="text-2xl">🚚</span>

                  <span className="font-medium">
                    Towing Service
                  </span>

                </div>

                <span className="text-green-600 font-semibold">
                  Available
                </span>

              </div>

              <div className="flex items-center justify-between bg-blue-50 rounded-2xl p-4">

                <div className="flex items-center gap-3">

                  <span className="text-2xl">🔋</span>

                  <span className="font-medium">
                    Battery Jump Start
                  </span>

                </div>

                <span className="text-green-600 font-semibold">
                  Available
                </span>

              </div>

            </div>

            {/* Bottom Stats */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center py-5 shadow-lg">

                <h3 className="text-2xl font-bold">

                  10K+

                </h3>

                <p className="text-sm">

                  Happy Customers

                </p>

              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white text-center py-5 shadow-lg">

                <h3 className="text-2xl font-bold">

                  98%

                </h3>

                <p className="text-sm">

                  Success Rate

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
