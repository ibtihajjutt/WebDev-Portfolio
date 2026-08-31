import React, { useCallback, useState } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const openProject = useCallback((url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 100}%`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-[90%] mx-auto relative lg:h-[92vh] md:h-[45vh] h-[40vh]">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20"></div>
        <div className="slider-container flex overflow-hidden lg:h-full md:h-[45vh] h-[38vh]">
          {slides.map((slide, index) => (
            <div
              className="slider-item w-full h-full flex-none relative cursor-pointer"
              key={index}
              onClick={() => openProject(slide.liveUrl)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(slide.liveUrl);
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Open ${slide.title} website`}
            >
              {slide.img ? (
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-black-300 to-black-400 flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-white-50/70">Client Website</p>
                    <h3 className="mt-4 text-3xl md:text-5xl font-bold text-white-50">{slide.title}</h3>
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-black-300 bg-opacity-90 px-5 py-4" onClick={(event) => event.stopPropagation()}>
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3 px-3 md:px-12">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white-50/70">{slide.category}</p>
                    <p className="md:text-xl text-sm lg:text-4xl lg:font-extrabold text-white-50 opacity-90">
                      {slide.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(slide.liveUrl);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-50/60 bg-blue-50/10 px-3 py-2 md:px-4 md:py-2.5 text-[0.7rem] md:text-sm font-semibold text-white-50 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-300 active:scale-[0.98]"
                    aria-label={`Visit ${slide.title} website`}
                  >
                    <span>Visit Website</span>
                    <img
                      src="/WebDev-Portfolio/images/arrowupright.svg"
                      alt="arrow"
                      className="h-4 w-4 brightness-200 invert md:h-5 md:w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <button
          type="button"
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-10 h-10 flex-center border-0"
          aria-label="Previous project"
        >
          <img src="/WebDev-Portfolio/images/CaretLeft.svg" alt="left" className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-10 h-10 flex-center border-0"
          aria-label="Next project"
        >
          <img src="/WebDev-Portfolio/images/CaretRight.svg" alt="Right" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;