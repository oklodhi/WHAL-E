import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Views/Home/HomePage";
import MapPage from "./Views/Map/MapPage";
import About from "./Views/About/About";
import SponsorsPage from "./Views/Sponsors/SponsorsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
