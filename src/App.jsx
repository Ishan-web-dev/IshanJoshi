import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import About from "./component/AboutPages/About";
import Skills from "./component/Skills/Skills";
import Experience from "./component/Experience/Experience";
import Resume from "./component/Resume/Resume";
import Contact from "./component/Contact/Contact";
import ProjectDeteils from "./component/Projects/ProjectDeteils";
import ProjectMain from "./component/Projects/ProjectMain";
import ScrollOnTop from "./component/ScrollOnTop/ScrollOnTop";

// ✅ Import Loader
import Loader from "./component/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loader

    return () => clearTimeout(timer);
  }, []);

  // Show loader first
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollOnTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProjectMain" element={<ProjectMain />} />
        <Route path="/project/:id" element={<ProjectDeteils />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
