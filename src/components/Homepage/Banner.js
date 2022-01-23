import React, { useEffect, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { motion } from "framer-motion";

const SliderData = [
  {
    title: "Xin chào",
    description: "Nhà hàng An Trú hân hạnh phục vụ quý khách",
    image:
      "https://images.unsplash.com/photo-1630492782892-74f99406dc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Ẩm thực chay",
    description: "Lan tỏa niềm yêu thương",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "An Trú",
    description: "Nơi phục vụ các món ăn nuôi dưỡng tâm hồn",
    image:
      "https://images.unsplash.com/photo-1576749872435-ff88a71c1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const Banner = () => {
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
        className="bannerNavigationButton left-20"
        onClick={prevSlide}
      />
      <ArrowNarrowRightIcon
        className="bannerNavigationButton right-20"
        onClick={nextSlide}
      />
      {SliderData?.map((slide, index) => {
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
                {/* Overlay div */}
                <div className="absolute top-0 right-0 px-5 flex flex-col justify-center items-center z-10 h-full w-full bg-black bg-opacity-40 text-center">
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
                  objectPosition="center"
                  objectFit="cover"
                  layout="fill"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Banner;
