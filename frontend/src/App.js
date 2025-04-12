import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses"; // Assuming this is your course page
import EventGallary from "./Pages/EventGallary"; 
import Trainers from "./Pages/Trainers"; 
import ContactUs from "./Pages/ContactUs"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/event-gallery" element={<EventGallary />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
