import { useState, useEffect } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { toast } from "react-toastify";

const EditProfileForm = ({ profile, onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
      setPhone(profile.phone);
      setLocation(profile.location);
    }
  }, [profile]);

  const handleSubmit = () => {
    if (!name || !email || !phone || !location) {
      toast.error("Please fill all fields");
      return;
    }

    onSave({
      ...profile,
      name,
      email,
      phone,
      location,
    });

    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Edit Profile
      </h2>

      <div className="space-y-4">

        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

      </div>

      <div className="flex justify-end mt-8">
        <Button onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditProfileForm;