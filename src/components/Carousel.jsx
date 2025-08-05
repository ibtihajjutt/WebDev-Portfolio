import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const next = (prevSlide + 1) % slides.length;
      console.log("Next Slide:", next);
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const prev = (prevSlide - 1 + slides.length) % slides.length;
      console.log("Previous Slide:", prev);
      return prev;
    });
  };

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 100}%`, // Use percentage for consistent alignment
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-[90%] mx-auto relative lg:h-[80vh] md:h-[80vh] h-[80vh]">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20"></div>
        <div className="slider-container flex overflow-hidden">
          {slides.map((slide, index) => (
            <div
              className="slider-item w-full h-full flex-none relative"
              key={index}
            >
              <img
                src={slide.img}
                alt="slide"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
                <div className="w-full h-full flex justify-between items-center">
                  <div className="flex-center gap-2">
                    <p className="md:text-xl text-sm text-white-50 opacity-80">
                      {index + 1}.
                    </p>
                    <p className="md:text-xl text-sm text-white-50 opacity-80">
                      {slide.title}
                    </p>
                  </div>
                  <Link
                    to={`/project/${slide.id}`}
                    className="flex-center gap-5 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <p className="text-lg hidden md:block text-white-50 opacity-80">
                      Preview Project
                    </p>
                    <img
                      src="/images/arrowupright.svg"
                      alt="arrow"
                      className="md:w-8 md:h-8 w-5 h-5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <div
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-10 h-10 flex-center"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-4 h-4" />
        </div>
        <div
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-10 h-10 flex-center"
        >
          <img src="/images/CaretRight.svg" alt="Right" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;