import PageWrapper from "../components/ui/PageWrapper";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import { useApp } from "../context/AppContext";
import { toast } from "react-toastify";

const Premium = () => {
  const { profile, setProfile } = useApp();

  const handleUpgrade = () => {
    setProfile({
      ...profile,
      premium: true,
    });

    toast.success("🎉 Congratulations! You are now a Premium Member.");
  };

  const plans = [
    {
      name: "Silver",
      price: "₹199",
      color: "border-gray-300",
      badge: "🥈",
      features: [
        "Priority Support",
        "2 Free Emergency Requests",
        "Mechanic Discounts",
      ],
    },
    {
      name: "Gold",
      price: "₹499",
      color: "border-yellow-400 scale-105",
      badge: "🥇 Most Popular",
      features: [
        "Priority Mechanic Support",
        "Unlimited Emergency Requests",
        "Free Towing",
        "24×7 Premium Helpline",
        "Service History Tracking",
        "Exclusive Discounts",
      ],
    },
    {
      name: "Platinum",
      price: "₹999",
      color: "border-indigo-500",
      badge: "💎",
      features: [
        "Everything in Gold",
        "Dedicated Support Manager",
        "VIP Roadside Assistance",
        "Instant Mechanic Assignment",
      ],
    },
  ];

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-6 overflow-hidden">

          <Topbar />

          {/* Hero */}

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-10 text-white shadow-2xl">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              <div>

                <h1 className="text-5xl font-extrabold">
                  ⭐ RoadAssist Premium
                </h1>

                <p className="mt-5 text-lg text-yellow-100 max-w-2xl">
                  Unlock faster roadside assistance, priority mechanics,
                  premium towing, exclusive discounts and VIP customer support.
                </p>

                <div className="mt-8">

                  {profile.premium ? (
                    <span className="bg-white text-green-600 px-6 py-3 rounded-full font-bold shadow">
                      🎉 Premium Active
                    </span>
                  ) : (
                    <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                      Upgrade Today 🚀
                    </span>
                  )}

                </div>

              </div>

              <div className="text-9xl mt-8 lg:mt-0 animate-bounce">
                💎
              </div>

            </div>

          </div>

          {/* Plans */}

          <div className="grid lg:grid-cols-3 gap-8 mt-12">

            {plans.map((plan, index) => (

              <Card
                key={index}
                className={`border-2 ${plan.color} hover:shadow-2xl hover:-translate-y-2 transition duration-300`}
              >

                <div className="text-center">

                  <div className="text-4xl mb-3">
                    {plan.badge}
                  </div>

                  <h2 className="text-3xl font-bold">
                    {plan.name}
                  </h2>

                  <p className="text-5xl font-extrabold text-yellow-500 mt-5">
                    {plan.price}
                  </p>

                  <p className="text-gray-500">
                    Per Month
                  </p>

                </div>

                <div className="mt-8 space-y-3">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                    >
                      <span className="text-green-600 text-xl">
                        ✓
                      </span>

                      <span className="font-medium">
                        {feature}
                      </span>
                    </div>

                  ))}

                </div>

                <div className="mt-10 text-center">

                  {profile.premium ? (

                    <div className="bg-green-100 rounded-2xl p-5">

                      <p className="text-green-700 font-bold text-lg">
                        Membership Active ✅
                      </p>

                    </div>

                  ) : (

                    <Button onClick={handleUpgrade}>
                      Upgrade Now 🚀
                    </Button>

                  )}

                </div>

              </Card>

            ))}

          </div>

        </div>

      </div>
    </PageWrapper>
  );
};

export default Premium;