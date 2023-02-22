import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/addProduct/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendor-add-list" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
