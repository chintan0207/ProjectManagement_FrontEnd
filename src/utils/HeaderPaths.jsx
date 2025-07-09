import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export function FormHeaderPaths({ page, prevLink, prevPage }) {
  return (
    <div className="items-end justify-between space-y-4 sm:flex sm:space-y-0 mb-2">
      <div>
        <nav className="flex justify-between">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                <FaHome className="me-2.5 h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <MdKeyboardArrowRight className="text-gray-400 h-5 w-5 rtl:rotate-180" />
                <Link
                  to={prevLink}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ms-2"
                >
                  {prevPage}
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <MdKeyboardArrowRight className="text-gray-400 h-5 w-5 rtl:rotate-180" />
                <div className="ms-1 text-sm font-medium text-PRIMARY-500 hover:text-primary-600 md:ms-2">
                  {page}
                </div>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export function DetailHeaderPaths({ label }) {
  return (
    <div className="mb-2 items-end justify-between space-y-2 sm:flex sm:space-y-0 md:mb-4">
      <div>
        <nav className="flex justify-between">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                <FaHome className="me-2.5 h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <MdKeyboardArrowRight className="text-gray-400 h-5 w-5 rtl:rotate-180" />
                <div className="ms-1 text-sm font-medium text-PRIMARY-500 hover:text-primary-600 md:ms-2">
                  {label}
                </div>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
