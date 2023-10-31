// ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="contact-us max-w-7xl mx-auto my-16">
        {/* Contact Image  */}
      <div className="contact-image">
        <img
          className="rounded-lg opacity-70"
          src="/contact1.jpg" // Contact image URL
          alt="Contact Us Image"
          style={{ width: "100%" }}
        />
      </div>
        {/* Contact texts  */}
      <p className="text-2xl mt-8 mb-6 text-center">
        For any inquiries or reservations, please feel free to contact us using
        the information below.
      </p>
      <div className="contact-details grid grid-cols-3 justify-items-center sm:text-center sm:grid sm:grid-cols-1 p-2">
        <p className="p-2">Address: 123 Restaurant Street,Dhaka, Bangladesh</p>
        <p className="p-2">Phone: +1234567890</p>
      </div>
    </div>
  );
};

export default ContactUs;
