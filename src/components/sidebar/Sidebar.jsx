import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaFolderOpen, FaRegStickyNote, FaTasks } from "react-icons/fa";
import { HiViewBoards } from "react-icons/hi";

const Sidebar = ({ isCollapsed }) => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: <MdSpaceDashboard size={20} />,
    },
    {
      label: "Projects",
      icon: <FaFolderOpen size={18} />,
    },
    {
      label: "Notes",
      icon: <FaRegStickyNote size={18} />,
    },
    {
      label: "Tasks",
      icon: <FaTasks size={18} />,
    },
    {
      label: "Kanban Board",
      icon: <HiViewBoards size={20} />,
    },
  ];

  return (
    <aside
      className={`hidden lg:flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {isCollapsed ? (
          <span className="text-xl font-bold text-PRIMARY">PB</span>
        ) : (
          <h2 className="text-xl font-bold text-PRIMARY">ProjectBuild</h2>
        )}
      </div>
      <nav className="space-y-2 p-4 text-sm text-black">
        {menuItems.map(({ label, icon }) => (
          <button
            key={label}
            className="w-full flex items-center gap-2 text-left p-2 rounded font-semibold text-gray-500 hover:bg-PRIMARY hover:text-white transition-colors"
          >
            <span className=""> {icon}</span>
            {!isCollapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
