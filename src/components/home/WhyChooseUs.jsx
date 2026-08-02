const WhyChooseUs = () => {

  const features = [

    {
      icon: "🛡️",
      title: "Verified Mechanics",
      description:
        "Every mechanic on RoadAssist is carefully verified to ensure trusted, high-quality roadside assistance.",
      color: "from-blue-500 to-indigo-600",
    },

    {
      icon: "⚡",
      title: "Fast Response",
      description:
        "Nearby professionals receive your request instantly, reducing waiting time during emergencies.",
      color: "from-yellow-500 to-orange-500",
    },

    {
      icon: "💰",
      title: "Transparent Pricing",
      description:
        "No hidden charges. View estimated pricing before confirming your booking.",
      color: "from-green-500 to-emerald-600",
    },

    {
      icon: "📍",
      title: "Live Tracking",
      description:
        "Track your mechanic in real time and know exactly when help will arrive.",
      color: "from-red-500 to-pink-600",
    },

  ];

  return (

    <section
      id="about"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

            ⭐ Why Choose Us

          </span>

          <h2 className="text-5xl font-extrabold text-gray-900 mt-6">

            Trusted by Thousands
            <br />

            Across India

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            RoadAssist provides reliable roadside assistance with verified
            mechanics, transparent pricing and lightning-fast response times.

          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 p-8 border border-gray-100 hover:-translate-y-3"
            >

              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-4xl text-white shadow-lg`}
              >

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                {feature.title}

              </h3>

              <p className="text-gray-600 mt-5 leading-7">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-4xl font-extrabold text-blue-600">

              10K+

            </h2>

            <p className="text-gray-600 mt-3">

              Happy Customers

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-4xl font-extrabold text-green-600">

              500+

            </h2>

            <p className="text-gray-600 mt-3">

              Verified Mechanics

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-4xl font-extrabold text-orange-500">

              24×7

            </h2>

            <p className="text-gray-600 mt-3">

              Emergency Support

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-4xl font-extrabold text-purple-600">

              98%

            </h2>

            <p className="text-gray-600 mt-3">

              Success Rate

            </p>

          </div>

        </div>

      </div>

    </section>

  );

};

export default WhyChooseUs;