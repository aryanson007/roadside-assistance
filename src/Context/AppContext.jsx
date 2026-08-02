import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Aryan Soni",
          email: "aryan@example.com",
          phone: "+91 9876543210",
          location: "Patiala, Punjab",
          premium: false,
        };
  });

  const [vehicles, setVehicles] = useState(() => {
    const saved = localStorage.getItem("vehicles");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Honda City",
          },
          {
            id: 2,
            name: "Hyundai Creta",
          },
        ];
  });

  const [emergencies, setEmergencies] = useState(() => {
    const saved = localStorage.getItem("emergencies");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            problem: "Flat Tyre",
          },
        ];
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            mechanic: "Raj Mechanic",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem("emergencies", JSON.stringify(emergencies));
  }, [emergencies]);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,

        vehicles,
        setVehicles,

        emergencies,
        setEmergencies,

        bookings,
        setBookings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);