import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Toaster } from "./components/ui/Toaster";
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import Dashboard from "./Pages/DashBoard";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PricingPage from "./Pages/PricingPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CookiePolicy from "./Pages/CookiePolicy";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/unauthorized" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
