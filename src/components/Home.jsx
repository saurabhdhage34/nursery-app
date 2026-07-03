import React from "react";

import { Link } from "react-router-dom";

import same from "../assets/same.png";
import Plants from "./Plants";
import Products from "./Products";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="container-fluid py-5" style={{
      background: "linear-gradient(to right, #1f4d3a, #8bbf7a)",
      color: "white",
      height: "100vh"
    }}>
      
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left */}
          <div className="col-md-6">
            <p className="opacity-75">Nature, Delivered.</p>
            <h1 className="display-4 fw-bold">Bring Nature Closer</h1>
            <p>
              Turn your home into a living sanctuary with our curated plant collection.
            </p>
             <Link to="/Products" className="text-decoration-none">
            <button className="btn btn-success rounded-pill px-4">
              Shop Now →
            </button>
            </Link>
          </div>

          {/* Right */}
          <div className="col-md-6 text-center">
            <img
              src={same} alt="plant"
              
              className="img-fluid rounded-4"
              style={{ maxHeight: "400px" }}
            />
          </div>

        </div>
      </div>

      <Plants/>
      <Products/>
      <Gallery/>
      <Contact/>
      <Footer />

    </div>
  );
}

export default Home;