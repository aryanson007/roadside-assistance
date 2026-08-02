const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: "📍",
      title: "Request Assistance",
      description:
        "Choose the required roadside service and share your live location within seconds.",
    },
    {
      number: "02",
      icon: "👨‍🔧",
      title: "Mechanic Assigned",
      description:
        "Our system instantly connects you with the nearest verified mechanic available.",
    },
    {
      number: "03",
      icon: "🚗",
      title: "Back On The Road",
      description:
        "Track the mechanic in real-time and get your vehicle repaired quickly and safely.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

            ⚡ Simple Process

          </span>

          <h2 className="text-5xl font-extrabold text-gray-900 mt-6">

            How RoadAssist Works

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Get professional roadside assistance in just three simple steps.

          </p>

        </div>

        {/* Steps */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 p-8 border border-gray-100 hover:-translate-y-3"
            >

              {/* Number */}

              <div className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100">

                {step.number}

              </div>

              {/* Icon */}

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-4xl shadow-lg">

                {step.icon}

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                {step.title}

              </h3>

              {/* Description */}

              <p className="text-gray-600 mt-5 leading-7">

                {step.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Timeline */}

        <div className="hidden lg:flex items-center justify-center mt-12">

          <div className="w-40 h-1 bg-blue-200 rounded-full"></div>

          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>

          <div className="w-40 h-1 bg-blue-200 rounded-full"></div>

          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>

          <div className="w-40 h-1 bg-blue-200 rounded-full"></div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;