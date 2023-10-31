import React from "react";
import About from "../About/About";
import "./Home.css";
import Slider from "../Slider/Slider";
import Foods from "../Foods/Foods";
import Features from "../Features/Features";
import Services from "../Services/Services";
import ContactUs from "../Contact/ContactUs";
import SignUp from "../Contact/SignUp";
import Carousel1 from "../Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Foods></Foods>
      <Carousel1></Carousel1>
      <Services></Services>
      <Features></Features>
      <About></About>
      <ContactUs></ContactUs>
      <SignUp></SignUp>
    </div>
  );
};

export default Home;
