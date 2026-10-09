"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    waitForAnimate: false,
  };

  const slides = [
    {
      desktop: "/hero/desk11.png",
      mobile: "/hero/mob1.png",
    },
    {
      desktop: "/hero/desk12.png",
      mobile: "/hero/mob2.png",
    },
    // {
    //   desktop: "/hero/d1.jpeg",
    //   mobile: "/hero/mobile3.png",
    // },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings} className="w-full">
        {slides.map((slide) => (
          <div key={slide.desktop} className="w-full">
            <picture>
              <source media="(min-width: 640px)" srcSet={slide.desktop} />
              <img
                src={slide.mobile}
                alt="Banner"
                className="block w-full h-auto object-cover"
              />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;