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
        <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-wrap md:-mx-4">
          <div data-aos="zoom-out-down" data-aos-duration="1000" data-aos-easing="ease-out" className="md:w-1/2 md:px-4">
            <h2  className="text-5xl font-extrabold text-gray-900 ">
              About Foodie
            </h2>
            <p className="mt-4 text-gray-500">
              MediHealth is an online health platform that connects patients with
              healthcare providers. Our mission is to improve access to quality
              healthcare for everyone, regardless of location or income.
            </p>
            <p className="mt-4 text-gray-500">
              With MediHealth, you can easily book appointments with doctors,
              dentists, therapists, and other healthcare providers, all from the
              comfort of your own home. Our platform is secure, reliable, and
              easy to use, so you can focus on getting the care you need.
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