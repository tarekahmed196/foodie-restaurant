// ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="contact-us max-w-7xl mx-auto my-16">
        {/* Contact Image  */}
      <div className="contact-image">
        <img
          className="rounded-lg opacity-70"
          src="/public/contact1.jpg" // Contact image URL
          alt="Contact Us Image"
          style={{ width: "100%" }}
        />
      </div>
        {/* Contact texts  */}
      <p className="text-2xl mt-8 mb-6 text-center">
        For any inquiries or reservations, please feel free to contact us using
        the information below.
      </p>
      <div className="contact-details grid grid-cols-3 justify-items-center">
        <p>Address: 123 Restaurant Street, Mirpur, Dhaka, Bangladesh</p>
        <p>Phone: +1234567890</p>
        <p>Email: info@foodierestaurant.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
