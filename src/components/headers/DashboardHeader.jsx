import React from "react";
import { FiMenu } from "react-icons/fi";

const DashboardHeader = ({ onMobileToggle, onDesktopToggle }) => {
  return (
    <header className="h-16 bg-gray-50 border-b flex items-center justify-between px-4">
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
        <h1 className="text-lg font-semibold">Ecommerce Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button>🌐</button>
        <button>🔔</button>
        <button>👤</button>
      </div>
    </header>
  );
};

export default DashboardHeader;
