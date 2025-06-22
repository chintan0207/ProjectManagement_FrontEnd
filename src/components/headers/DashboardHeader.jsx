import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import UserDropdown from "../user/UserDropdown";
import useAuthStore from "../../stores/useAuthStore";

const DashboardHeader = ({ onMobileToggle, onDesktopToggle }) => {
  const { user } = useAuthStore();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="h-16 shadow-sm border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-2xl" onClick={onMobileToggle}>
          <FiMenu />
        </button>
        <button
          className="hidden lg:inline-block text-2xl"
          onClick={onDesktopToggle}
        >
          <FiMenu />
        </button>
        <h1 className="text-lg font-semibold">Hello, {user?.username}</h1>
      </div>
      <div className="flex items-center gap-4 mr-5">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-100  hover:bg-PRIMARY/20 transition cursor-pointer"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-500 cursor-pointer" />
          ) : (
            <FaMoon className="text-gray-700 cursor-pointer" />
          )}
        </button>

        <button className="p-[6px] rounded-full bg-gray-100 hover:bg-PRIMARY/20 transition cursor-pointer">
          <IoNotificationsOutline className="text-xl text-PRIMARY" />
        </button>
        <UserDropdown />
      </div>
    </header>
  );
};

export default DashboardHeader;
