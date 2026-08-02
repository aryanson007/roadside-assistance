import Card from "../ui/Card";

const EmergencyCard = ({ request }) => {
  const statusColor =
    request.status === "Searching for nearby mechanic..."
      ? "bg-yellow-100 text-yellow-700"
      : request.status === "🟢 Mechanic Assigned"
      ? "bg-blue-100 text-blue-700"
      : "bg-green-100 text-green-700";

  return (
    <Card className="rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6">

        <h2 className="text-3xl font-bold">
          🚨 Emergency Request
        </h2>

        <p className="text-red-100 mt-2">
          Your roadside assistance request has been received.
        </p>

      </div>

      {/* Details */}

      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Vehicle
            </p>

            <h3 className="text-xl font-bold mt-1">
              🚗 {request.vehicle}
            </h3>

          </div>

          <div className="bg-gray-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Problem
            </p>

            <h3 className="text-xl font-bold mt-1">
              🔧 {request.problem}
            </h3>

          </div>

          <div className="bg-gray-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Location
            </p>

            <h3 className="text-lg font-semibold mt-1">
              📍 {request.location}
            </h3>

          </div>

          <div className="bg-gray-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Contact
            </p>

            <h3 className="text-lg font-semibold mt-1">
              📞 {request.phone}
            </h3>

          </div>

        </div>

        {/* Status */}

        <div className="mt-8">

          <h3 className="font-bold text-lg mb-4">
            Live Status
          </h3>

          <div className="flex items-center justify-between bg-blue-50 rounded-2xl p-5">

            <div>

              <p className="text-gray-500">
                Current Status
              </p>

              <span
                className={`inline-block mt-2 px-4 py-2 rounded-full font-semibold ${statusColor}`}
              >
                {request.status}
              </span>

            </div>

            <div className="text-right">

              <p className="text-gray-500">
                Estimated Arrival
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                ⏳ {request.eta}
              </h2>

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="mt-8 bg-gray-50 rounded-2xl p-6">

          <h3 className="font-bold text-lg mb-5">
            Service Progress
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                ✓
              </div>

              <div>
                <p className="font-semibold">
                  Request Submitted
                </p>

                <p className="text-sm text-gray-500">
                  Emergency request received successfully.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                🔍
              </div>

              <div>
                <p className="font-semibold">
                  Finding Nearby Mechanic
                </p>

                <p className="text-sm text-gray-500">
                  Matching you with the closest available mechanic.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                🚗
              </div>

              <div>
                <p className="font-semibold">
                  Mechanic On The Way
                </p>

                <p className="text-sm text-gray-500">
                  Live ETA updates will appear here.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </Card>
  );
};

export default EmergencyCard;