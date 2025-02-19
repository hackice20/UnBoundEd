import React from "react";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import LandingPage from "./Pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import Certificate from "./Pages/Certificate";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
