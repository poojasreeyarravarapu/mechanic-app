import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CalendarCheckIcon,
  WalletIcon,
  UserIcon,
} from "lucide-react"; // Use any icon library like lucide-react

export default function BottomNav() {
  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon size={20} /> },
    { name: "Bookings", path: "/appointments", icon: <CalendarCheckIcon size={20} /> },
    { name: "Wallet", path: "/wallet", icon: <WalletIcon size={20} /> },
    { name: "Profile", path: "/profile", icon: <UserIcon size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#181311] shadow-md border-t border-gray-200 dark:border-gray-700 p-2 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-xs font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-500 dark:text-gray-400"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
