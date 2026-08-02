import PageWrapper from "../components/ui/PageWrapper";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Card from "../components/ui/Card";

import { useApp } from "../context/AppContext";

const BookingHistory = () => {
  const { bookings } = useApp();

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-6 overflow-hidden">
          <Topbar />

          {/* Header */}

          <div className="mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-8 shadow-xl">
            <h1 className="text-4xl font-extrabold">
              📖 Booking History
            </h1>

            <p className="mt-3 text-blue-100 text-lg">
              Track all your mechanic appointments and service records.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="bg-white/20 px-5 py-3 rounded-xl backdrop-blur">
                🔧 Total Bookings: {bookings.length}
              </div>

              <div className="bg-white/20 px-5 py-3 rounded-xl backdrop-blur">
                ✅ Verified Mechanics
              </div>
            </div>
          </div>

          {/* Booking List */}

          {bookings.length === 0 ? (
            <div className="mt-10 bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="text-7xl">
                📅
              </div>

              <h2 className="text-3xl font-bold text-gray-700 mt-5">
                No Bookings Yet
              </h2>

              <p className="text-gray-500 mt-3">
                Your mechanic bookings will appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 mt-10">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    {/* Left */}

                    <div className="flex gap-5">
                      <div className="bg-blue-100 text-blue-600 text-4xl p-5 rounded-2xl h-fit">
                        🔧
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          {booking.mechanic}
                        </h2>

                        <p className="text-gray-600 mt-3">
                          🛠 Service:
                          <span className="font-semibold ml-2">
                            {booking.service}
                          </span>
                        </p>

                        <p className="text-gray-500 mt-2">
                          📅 {booking.date}
                        </p>

                        {booking.time && (
                          <p className="text-gray-500 mt-1">
                            🕒 {booking.time}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Status */}

                    <div className="flex items-start">
                      <span
                        className={`px-5 py-2 rounded-full font-semibold text-sm
                          ${
                            booking.status === "Confirmed"
                              ? "bg-blue-100 text-blue-700"
                              : booking.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >
                        {booking.status === "Confirmed" ? "✅ " : ""}
                        {booking.status}
                      </span>
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

export default BookingHistory;