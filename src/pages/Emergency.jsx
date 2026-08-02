import { useState } from "react";
import PageWrapper from "../components/ui/PageWrapper";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import EmergencyForm from "../components/emergency/EmergencyForm";
import EmergencyCard from "../components/emergency/EmergencyCard";

const Emergency = () => {
  const [request, setRequest] = useState(null);

  const handleRequest = (requestData) => {
    setRequest(requestData);

    setTimeout(() => {
      setRequest((prev) => ({
        ...prev,
        status: "🟢 Mechanic Assigned",
      }));
    }, 3000);

    setTimeout(() => {
      setRequest((prev) => ({
        ...prev,
        status: "🚗 Mechanic is On The Way",
        eta: "8 Minutes",
      }));
    }, 6000);
  };

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-6 overflow-hidden">
          <Topbar />

          {/* Header */}

          <div className="mt-8 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div>
                <h1 className="text-4xl font-extrabold">
                  🚨 Emergency Assistance
                </h1>

                <p className="mt-3 text-red-100 text-lg max-w-xl">
                  Get instant roadside help from verified mechanics.
                  Request towing, repairs and emergency support anytime.
                </p>

                <div className="flex gap-4 mt-6">
                  <div className="bg-white/20 px-5 py-3 rounded-xl backdrop-blur">
                    ⚡ Fast Response
                  </div>

                  <div className="bg-white/20 px-5 py-3 rounded-xl backdrop-blur">
                    🔧 Verified Mechanics
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0">
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center text-7xl backdrop-blur">
                  🚑
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <EmergencyForm
                onRequest={handleRequest}
              />
            </div>

            <div>
              {request ? (
                <EmergencyCard
                  request={request}
                />
              ) : (
                <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
                  <div className="text-7xl">
                    🛠️
                  </div>

                  <h2 className="text-2xl font-bold mt-5">
                    No Active Request
                  </h2>

                  <p className="text-gray-500 mt-3">
                    Submit an emergency request and track mechanic status here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Emergency;