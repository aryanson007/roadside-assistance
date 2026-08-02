import { useState } from "react";
import PageWrapper from "../components/ui/PageWrapper";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import MechanicCard from "../components/mechanic/MechanicCard";
import MechanicSearch from "../components/mechanic/MechanicSearch";
import BookingForm from "../components/mechanic/BookingForm";

import Modal from "../components/ui/Modal";

const Mechanics = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [ratingFilter, setRatingFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedMechanic, setSelectedMechanic] = useState(null);

  const mechanics = [
    {
      id: 1,
      name: "Raj Auto Works",
      rating: 4.8,
      distance: "2.5 km Away",
      services: [
        "Engine Repair",
        "Tyre Repair",
        "Battery Service",
      ],
    },

    {
      id: 2,
      name: "Singh Garage",
      rating: 4.6,
      distance: "5 km Away",
      services: [
        "Towing",
        "Oil Change",
        "General Service",
      ],
    },

    {
      id: 3,
      name: "Speed Motors",
      rating: 4.9,
      distance: "1.8 km Away",
      services: [
        "AC Repair",
        "Brake Service",
        "Battery",
      ],
    },

    {
      id: 4,
      name: "City Car Care",
      rating: 4.7,
      distance: "3.2 km Away",
      services: [
        "Wheel Alignment",
        "Engine Repair",
        "Tyre Repair",
      ],
    },
  ];

  const filteredMechanics = mechanics.filter((mechanic) => {
    const matchesSearch = mechanic.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRating =
      ratingFilter === "All" ||
      mechanic.rating >= Number(ratingFilter);

    return matchesSearch && matchesRating;
  });

  const handleBookNow = (mechanic) => {
    setSelectedMechanic(mechanic);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMechanic(null);

    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-6 lg:p-10">
          <Topbar />

          {/* Header */}

          <div className="mt-8">
            <h1 className="text-4xl font-extrabold text-gray-800">
              🔧 Find Nearby Mechanics
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Connect with verified mechanics and get roadside assistance
              quickly.
            </p>
          </div>

          {/* Search Section */}

          <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <MechanicSearch
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </div>

              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="
                border
                border-gray-300
                rounded-xl
                px-5
                py-3
                h-12
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
              >
                <option value="All">
                  ⭐ All Ratings
                </option>

                <option value="4.5">
                  ⭐ 4.5+
                </option>

                <option value="4.7">
                  ⭐ 4.7+
                </option>

                <option value="4.8">
                  ⭐ 4.8+
                </option>
              </select>
            </div>
          </div>

          {/* Mechanics Grid */}

          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-10
            "
          >
            {filteredMechanics.length > 0 ? (
              filteredMechanics.map((mechanic) => (
                <MechanicCard
                  key={mechanic.id}
                  mechanic={mechanic}
                  onBook={handleBookNow}
                />
              ))
            ) : (
              <div
                className="
                col-span-full
                bg-white
                rounded-3xl
                shadow-lg
                p-10
                text-center
                "
              >
                <h2
                  className="
                  text-2xl
                  font-bold
                  text-gray-600
                  "
                >
                  No Mechanics Found 🔧
                </h2>

                <p className="text-gray-500 mt-2">
                  Try changing your search or rating filter.
                </p>
              </div>
            )}
          </div>

          {/* Booking Modal */}

          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
          >
            {selectedMechanic && (
              <BookingForm
                mechanic={selectedMechanic}
                onConfirm={closeModal}
              />
            )}
          </Modal>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Mechanics;