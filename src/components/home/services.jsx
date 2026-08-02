import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Breakdown Repair",
      description:
        "Certified mechanics reach your location and repair your vehicle quickly.",
      icon: "🔧",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Towing Service",
      description:
        "Professional towing service for vehicles that cannot be driven safely.",
      icon: "🚚",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Battery Jump Start",
      description:
        "Dead battery? Our experts will get you moving within minutes.",
      icon: "🔋",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Flat Tyre Repair",
      description:
        "Fast puncture repair and tyre replacement wherever you're stranded.",
      icon: "🛞",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "Fuel Delivery",
      description:
        "Run out of fuel? We'll deliver petrol or diesel directly to you.",
      icon: "⛽",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Vehicle Drop-Off",
      description:
        "After repair, we'll safely deliver your vehicle back to your location.",
      icon: "🚗",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

            🚀 Our Premium Services

          </span>

          <h2 className="text-5xl font-extrabold text-gray-900 mt-6">

            Everything You Need
            <br />
            During a Breakdown

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            RoadAssist connects you with trusted professionals to solve
            roadside emergencies quickly, safely and efficiently.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:-translate-y-3"
            >

              {/* Icon */}

              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition`}
              >

                {service.icon}

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                {service.title}

              </h3>

              {/* Description */}

              <p className="text-gray-600 mt-4 leading-7">

                {service.description}

              </p>

              {/* Button */}

              <button
                onClick={() => navigate("/mechanics")}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
              >
                Book Service →
              </button>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-10 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl">

          <div>

            <h3 className="text-3xl font-bold">

              Need Immediate Roadside Help?

            </h3>

            <p className="text-blue-100 mt-3">

              Our verified mechanics are available 24×7 to assist you.

            </p>

          </div>

          <button
            onClick={() => navigate("/emergency")}
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            🚨 Request Emergency Help
          </button>

        </div>

      </div>
    </section>
  );
};

export default Services;