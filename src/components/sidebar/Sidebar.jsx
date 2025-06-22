import { MdSpaceDashboard } from "react-icons/md";
import { FaFolderOpen, FaStickyNote, FaTasks } from "react-icons/fa";
// import { HiViewBoards } from "react-icons/hi";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  // const [sections, setSections] = useState({
  //   projects: false,
  //   tasks: false,
  // });

  // const toggleSection = (key) => {
  //   setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  const navItemClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-PRIMARY hover:text-white transition ${
      isActive ? "bg-PRIMARY text-white" : "text-gray-800"
    }`;

  return (
    <aside
      className={`hidden lg:flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-PRIMARY">
          {isCollapsed ? "PB" : "ProjectBuild"}
        </h2>
      </div>

      <nav className="flex flex-col space-y-2 p-3 text-sm">
        <NavLink to="/dashboard" className={navItemClasses}>
          <MdSpaceDashboard size={20} />
          {!isCollapsed && "Dashboard"}
        </NavLink>

        <NavLink to="/projects" className={navItemClasses}>
          <FaFolderOpen size={18} />
          {!isCollapsed && "projects"}
        </NavLink>

        <NavLink to="/tasks" className={navItemClasses}>
          <FaTasks size={18} />
          {!isCollapsed && "tasks"}
        </NavLink>

        <NavLink to="/notes" className={navItemClasses}>
          <FaStickyNote size={18} />
          {!isCollapsed && "Notes"}
        </NavLink>

        {/* Projects Section */}
        {/*
            <CollapsibleSection
          label="Projects"
          icon={<FaFolderOpen size={18} />}
          isOpen={sections.projects}
          onClick={() => toggleSection("projects")}
          items={[
            { label: "All Projects", path: "/projects" },
            { label: "Create Project", path: "/projects/create" },
          ]}
          isCollapsed={isCollapsed}
        />
          */}
      </nav>
    </aside>
  );
};

// function CollapsibleSection({
//   icon,
//   label,
//   isOpen,
//   onClick,
//   items,
//   isCollapsed,
// }) {
//   return (
//     <div>
//       <button
//         onClick={onClick}
//         className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-PRIMARY hover:text-white text-gray-800"
//       >
//         <div className="flex items-center gap-2">
//           {icon} {!isCollapsed && label}
//         </div>
//         {!isCollapsed &&
//           (isOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />)}
//       </button>

//       {isOpen && !isCollapsed && (
//         <div className="ml-6 mt-1 space-y-1 text-gray-700 text-sm">
//           {items.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `block hover:text-PRIMARY cursor-pointer ${
//                   isActive ? "text-PRIMARY font-semibold" : "text-gray-700"
//                 }`
//               }
//             >
//               • {item.label}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default Sidebar;
