import React from 'react';

import About from '../About/About';
import './Home.css'
import Slider from '../Slider/Slider';
import ContactForm from '../Contact/ContactForm';
import Booking from '../Booking/Booking';
import Foods from '../Foods/Foods';



const Home = () => {
    return (
        <div>
           {/*  <div
        className="hero h-screen "
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            The website offers a range of services to support the health and wellness needs of individuals, including telemedicine consultations, online prescription refills, and health products for sale.
            </p>
            <button className="btn btn-success btn-outline">Get Started</button>
          </div>
        </div>
      </div> */}
      
      <Slider></Slider>
      <Foods></Foods>
      <About></About>
      <Booking></Booking>
      <ContactForm></ContactForm>
            
        </div>
        
    );
};

export default Home;