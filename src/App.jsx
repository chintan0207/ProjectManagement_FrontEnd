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
import { ProtectedRoute } from "./utils/ProtectedRoute";
import Unauthorized from "./Pages/Unauthorized";
import VerifyEmailPage from "./Pages/VerifyEmailPage";
import Notes from "./Pages/Notes";
import Tasks from "./Pages/Tasks";
import { Projects } from "./components/Projects/Projects";

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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify/:token" element={<VerifyEmailPage />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/tasks" element={<Tasks />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
