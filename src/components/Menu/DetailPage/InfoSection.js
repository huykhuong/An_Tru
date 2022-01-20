import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Image from "next/image";

const dummyData = {
  img: "https://images.unsplash.com/photo-1625944525735-f5e9f22f91d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80",
  title: "Mỳ Ý Phô Mai Chay",
  description:
    "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakesfghgfe ew e we we e we ew e e ew ew we ew ew ew w ewfdsfdsdf sdf dsfsd fds fsdfds fds fds fdsf ds fds sd fdsfdsf dsfds fsdfs fsd fd fsdfdsf d gfhgfhgfhgf.",
  price: 150,
};

const InfoSection = () => {
  const [title, setTitle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(title === 1 ? title - 1 : title + 1);
    }, 6000);
    console.log(title);
    return () => clearInterval(interval);
  }, [title]);

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      className="font-prata bg-white lg:-mt-[79px]"
    >
      {/*Small Screen Title and Price */}
      <div className="flex justify-between items-center pt-10 pb-5 px-5 md:px-16 md:pb-10">
        {/* Small Screen Title */}
        <h1 className="text-xl w-2/3 text-primary lg:hidden ">
          {dummyData.title} / Vegetarian Cheese Pasta
        </h1>

        {/*Small Screen Price */}
        <h1 className="text-lighter_green lg:hidden">{dummyData.price}</h1>
      </div>

      {/* Small Screen Image */}
      <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96 lg:hidden">
        <Image src={dummyData.img} layout="fill" objectFit="cover" />
      </div>

      {/* Title, Price and Image for Large Screen */}
      <div className="hidden lg:block lg:relative lg:-mt-[90px]">
        {/* Image */}
        <motion.div
          variants={{
            animate: {
              height: "80vh",
              transition: {
                duration: 0.7,
                delay: 2,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            },
          }}
          className="lg:bg-fixed lg:bg-center lg:bg-no-repeat lg:bg-cover lg:w-full lg:h-screen"
          style={{
            backgroundImage: `url(${dummyData.img})`,
          }}
        ></motion.div>

        {/* Overlay div for large screen that has Price and Title  */}
        <div className="hidden absolute lg:flex lg:flex-col lg:gap-y-6 justify-end items-center bg-black top-0 w-full h-full bg-opacity-30 ">
          {/* Price */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, delay: 1 },
            }}
            className="lg:mb-10 lg:text-[20px] lg:text-primary bg-white px-8 py-1 absolute top-[520px] h-[32px]"
          >
            {dummyData.price}
          </motion.h1>

          {/* Vietnamese Title */}
          {title === 0 && (
            <motion.div
              className="menuDetailPageDishTitle"
              animate={{
                opacity: [1, 0],
                transition: { duration: 1, delay: 5 },
              }}
            >
              <motion.h1
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  animate: {
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
                {dummyData.title}
              </motion.h1>
            </motion.div>
          )}

          {/* English Title */}
          {title === 1 && (
            <motion.div
              className="menuDetailPageDishTitle"
              animate={{
                opacity: [1, 0],
                transition: { duration: 1, delay: 5 },
              }}
            >
              <motion.h1
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  animate: {
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
                Vegetarian Cheese Pasta
              </motion.h1>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contents */}
      <div className="flex flex-col gap-y-10 mx-auto px-5 py-10 md:max-w-2xl md:py-14 lg:max-w-3xl xl:max-w-4xl lg:items-start lg:gap-y-14">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 1.4 },
          }}
        >
          <h1 className="menuDetailHeading">Mô tả</h1>
          <p className="menuDetailPageParagraph">{dummyData.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 1.5 },
          }}
        >
          <h1 className="menuDetailHeading">Nguyên liệu</h1>
          <p className="menuDetailPageParagraph">Dầu mè, bơ, tỏi</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 1.6 },
          }}
        >
          <h1 className="menuDetailHeading">Chú ý</h1>
          <p className="menuDetailPageParagraph">
            Món ăn có chứa đậu, không dành cho người dị ứng với đậu
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InfoSection;
