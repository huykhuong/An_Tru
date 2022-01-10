import { motion } from "framer-motion";

const BannerImage = () => {
  return (
    <section className="bg-[url('/brooke-lark-jUPOXXRNdcA-unsplash.jpg')] min-h-[1000px] lg:bg-fixed bg-center bg-no-repeat bg-cover relative">
      <div className="absolute h-full w-full bg-black bg-opacity-30 flex flex-col justify-center items-center">
        <motion.h1
          variants={{
            initial: {
              y: 100,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl"
        >
          <div className="text-center">
            <h1 className="upperHeading">Menu</h1>
            <h1 className="lowerHeading">Của chúng tôi</h1>
          </div>
        </motion.h1>
      </div>
    </section>
  );
};

export default BannerImage;
