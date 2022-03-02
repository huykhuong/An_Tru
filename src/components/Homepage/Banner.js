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
    animate: "animate-image3",
  },
  {
    title: "Ẩm thực chay",
    description: "Lan tỏa niềm yêu thương",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    animate: "animate-image2",
  },
  {
    title: "An Trú",
    description: "Nơi phục vụ các món ăn nuôi dưỡng tâm hồn",
    image:
      "https://images.unsplash.com/photo-1576749872435-ff88a71c1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    animate: "animate-image1",
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
    <section className="relative -mt-[64px] lg:-mt-[88px] w-full h-screen flex justify-center items-center">
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
            key={index}
            className={`transition-opacity duration-[800ms] w-full h-screen opacity-0 ${
              current === index && "opacity-100"
            } `}
          >
            {/* Overlay div */}
            <div className="absolute top-0 right-0 px-5 flex flex-col justify-center items-center z-10 h-full w-full bg-black bg-opacity-40 text-center">
              <motion.div
                key="overlay"
                variants={{
                  initial: {
                    y: 100,
                    opacity: 0,
                  },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    },
                  },
                }}
                initial="initial"
                whileInView="animate"
              >
                <h1 className="upperHeading text-bright_yellow">
                  {slide.title}
                </h1>
                <h1 className="lowerHeading text-white">{slide.description}</h1>
              </motion.div>
            </div>
            <Image
              priority="true"
              objectPosition="center"
              objectFit="cover"
              layout="fill"
              src={slide.image}
              alt={slide.title}
            />
          </div>
        );
      })}
    </section>

    //   <div className={`w-full h-screen animate-image3 `}>
    //   {/* Overlay div */}
    //   <div className="absolute top-0 right-0 px-5 flex flex-col justify-center items-center z-10 h-full w-full bg-black bg-opacity-40 text-center">
    //     <motion.div
    //       key="overlay"
    //       variants={{
    //         initial: {
    //           y: 100,
    //           opacity: 0,
    //         },
    //         animate: {
    //           y: 0,
    //           opacity: 1,
    //           transition: {
    //             duration: 1,
    //             ease: [0.6, -0.05, 0.01, 0.99],
    //           },
    //         },
    //       }}
    //       initial="initial"
    //       whileInView="animate"
    //     >
    //       <h1 className="upperHeading text-bright_yellow">
    //         {SliderData[2].title}
    //       </h1>
    //       <h1 className="lowerHeading text-white">
    //         {SliderData[2].description}
    //       </h1>
    //     </motion.div>
    //   </div>
    //   <Image
    //     priority="true"
    //     objectPosition="center"
    //     objectFit="cover"
    //     layout="fill"
    //     src={SliderData[2].image}
    //     alt={SliderData[2].title}
    //   />
    // </div>

    // <div className={`w-full h-screen animate-image2`}>
    //   {/* Overlay div */}
    //   <div className="absolute top-0 right-0 px-5 flex flex-col justify-center items-center z-10 h-full w-full bg-black bg-opacity-40 text-center">
    //     <motion.div
    //       key="overlay"
    //       variants={{
    //         initial: {
    //           y: 100,
    //           opacity: 0,
    //         },
    //         animate: {
    //           y: 0,
    //           opacity: 1,
    //           transition: {
    //             duration: 1,
    //             ease: [0.6, -0.05, 0.01, 0.99],
    //           },
    //         },
    //       }}
    //       initial="initial"
    //       whileInView="animate"
    //     >
    //       <h1 className="upperHeading text-bright_yellow">
    //         {SliderData[1].title}
    //       </h1>
    //       <h1 className="lowerHeading text-white">
    //         {SliderData[1].description}
    //       </h1>
    //     </motion.div>
    //   </div>
    //   <Image
    //     priority="true"
    //     objectPosition="center"
    //     objectFit="cover"
    //     layout="fill"
    //     src={SliderData[1].image}
    //     alt={SliderData[1].title}
    //   />
    // </div>

    // <div className={`w-full h-screen animate-image1`}>
    //   {/* Overlay div */}
    //   <div className="absolute top-0 right-0 px-5 flex flex-col justify-center items-center z-10 h-full w-full bg-black bg-opacity-40 text-center">
    //     <motion.div
    //       key="overlay"
    //       variants={{
    //         initial: {
    //           y: 100,
    //           opacity: 0,
    //         },
    //         animate: {
    //           y: 0,
    //           opacity: 1,
    //           transition: {
    //             duration: 1,
    //             ease: [0.6, -0.05, 0.01, 0.99],
    //           },
    //         },
    //       }}
    //       initial="initial"
    //       whileInView="animate"
    //     >
    //       <h1 className="upperHeading text-bright_yellow">
    //         {SliderData[0].title}
    //       </h1>
    //       <h1 className="lowerHeading text-white">
    //         {SliderData[0].description}
    //       </h1>
    //     </motion.div>
    //   </div>
    //   <Image
    //     priority="true"
    //     objectPosition="center"
    //     objectFit="cover"
    //     layout="fill"
    //     src={SliderData[0].image}
    //     alt={SliderData[0].title}
    //   />
    // </div>
  );
};

export default Banner;
