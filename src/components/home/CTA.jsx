import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900">

      {/* Background Decorations */}

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[40px] p-12 lg:p-16 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="bg-white/20 text-white px-5 py-2 rounded-full font-semibold">

                🚨 Emergency Support

              </span>

              <h2 className="text-5xl font-extrabold text-white mt-8 leading-tight">

                Stranded on the Road?

                <br />

                We've Got You Covered.

              </h2>

              <p className="text-blue-100 text-lg mt-6 leading-8">

                Whether it's a flat tyre, dead battery, engine failure,
                or towing requirement, RoadAssist connects you with the
                nearest verified mechanic in minutes.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <button
                  onClick={() => navigate("/emergency")}
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold shadow-lg transition duration-300 hover:scale-105"
                >
                  🚨 Request Help Now
                </button>

                <button
                  onClick={() => navigate("/mechanics")}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-2xl font-bold transition duration-300"
                >
                  🔧 Find Mechanic
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="flex justify-center">

              <div className="bg-white rounded-[30px] shadow-2xl p-10 w-full max-w-md">

                <div className="flex justify-center">

                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-6xl text-white shadow-xl">

                    🚗

                  </div>

                </div>

                <h3 className="text-3xl font-bold text-center text-gray-800 mt-8">

                  Average Response

                </h3>

                <p className="text-center text-gray-500 mt-3">

                  Nearby mechanics reach you quickly.

                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="bg-blue-50 rounded-2xl p-5 text-center">

                    <h4 className="text-3xl font-extrabold text-blue-600">

                      8 min

                    </h4>

                    <p className="text-gray-600 mt-2">

                      Avg. Arrival

                    </p>

                  </div>

                  <div className="bg-green-50 rounded-2xl p-5 text-center">

                    <h4 className="text-3xl font-extrabold text-green-600">

                      98%

                    </h4>

                    <p className="text-gray-600 mt-2">

                      Success Rate

                    </p>

                  </div>

                </div>

                <div className="mt-8 bg-gray-100 rounded-2xl p-4 text-center">

                  <p className="font-semibold text-gray-700">

                    ⭐ Trusted by 10,000+ Drivers

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;