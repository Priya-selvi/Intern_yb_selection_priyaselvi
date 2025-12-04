import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import First from "./pages/First";
import About from "./pages/About";
import Edit from "./pages/Edit";
import "./App.css";

export default function App() {
  const [details, setDetails] = useState({
    name: "Priya Selvi",
    department: "IT",
    location: "Tirunelveli",
    year: "3rd Year",
    email: "priyaselvi@example.com"
  });

  return (
    <Router>
      <div className="container">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/edit">Edit</Link>
        </nav>

        <Routes>
          <Route path="/" element={<First data={details} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/edit"
            element={<Edit data={details} onSave={setDetails} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
