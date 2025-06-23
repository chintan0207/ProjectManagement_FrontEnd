import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../components/headers/HomeHeader";
import HomeFooter from "../components/footer/HomeFooter";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <HomeHeader />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
