import { useState, useEffect } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { toast } from "react-toastify";

const VehicleForm = ({
  addVehicle,
  updateVehicle,
  editingVehicle,
}) => {
  const [vehicleName, setVehicleName] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [registration, setRegistration] = useState("");
  const [fuel, setFuel] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (editingVehicle) {
      setVehicleName(editingVehicle.name);
      setCompany(editingVehicle.company);
      setModel(editingVehicle.model);
      setRegistration(editingVehicle.registration);
      setFuel(editingVehicle.fuel);
      setColor(editingVehicle.color);
    } else {
      setVehicleName("");
      setCompany("");
      setModel("");
      setRegistration("");
      setFuel("");
      setColor("");
    }
  }, [editingVehicle]);

  const handleSubmit = () => {
    if (
      !vehicleName ||
      !company ||
      !model ||
      !registration ||
      !fuel ||
      !color
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const vehicleData = {
      name: vehicleName,
      company,
      model,
      registration,
      fuel,
      color,
    };

    if (editingVehicle) {
      updateVehicle({
        ...vehicleData,
        id: editingVehicle.id,
      });

      toast.success("Vehicle updated successfully!");
    } else {
      addVehicle(vehicleData);

      toast.success("Vehicle added successfully!");
    }

    setVehicleName("");
    setCompany("");
    setModel("");
    setRegistration("");
    setFuel("");
    setColor("");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        {editingVehicle ? "Edit Vehicle" : "Add Vehicle"}
      </h2>

      <div className="space-y-4">
        <Input
          placeholder="Vehicle Name"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        />

        <Input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <Input
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <Input
          placeholder="Registration Number"
          value={registration}
          onChange={(e) => setRegistration(e.target.value)}
        />

        <Input
          placeholder="Fuel Type"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />

        <Input
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleSubmit}>
          {editingVehicle ? "Update Vehicle" : "Save Vehicle"}
        </Button>
      </div>
    </div>
  );
};

export default VehicleForm;