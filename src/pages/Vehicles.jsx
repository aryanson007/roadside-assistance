import { useState } from "react";
import PageWrapper from "../components/ui/PageWrapper";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Card from "../components/ui/Card";

import VehicleForm from "../components/vehicle/VehicleForm";
import { useApp } from "../context/AppContext";

const Vehicles = () => {
  const { vehicles, setVehicles } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingVehicle, setEditingVehicle] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [fuelFilter, setFuelFilter] = useState("All");

  const addVehicle = (newVehicle) => {
    setVehicles([
      ...vehicles,
      {
        id: Date.now(),
        ...newVehicle,
      },
    ]);

    setIsModalOpen(false);
  };

  const updateVehicle = (updatedVehicle) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
      )
    );

    setEditingVehicle(null);
    setIsModalOpen(false);
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const search =
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.registration.toLowerCase().includes(searchTerm.toLowerCase());

    const fuel =
      fuelFilter === "All" || vehicle.fuel === fuelFilter;

    return search && fuel;
  });

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-8">
          <Topbar />

          {/* Header */}

          <div className="mt-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                🚗 My Vehicles
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your registered vehicles easily
              </p>
            </div>

            <Button
              onClick={() => {
                setEditingVehicle(null);
                setIsModalOpen(true);
              }}
            >
              + Add Vehicle
            </Button>
          </div>

          {/* Search */}

          <div className="mt-8 bg-white p-5 rounded-3xl shadow-lg flex gap-4">
            <input
              type="text"
              placeholder="🔍 Search vehicle, company, registration..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
              flex-1
              border
              rounded-xl
              px-5
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

            <select
              value={fuelFilter}
              onChange={(e) => setFuelFilter(e.target.value)}
              className="
              border
              rounded-xl
              px-5
              py-3
              outline-none
              "
            >
              <option>All</option>

              <option>Petrol</option>

              <option>Diesel</option>

              <option>Electric</option>

              <option>CNG</option>
            </select>
          </div>

          {/* Vehicle Cards */}

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {vehicle.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {vehicle.company} {vehicle.model}
                      </p>
                    </div>

                    <div
                      className="
                    bg-blue-100
                    text-blue-600
                    text-3xl
                    p-4
                    rounded-2xl
                    "
                    >
                      🚗
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 text-gray-600">
                    <p>
                      📄 Registration:
                      <span className="font-semibold ml-2">
                        {vehicle.registration}
                      </span>
                    </p>

                    <p>
                      ⛽ Fuel:
                      <span className="font-semibold ml-2">
                        {vehicle.fuel}
                      </span>
                    </p>

                    <p>
                      🎨 Color:
                      <span className="font-semibold ml-2">
                        {vehicle.color}
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button
                      onClick={() => {
                        setEditingVehicle(vehicle);
                        setIsModalOpen(true);
                      }}
                      variant="success"
                    >
                      ✏ Edit
                    </Button>

                    <Button
                      onClick={() => deleteVehicle(vehicle.id)}
                      variant="danger"
                    >
                      🗑 Delete
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div
                className="
                col-span-2
                bg-white
                rounded-3xl
                shadow-lg
                p-12
                text-center
                "
              >
                <div className="text-6xl">🚗</div>

                <h2 className="text-2xl font-bold text-gray-600 mt-4">
                  No Vehicles Found
                </h2>

                <p className="text-gray-400 mt-2">
                  Add your first vehicle to get started
                </p>
              </div>
            )}
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setEditingVehicle(null);
              setIsModalOpen(false);
            }}
          >
            <VehicleForm
              addVehicle={addVehicle}
              updateVehicle={updateVehicle}
              editingVehicle={editingVehicle}
            />
          </Modal>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Vehicles;