import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "../Slider/Slider";

const Banner = () => {
  const moveUpAnimation = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div>
      <Slider />
    </div>
  );
};

export default Banner;
