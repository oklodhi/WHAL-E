import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPage from "./Views/Map/MapPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
