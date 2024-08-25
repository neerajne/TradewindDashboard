import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <App />
    </Router>
  </React.StrictMode>
);
