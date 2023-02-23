import React from "react";
import styles from "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/addProduct/AddProduct";
import Login from "./components/AuthFolder/Login";
import Register from "./components/AuthFolder/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendor-add-list" element={<AddProduct />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
