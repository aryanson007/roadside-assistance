import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/ui/PageWrapper";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";

import { useApp } from "../context/AppContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    profile,
    vehicles,
    emergencies,
    bookings,
  } = useApp();

  return (
    <PageWrapper>
     <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6 overflow-hidden">

        <Topbar />


        {/* ================= Welcome Banner ================= */}

        <div className="mt-8 relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white rounded-3xl p-8 shadow-2xl">


          {/* Decorative circles */}

          <div className="absolute -right-10 -top-10 w-52 h-52 bg-white/10 rounded-full"></div>

          <div className="absolute right-20 bottom-0 w-32 h-32 bg-white/10 rounded-full"></div>



          <div className="relative flex flex-col lg:flex-row justify-between items-center">


            <div>


              <h1 className="text-4xl lg:text-5xl font-extrabold">
                👋 Welcome Back,
                <br />
                {profile.name}
              </h1>


              <p className="mt-4 text-lg text-blue-100 max-w-xl">
                Manage your vehicles, find trusted mechanics,
                request emergency assistance and track your services easily.
              </p>



              <div className="flex flex-wrap gap-4 mt-8">


                <button
                  onClick={() => navigate("/emergency")}
                  className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  🚨 Emergency Help
                </button>



                <button
                  onClick={() => navigate("/mechanics")}
                  className="bg-blue-500/40 border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500/60 transition"
                >
                  🔧 Find Mechanic
                </button>


              </div>


            </div>




            <div className="mt-8 lg:mt-0">


              <div className="w-44 h-44 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-8xl shadow-inner">

                🚗

              </div>


            </div>


          </div>


        </div>





        {/* ================= Statistics ================= */}


        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">


          <StatCard
            icon="🚗"
            title="My Vehicles"
            value={vehicles.length}
          />


          <StatCard
            icon="🚨"
            title="Emergency Requests"
            value={emergencies.length}
          />


          <StatCard
            icon="🔧"
            title="Bookings"
            value={bookings.length}
          />


          <StatCard
            icon="⭐"
            title="Premium"
            value={profile.premium ? "Yes" : "No"}
          />


        </div>






        {/* ================= Main Sections ================= */}



        <div className="grid lg:grid-cols-2 gap-8 mt-10">



          {/* Quick Actions */}



          <div className="bg-white rounded-3xl shadow-xl p-8">


            <h2 className="text-2xl font-bold mb-6">
              ⚡ Quick Actions
            </h2>



            <div className="space-y-4">



              <button
                onClick={() => navigate("/emergency")}
                className="w-full bg-red-600 text-white p-4 rounded-xl hover:bg-red-700 transition shadow-md"
              >
                🚨 Request Emergency Help
              </button>



              <button
                onClick={() => navigate("/vehicles")}
                className="w-full bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition shadow-md"
              >
                🚗 Manage Vehicles
              </button>



              <button
                onClick={() => navigate("/mechanics")}
                className="w-full bg-orange-500 text-white p-4 rounded-xl hover:bg-orange-600 transition shadow-md"
              >
                🔧 Find Nearby Mechanics
              </button>



              <button
                onClick={() => navigate("/premium")}
                className="w-full bg-yellow-500 text-white p-4 rounded-xl hover:bg-yellow-600 transition shadow-md"
              >
                ⭐ Upgrade Premium
              </button>



            </div>


          </div>







          {/* History */}



          <div className="bg-white rounded-3xl shadow-xl p-8">



            <h2 className="text-2xl font-bold mb-6">
              📚 History
            </h2>




            <div className="space-y-4">



              <button
                onClick={() => navigate("/booking-history")}
                className="w-full bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition shadow-md"
              >
                📖 Booking History
              </button>



              <button
                onClick={() => navigate("/emergency-history")}
                className="w-full bg-red-600 text-white p-4 rounded-xl hover:bg-red-700 transition shadow-md"
              >
                🚨 Emergency History
              </button>






              <div className="border-t pt-6 mt-6">


                <h3 className="text-lg font-bold mb-5">
                  Recent Activity
                </h3>




                <div className="space-y-5">



                  {vehicles.length > 0 && (

                    <div className="flex items-center gap-4">

                      <div className="bg-blue-100 p-3 rounded-xl text-2xl">
                        🚗
                      </div>

                      <div>

                        <p className="font-semibold">
                          Latest Vehicle Added
                        </p>

                        <p className="text-gray-500 text-sm">
                          {vehicles[vehicles.length - 1].name}
                        </p>

                      </div>

                    </div>

                  )}






                  {bookings.length > 0 && (

                    <div className="flex items-center gap-4">

                      <div className="bg-orange-100 p-3 rounded-xl text-2xl">
                        🔧
                      </div>


                      <div>

                        <p className="font-semibold">
                          Latest Booking
                        </p>


                        <p className="text-gray-500 text-sm">
                          {bookings[bookings.length - 1].mechanic}
                        </p>


                      </div>


                    </div>

                  )}







                  {emergencies.length > 0 && (

                    <div className="flex items-center gap-4">


                      <div className="bg-red-100 p-3 rounded-xl text-2xl">
                        🚨
                      </div>


                      <div>

                        <p className="font-semibold">
                          Latest Emergency
                        </p>


                        <p className="text-gray-500 text-sm">
                          {emergencies[emergencies.length - 1].problem}
                        </p>


                      </div>


                    </div>


                  )}








                  <div className="flex items-center gap-4">


                    <div className="bg-yellow-100 p-3 rounded-xl text-2xl">
                      ⭐
                    </div>


                    <div>


                      <p className="font-semibold">
                        Premium Membership
                      </p>


                      <p className="text-gray-500 text-sm">
                        {profile.premium ? "Activated" : "Not Activated"}
                      </p>


                    </div>


                  </div>




                </div>



              </div>




            </div>



          </div>




        </div>



      </div>



     </div>
    </PageWrapper>
);
};

export default Dashboard;