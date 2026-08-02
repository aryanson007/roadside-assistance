import { useApp } from "../../context/AppContext";

const Topbar = () => {
  const { profile } = useApp();

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 px-6 py-5 flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">Welcome back 👋</p>
        <h2 className="text-2xl font-extrabold text-gray-800">
          {profile.name}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-semibold">
          {profile.premium ? "⭐ Premium" : "Basic"}
        </div>

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl">
          {profile.name?.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
