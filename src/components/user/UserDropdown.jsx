import { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaCog,
  FaUsers,
  FaGithub,
  FaPhone,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const ref = useRef(null);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <img
        onClick={() => setOpen(!open)}
        src="https://i.pravatar.cc/40?img=11"
        alt="avatar"
        className="w-10 h-10 rounded-full cursor-pointer border-2 border-PRIMARY"
      />

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="px-4 py-3 border-b border-PRIMARY-100 flex gap-3">
            <img
              onClick={() => setOpen(!open)}
              src="https://i.pravatar.cc/40?img=11"
              alt="avatar"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-PRIMARY"
            />
            <div>
              <p className="text-sm font-semibold">{user?.fullname}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>

          <div className="py-2">
            <DropdownItem icon={<FaUser />} label="Profile" />
            <DropdownItem icon={<FaCog />} label="Settings" />
            <DropdownItem icon={<FaUsers />} label="Team" />
            <DropdownItem icon={<FaGithub />} label="Github" />
          </div>
          <div className="py-2 border-t border-PRIMARY-100">
            <DropdownItem
              icon={<FaSignOutAlt />}
              label="Log Out"
              onClick={handleLogout}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition"
  >
    <span className="text-gray-500">{icon}</span>
    <span>{label}</span>
  </button>
);

export default UserDropdown;
