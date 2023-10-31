import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Carousel1() {
  SwiperCore.use([Autoplay]);
  return (
    <div id="display" className="max-w-7xl mx-auto truncate">
      <h2 className="text-5xl text-center font-bold text-gray-700 mt-16 mb-8">
        Delish <span className="text-orange-400">Display</span>
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        {/* Slider images  */}
        <SwiperSlide>
          <img src="/slide1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide8.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
