
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plants from "./components/Plants";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";
import React, { useState } from "react";


import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
   const [search, setSearch] = useState("");
  return (
    <div className="App-container">
      <Navbar setSearch={setSearch} />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants search={search} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      

   <Footer/>
    </div>
  );
}

export default App;
