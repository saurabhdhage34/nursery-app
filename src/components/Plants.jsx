import React from "react";

function Plants() {
  const plantList = [
    {
      name: "Aloe Vera",
      price: "₹640",
      oldPrice: "₹740",
      desc: "Fresh aloe leaves used in medicine.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Kalanchoe",
      price: "₹500",
      oldPrice: "₹550",
      desc: "Beautiful flowering plant.",
      img: "https://images.unsplash.com/photo-1501004318642-b39e6451bec7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Syngonium",
      price: "₹640",
      oldPrice: "₹740",
      desc: "Decorative leafy plant.",
      img: "https://images.unsplash.com/photo-1501004318643-b39e6451bec8?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Coleus",
      price: "₹640",
      oldPrice: "₹740",
      desc: "Colorful indoor plant.",
      img: "https://images.unsplash.com/photo-1501004318644-b39e6451bec9?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🌿 Our Plants</h2>

      <div className="row">
        {plantList.map((plant, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">

              {/* Image */}
              <div className="position-relative">
                <img
                  src={plant.img}
                  className="card-img-top"
                  alt={plant.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                {/* Icons */}
                <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
                  <span className="bg-white rounded-circle px-2 py-1">🤍</span>
                  <span className="bg-white rounded-circle px-2 py-1">⚖️</span>
                </div>
              </div>

              {/* Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{plant.name}</h5>
                <p className="text-muted small">{plant.desc}</p>

                <p className="text-success small">✔ In Stock</p>

                <div className="mb-2">
                  <span className="text-decoration-line-through text-muted me-2">
                    {plant.oldPrice}
                  </span>
                  <span className="fw-bold">{plant.price}</span>
                </div>

                <button className="btn btn-success mt-auto">
                  Buy Now
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plants;