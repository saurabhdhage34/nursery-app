import React, { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "new",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_01A7HkBXdYYJhKZLlbfN9VKrQSL8KU9bOlr8-WC7UaRGrkrAJ48RUa2&s=10"
  },
  {
    id: 2,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "popular",
    img: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
  },
  {
    id: 3,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "new",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 4,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "popular",
    img: "https://images.unsplash.com/photo-1524594154908-edd8c3d7f6c1"
  },
  {
    id: 5,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "new",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 6,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "popular",
    img: "https://images.unsplash.com/photo-1512427691650-82cb7d50b6d3"
  },
  {
    id: 7,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "new",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 8,
    name: "Haworthia cooperi",
    price: 1200,
    oldPrice: 1300,
    type: "popular",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  }
];

function Products() {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? data
      : data.filter((item) => item.type === filter);

  return (
    <div className="products-container">
      <h2>Our Products</h2>

      {/* ✅ FILTER BAR */}
      <div className="filter-bar">
        <span
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </span>

        <span
          className={filter === "new" ? "active" : ""}
          onClick={() => setFilter("new")}
        >
          New
        </span>

        <span
          className={filter === "popular" ? "active" : ""}
          onClick={() => setFilter("popular")}
        >
          Popular
        </span>
      </div>

      {/* ✅ PRODUCTS */}
      <div className="product-grid">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <div className="rating">
              {[1, 2, 3, 4].map((i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="light" />
            </div>

            <div className="price-container">
              <div>
                <span className="current-price">${item.price}</span>
                <span className="old-price">${item.oldPrice}</span>
              </div>

              <button className="cart-btn">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;