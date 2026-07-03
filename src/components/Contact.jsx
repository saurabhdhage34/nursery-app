import React from "react";


function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>

      {/* MAIN SECTION */}
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h2>We'd Love To Hear From You</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>

          <div className="info-box">
            <div>📞 Call Us<br/><span>+123 4567 890</span></div>
            <div>📧 Email<br/><span>plant@gmail.com</span></div>
            <div>📍 Location<br/><span>Pune, India</span></div>
            <div>⏰ Work Hour<br/><span>7 AM - 6 PM</span></div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <div className="row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone" />
          </div>

          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button>Send Now</button>
        </div>

      </div>

      {/* MAP */}
      <iframe
        className="map"
        src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>

    </div>
  );
}

export default Contact;