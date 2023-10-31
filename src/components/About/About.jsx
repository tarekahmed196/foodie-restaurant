import React, { useEffect } from 'react';
import about1 from './about1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease',
        });
      }, []);

    return (
        <section id='about' className="bg-white py-32">
      <div className="max-w-7xl mx-auto py-4 sm:px-0 lg:px-0">
        <div className="md:flex md:flex-wrap md:-mx-4">
          <div data-aos="zoom-out-down" data-aos-duration="1000" data-aos-easing="ease-out" className="md:w-1/2 md:px-4">
            <h2  className="text-5xl font-extrabold text-gray-900 ">
              About <span className="text-orange-200">Foodie</span>
            </h2>
            <p className="mt-4 text-gray-500">
            Foodie Restaurant, nestled in the heart of the bustling city, is an exquisite culinary haven that captures the essence of gastronomic delight. With an ambience that seamlessly marries modern sophistication and cozy warmth, this restaurant offers a tantalizing journey through a diverse array of flavors and textures. 
            </p>
            <p className="mt-4 text-gray-500">
            At Foodie Restaurant, the culinary adventure begins with an array of mouthwatering appetizers that awaken the taste buds and set the stage for a memorable feast. Whether it's the delicate balance of flavors in the Thai-inspired shrimp lemongrass soup or the savory richness of the truffle-infused wild mushroom bruschetta, each dish is a testament to the chef's artistry and commitment to culinary excellence. 
            </p>
          </div>
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="md:w-1/2 md:px-4 mt-8 md:mt-0">
            <img
              src={about1}
              alt="About FooDie"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;