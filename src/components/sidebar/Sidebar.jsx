import React from "react";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`hidden lg:flex flex-col bg-white border-r transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {isCollapsed ? (
          <span className="text-xl font-bold">PB</span>
        ) : (
          <h2 className="text-xl font-bold">ProjectBuild</h2>
        )}
      </div>
      <nav className="space-y-2 p-4 text-sm">
        <button className="w-full text-left p-2 rounded hover:bg-gray-100">
          {isCollapsed ? "🏠" : "🏠 Dashboard"}
        </button>
        <button className="w-full text-left p-2 rounded hover:bg-gray-100">
          {isCollapsed ? "📊" : "📊 Analytics"}
        </button>
        <button className="w-full text-left p-2 rounded hover:bg-gray-100">
          {isCollapsed ? "🛒" : "🛒 Ecommerce"}
        </button>
        <button className="w-full text-left p-2 rounded hover:bg-gray-100">
          {isCollapsed ? "📁" : "📁 Project"}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
