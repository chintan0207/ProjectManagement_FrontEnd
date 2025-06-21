import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-PRIMARY mb-2">ProjectBuild</h2>
          <p className="text-sm text-gray-600">
            Manage projects, assign tasks, chat with teams — all in one powerful
            platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/pricing" className="hover:text-PRIMARY">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-PRIMARY">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-PRIMARY">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-PRIMARY">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-PRIMARY">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-PRIMARY">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-PRIMARY">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-3">support@projectbuild.com</p>
          <div className="flex justify-center md:justify-start space-x-4 text-xl text-gray-600">
            <a href="#" aria-label="Twitter" className="hover:text-PRIMARY">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-PRIMARY">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-PRIMARY">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
        © {new Date().getFullYear()} ProjectBuild. All rights reserved.
      </div>
    </footer>
  );
};

export default HomeFooter;
