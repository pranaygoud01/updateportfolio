import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import MobileNav from "./pages/MobileNav";
import MobileFooter from "./pages/MobileFooter";
function App() {
  return (
    <Router>
      <div className="w-screen h-fit flex max-lg:flex-col overflow-x-hidden">
        <div className="w-[17%] max-lg:hidden">
          <NavBar />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="w-[83%] max-lg:w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="lg:hidden">
          <MobileFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
