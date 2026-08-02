import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useApp();

  const menuItems = [
    ["📊","Dashboard","/dashboard"],
    ["🚗","Vehicles","/vehicles"],
    ["🚨","Emergency","/emergency"],
    ["🔧","Mechanics","/mechanics"],
    ["📖","Bookings","/booking-history"],
    ["🕘","Emergency History","/emergency-history"],
    ["👤","Profile","/profile"],
    ["⭐","Premium","/premium"],
  ];

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-white p-6 hidden lg:block">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-blue-400">RoadAssist</h1>
        <p className="text-gray-400 text-sm mt-1">Smart roadside support</p>
      </div>

      <div className="bg-white/10 rounded-2xl p-4 mb-8 border border-white/10">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
          {profile.name?.charAt(0)}
        </div>
        <h3 className="mt-3 font-bold">{profile.name}</h3>
        <p className="text-xs text-gray-300">{profile.premium ? "⭐ Premium Member" : "Standard Member"}</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map(([icon,name,path]) => (
          <button
            key={path}
            onClick={()=>navigate(path)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition ${
              location.pathname===path
              ? "bg-blue-600 shadow-lg"
              : "hover:bg-white/10"
            }`}
          >
            <span>{icon}</span>
            <span className="font-medium">{name}</span>
          </button>
        ))}
      </nav>

      <button
        onClick={()=>navigate("/")}
        className="mt-10 w-full bg-red-500/20 hover:bg-red-500 px-4 py-3 rounded-xl transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
