import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <div className="w-screen h-fit flex overflow-x-hidden">
        <div className="w-[17%] max-md:hidden">
          <NavBar />
        </div>
        <div className="w-[83%] max-md:w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
