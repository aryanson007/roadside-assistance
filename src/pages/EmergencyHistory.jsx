import PageWrapper from "../components/ui/PageWrapper";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Card from "../components/ui/Card";

import { useApp } from "../context/AppContext";

const EmergencyHistory = () => {
  const { emergencies } = useApp();

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-6 overflow-hidden">
          <Topbar />

          {/* Header */}

          <div className="mt-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-3xl p-8 shadow-xl">
            <h1 className="text-4xl font-extrabold">
              🚨 Emergency History
            </h1>

            <p className="mt-3 text-red-100 text-lg">
              Track all previous roadside emergency requests and service
              updates.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="bg-white/20 backdrop-blur px-5 py-3 rounded-xl">
                🚨 Total Requests: {emergencies.length}
              </div>

              <div className="bg-white/20 backdrop-blur px-5 py-3 rounded-xl">
                ⚡ Quick Response Support
              </div>
            </div>
          </div>

          {/* Emergency List */}

          {emergencies.length === 0 ? (
            <div className="mt-10 bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="text-7xl">
                🚑
              </div>

              <h2 className="text-3xl font-bold text-gray-700 mt-5">
                No Emergency Requests Yet
              </h2>

              <p className="text-gray-500 mt-3">
                Your roadside assistance requests will appear here.
              </p>
            </div>
          ) : (
            <div className="mt-10 space-y-6">
              {emergencies.map((request) => (
                <Card key={request.id}>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    {/* Details */}

                    <div className="flex gap-5">
                      <div className="bg-red-100 text-red-600 text-4xl p-5 rounded-2xl h-fit">
                        🚨
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          {request.vehicle}
                        </h2>

                        <p className="text-gray-600 mt-3">
                          🔧 Problem:
                          <span className="font-semibold ml-2">
                            {request.problem}
                          </span>
                        </p>

                        <p className="text-gray-600 mt-2">
                          📍 Location:
                          <span className="font-semibold ml-2">
                            {request.location}
                          </span>
                        </p>

                        {request.phone && (
                          <p className="text-gray-500 mt-2">
                            📞 {request.phone}
                          </p>
                        )}

                        {request.date && (
                          <p className="text-gray-500 mt-2">
                            📅 {request.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Status */}

                    <div className="flex flex-col items-start md:items-end gap-3">
                      <span
                        className={`px-5 py-2 rounded-full font-semibold text-sm ${
                          request.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : request.status ===
                              "Searching for nearby mechanic..."
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {request.status === "Completed"
                          ? "✅ "
                          : request.status ===
                            "Searching for nearby mechanic..."
                          ? "🔍 "
                          : "🚗 "}

                        {request.status}
                      </span>

                      {request.eta && (
                        <div className="bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-semibold">
                          ⏱ ETA: {request.eta}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default EmergencyHistory;