import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
