/* eslint-disable no-undef */
import { Outlet } from "react-router-dom";
import HomeFooter from "../components/footer/HomeFooter";
import HomeHeader from "../components/headers/HomeHeader";
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
