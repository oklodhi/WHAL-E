import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client'
import "./assets/index.css";
import App from "./App";

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
