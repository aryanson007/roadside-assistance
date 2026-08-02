import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { useApp } from "../../context/AppContext";
import { toast } from "react-toastify";

const EmergencyForm = ({ onRequest }) => {
  const { emergencies, setEmergencies } = useApp();

  const [vehicle, setVehicle] = useState("");
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!vehicle || !problem || !location || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    const newEmergency = {
      id: Date.now(),
      vehicle,
      problem,
      location,
      phone,
      date: new Date().toLocaleDateString(),
      status: "Searching for nearby mechanic...",
      eta: "15 Minutes",
    };

    setEmergencies([...emergencies, newEmergency]);

    onRequest(newEmergency);

    toast.success("🚨 Emergency request submitted successfully!");

    setVehicle("");
    setProblem("");
    setLocation("");
    setPhone("");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      {/* Header */}

      <div className="text-center mb-8">

        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-4xl mx-auto">
          🚨
        </div>

        <h2 className="text-3xl font-bold mt-4">
          Emergency Assistance
        </h2>

        <p className="text-gray-500 mt-2">
          Fill in the details below and we'll connect you with the nearest mechanic.
        </p>

      </div>

      {/* Form */}

      <div className="space-y-5">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Vehicle Name
          </label>

          <Input
            placeholder="e.g. Hyundai Creta"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Problem
          </label>

          <Input
            placeholder="Flat Tyre, Battery Issue, Engine Failure..."
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Current Location
          </label>

          <Input
            placeholder="Enter your current location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Contact Number
          </label>

          <Input
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

        </div>

      </div>

      {/* Emergency Tips */}

      <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-5">

        <h3 className="font-bold text-red-700 mb-2">
          ⚠ Emergency Tips
        </h3>

        <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
          <li>Stay in a safe location away from traffic.</li>
          <li>Turn on your vehicle's hazard lights.</li>
          <li>Keep your phone available for mechanic updates.</li>
        </ul>

      </div>

      {/* Button */}

      <div className="mt-8 flex justify-end">

        <Button
          onClick={handleSubmit}
          className="px-8"
        >
          🚨 Request Assistance
        </Button>

      </div>

    </div>
  );
};

export default EmergencyForm;