import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/headers/DashboardHeader";
import { sidebarItems } from "../utils/Constants";

const MainLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        >
          <aside
            className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
              <h2 className="text-xl font-bold text-PRIMARY">ProjectBuild</h2>
              <button onClick={() => setIsMobileSidebarOpen(false)}>
                <FiX className="text-gray-600" size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 text-sm font-medium">
              {sidebarItems.map(({ label, path, icon }) => (
                <NavLink
                  to={path}
                  key={label}
                  onClick={() => setIsMobileSidebarOpen(false)} // close on click
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-PRIMARY hover:text-white ${
                      isActive ? "bg-PRIMARY text-white" : "text-gray-800"
                    }`
                  }
                >
                  {icon}
                  {label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader
          onMobileToggle={() => setIsMobileSidebarOpen(true)}
          onDesktopToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
