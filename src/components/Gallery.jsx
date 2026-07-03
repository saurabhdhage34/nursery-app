import React from "react";


const galleryData = [
  { id: 1, img: "https://ankurnursery.com/wp-content/uploads/2024/01/rent-a-plant-services.jpg" },
  { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrvCQWEkNP1OWqcguT6j8Tth0uL-uBcdbgveTyulUwtVr2LQT4E7aCt4&s=10" },
  { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyW16sFuSj4jmSLuRKHsiJ5pHvxfgWBJkoNk_goxqPjWWCO_uxIYHmoGa&s=10" },
  { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eBOVdT2LrIioGPNV9oTSiE_FDkAijsk1myEH7WKriAaK6B82F8aWYufQ&s=10" },
  { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnVS8kyqN95oRs3tA8KC5Cl6TqDpPqp0GS0LV7wZ9pS2DDEHEgHs6uhI&s=10" },
  { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-WYTcHbR1hxqt7CFj2yZjlbbakalJ3TgG9O8tcvo1SFk2tPe7AJs5QyK&s=10" },
  { id: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt06zUVHdH96mNHyDpkN4WHJC6E53jD3HVpwWObIOk4hUqD0L0S75aNM&s=10" },
  { id: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHk7LN6qlcr5tHaJ9JnlE_x-QtcGGOtaQEyQDDmgXhQ&s=10" },
  { id: 9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUJNfxmNKaDRq7bsj8Vs3sKbFh827jn-WLBzwg2G8Sw&s" },
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      <div className="masonry">
        {galleryData.map((item) => (
          <div className="masonry-item" key={item.id}>
            <img src={item.img} alt="plant" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;