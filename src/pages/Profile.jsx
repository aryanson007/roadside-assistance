import { useState } from "react";
import PageWrapper from "../components/ui/PageWrapper";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

import EditProfileForm from "../components/profile/EditProfileForm";

import { useApp } from "../context/AppContext";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    profile,
    setProfile,
    vehicles,
    emergencies,
    bookings,
  } = useApp();

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-6 overflow-hidden">

          <Topbar />

          {/* Profile Header */}

          <div className="mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">

            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* Avatar */}

              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-6xl font-bold shadow-xl">
                {profile.name.charAt(0).toUpperCase()}
              </div>

              {/* Details */}

              <div className="text-center md:text-left">

                <h1 className="text-4xl font-extrabold">
                  {profile.name}
                </h1>

                <p className="mt-3 text-blue-100 text-lg">
                  📧 {profile.email}
                </p>

                <p className="text-blue-100">
                  📞 {profile.phone}
                </p>

                <p className="text-blue-100">
                  📍 {profile.location}
                </p>

                <div className="mt-5">

                  {profile.premium ? (
                    <span className="bg-yellow-400 text-yellow-900 px-5 py-2 rounded-full font-bold">
                      ⭐ Premium Member
                    </span>
                  ) : (
                    <span className="bg-white/20 px-5 py-2 rounded-full">
                      Standard Member
                    </span>
                  )}

                </div>

              </div>

            </div>

            <div className="mt-8 text-center md:text-left">

              <Button
                onClick={() => setIsModalOpen(true)}
              >
                ✏️ Edit Profile
              </Button>

            </div>

          </div>

          {/* Statistics */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            <Card className="hover:scale-105 transition duration-300">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Vehicles</h3>
                <span className="text-3xl">🚗</span>
              </div>

              <p className="text-5xl font-extrabold text-blue-600 mt-5">
                {vehicles.length}
              </p>
            </Card>

            <Card className="hover:scale-105 transition duration-300">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Emergencies</h3>
                <span className="text-3xl">🚨</span>
              </div>

              <p className="text-5xl font-extrabold text-red-600 mt-5">
                {emergencies.length}
              </p>
            </Card>

            <Card className="hover:scale-105 transition duration-300">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Bookings</h3>
                <span className="text-3xl">🔧</span>
              </div>

              <p className="text-5xl font-extrabold text-green-600 mt-5">
                {bookings.length}
              </p>
            </Card>

            <Card className="hover:scale-105 transition duration-300">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Membership</h3>
                <span className="text-3xl">⭐</span>
              </div>

              <p className="text-2xl font-extrabold text-yellow-500 mt-6">
                {profile.premium ? "Premium" : "Basic"}
              </p>
            </Card>

          </div>

          {/* Account Information */}

          <div className="mt-10">

            <Card className="hover:shadow-2xl transition duration-300">

              <h2 className="text-2xl font-bold mb-6">
                👤 Account Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-gray-50 rounded-xl p-5 hover:bg-blue-50 transition">
                  <p className="text-gray-500">Full Name</p>
                  <p className="font-bold text-lg mt-1">
                    {profile.name}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 hover:bg-blue-50 transition">
                  <p className="text-gray-500">Email Address</p>
                  <p className="font-bold text-lg mt-1">
                    {profile.email}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 hover:bg-blue-50 transition">
                  <p className="text-gray-500">Phone Number</p>
                  <p className="font-bold text-lg mt-1">
                    {profile.phone}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 hover:bg-blue-50 transition">
                  <p className="text-gray-500">Location</p>
                  <p className="font-bold text-lg mt-1">
                    {profile.location}
                  </p>
                </div>

              </div>

            </Card>

          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <EditProfileForm
              profile={profile}
              onSave={handleSave}
            />
          </Modal>

        </div>

      </div>
    </PageWrapper>
  );
};

export default Profile;