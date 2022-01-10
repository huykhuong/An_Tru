import { motion } from "framer-motion";

const BannerImage = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')] min-h-[1000px] bg-[center_right_-20rem] lg:bg-[center_right_0rem] xl:bg-[center_right_0rem] lg:bg-fixed bg-no-repeat bg-cover relative">
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
            <h1 className="upperHeading">Liên hệ</h1>
            <h1 className="lowerHeading">Đến chúng tôi</h1>
          </div>
        </motion.h1>
      </div>
    </section>
  );
};

export default BannerImage;
