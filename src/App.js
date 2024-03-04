import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Product from "./pages/Product.js";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import "./styles/Home.css";
import "./styles/Product.css";
import "./styles/Contact.css";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
