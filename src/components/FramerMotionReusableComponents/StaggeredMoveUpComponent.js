import { motion } from "framer-motion";
const StaggeredMoveUpComponent = ({
  children,
  delay,
  stylingClasses,
  keyName,
}) => {
  let variants = {};
  let isMobile;

  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      variants = {
        initial: {
          y: 60,
          opacity: 0,
          transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay: delay,
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      };
    }
  }

  return (
    <motion.div
      key={keyName}
      className={stylingClasses}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
export default StaggeredMoveUpComponent;
