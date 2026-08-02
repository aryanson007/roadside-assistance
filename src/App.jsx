import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Vehicles from "./pages/Vehicles";
import Mechanics from "./pages/Mechanics";
import Emergency from "./pages/Emergency";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";
import BookingHistory from "./pages/BookingHistory";
import EmergencyHistory from "./pages/EmergencyHistory";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/vehicles" element={<Vehicles />} />

      <Route path="/mechanics" element={<Mechanics />} />

      <Route path="/emergency" element={<Emergency />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/premium" element={<Premium />} />

      <Route path="*" element={<NotFound />} />

      <Route path="/booking-history" element={<BookingHistory />} />

      <Route path="/emergency-history" element={<EmergencyHistory />} />

    </Routes>
  );
}

export default App;