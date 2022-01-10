import Image from "next/image";
import { motion } from "framer-motion";

const MoveUpAnimation = ({ children, initialPosition, stylingClasses }) => {
  let variants = {};
  let isMobile;

  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      variants = {
        initial: {
          y: initialPosition,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      };
    }
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      // Tailwind CSS classes as property of this functional component
      className={stylingClasses}
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div className="text-white pb-10 md:pb-0 md:grid grid-cols-2 place-items-center">
      {/* Banner */}
      <div className="relative h-[300px] w-full md:h-[600px] xl:h-[650px]">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/about_bg-min-1.jpg"
          alt="about-us-img"
        />
      </div>
      {/* Text Content */}
      <div className="md:z-10 md:pr-[30%]">
        {/*Background */}
        <MoveUpAnimation
          stylingClasses={`md:bg-primary md:bg-opacity-70 md:-ml-20 md:py-10 max-w-[700px] text-center`}
          initialPosition={30}
        >
          <MoveUpAnimation stylingClasses={`mt-7`} initialPosition={60}>
            <h1 className="upperHeading">Về </h1>
            <h2 className="lowerHeading">Chúng tôi</h2>
          </MoveUpAnimation>
          <div className="paragraph py-5 px-10">
            Quisque volutpat pharetra felis, eu cursus lorem molestie vitae ulla
            vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui ut
            cus libero augue at libero. Morbi ut arcu dolor. Maecenas id nulla
            nec nibh viverra vehicula. Cras feugiat, magna eu lacinia
            ullamcorper. lla vehicula, lacus ut suscipit fermentum, turpis felis
            ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu
            dolor.
          </div>
        </MoveUpAnimation>
      </div>
    </div>
  );
};

export default AboutUs;
