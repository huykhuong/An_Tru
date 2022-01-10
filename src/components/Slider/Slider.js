import React, { useEffect, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { motion } from "framer-motion";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  // const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative -mt-[64px] lg:-mt-[88px] h-screen flex justify-center items-center">
      <ArrowNarrowLeftIcon
        className="hidden lg:block absolute top-1/2 left-20 h-8 w-8 text-white z-20 cursor-pointer select-none"
        onClick={prevSlide}
      />
      <ArrowNarrowRightIcon
        className="hidden lg:block absolute top-1/2 right-20 h-8 w-8 text-lg text-white z-20 cursor-pointer select-none"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-1 transition-all duration-700 ease-in"
                : "opacity-0 transition-all duration-700 ease-out"
            }
            key={index}
          >
            {index === current && (
              <div>
                <div className="absolute flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-black bg-opacity-40 text-center">
                  <motion.div
                    variants={{
                      initial: {
                        y: 100,
                        opacity: 0,
                      },
                      animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                          ease: [0.6, -0.05, 0.01, 0.99],
                        },
                      },
                    }}
                    initial="initial"
                    whileInView="animate"
                  >
                    <h1 className="upperHeading">{slide.title}</h1>
                    <h1 className="lowerHeading">{slide.description}</h1>
                  </motion.div>
                </div>
                <Image
                  loading="lazy"
                  objectPosition="center"
                  objectFit="cover"
                  layout="fill"
                  src={slide.image}
                  alt="travel image"
                  className="w-screen h-screen"
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
