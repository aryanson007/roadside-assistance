import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { useApp } from "../../context/AppContext";
import { toast } from "react-toastify";

const BookingForm = ({ mechanic, onConfirm }) => {
  const { bookings, setBookings } = useApp();

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!service || !date || !time) {
      toast.error("Please fill all fields");
      return;
    }

    const newBooking = {
      id: Date.now(),
      mechanic: mechanic.name,
      service,
      date,
      time,
      status: "Confirmed",
    };

    setBookings([...bookings, newBooking]);

    toast.success("🎉 Booking Confirmed Successfully!");

    setService("");
    setDate("");
    setTime("");

    onConfirm();
  };

  return (
    <div>

      {/* Header */}

      <div className="text-center mb-8">

        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto">
          👨‍🔧
        </div>

        <h2 className="text-3xl font-bold mt-4">
          Book Mechanic
        </h2>

        <p className="text-gray-500 mt-2">
          Schedule your vehicle service
        </p>

      </div>

      {/* Mechanic Card */}

      <div className="bg-blue-50 rounded-2xl p-5 mb-6">

        <div className="flex justify-between items-center">

          <div>

            <h3 className="text-xl font-bold text-gray-800">
              {mechanic.name}
            </h3>

            <p className="text-yellow-500 font-medium mt-1">
              ⭐ {mechanic.rating}
            </p>

            <p className="text-gray-500 mt-1">
              📍 {mechanic.distance}
            </p>

          </div>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            Available
          </span>

        </div>

      </div>

      {/* Form */}

      <div className="space-y-5">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Select Service
          </label>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose Service</option>

            {mechanic.services.map((item, index) => (
              <option
                key={index}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Booking Date
          </label>

          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Preferred Time
          </label>

          <Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 mt-8">

        <Button
          variant="secondary"
          onClick={onConfirm}
        >
          Cancel
        </Button>

        <Button
          onClick={handleBooking}
        >
          Confirm Booking 🚗
        </Button>

      </div>

    </div>
  );
};

export default BookingForm;