import Image from "next/image";
import { useState } from "react";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const HighlightedDishes = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const selectedStyleClass = "bg-lighter_green !text-white";
  const generalOptionStyleClass =
    "py-2 px-3 text-lg cursor-pointer text-lighter_green hover:bg-lighter_green hover:text-black transition-all duration-200 ease-linear";

  return (
    <section className="text-white mt-24 mb-20">
      <StaggeredMoveUpComponent
        keyName="highlighted-title"
        stylingClasses=""
        delay={0.2}
      >
        <div className="text-center mt-20">
          <h2 className="lowerHeading">Món nổi bật</h2>
        </div>
        <p className="paragraph text-center px-10 py-6 md:text-lg">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </StaggeredMoveUpComponent>

      {/* Options */}
      <StaggeredMoveUpComponent
        keyName="options"
        delay={0.4}
        stylingClasses="flex flex-col mt-5 px-10 mx-auto gap-y-2 md:flex-row md:justify-center md:gap-x-4"
      >
        <div
          onClick={() => setSelectedOption(0)}
          className={`${generalOptionStyleClass} ${selectedOption === 0 && selectedStyleClass
            }`}
        >
          Main Dish
        </div>
        <div
          onClick={() => setSelectedOption(1)}
          className={`${generalOptionStyleClass} ${selectedOption === 1 && selectedStyleClass
            }`}
        >
          Drinks
        </div>
        <div
          onClick={() => setSelectedOption(2)}
          className={`${generalOptionStyleClass} ${selectedOption === 2 && selectedStyleClass
            }`}
        >
          Desserts
        </div>
      </StaggeredMoveUpComponent>

      {/* Contents correspoding to chosen option */}
      <StaggeredMoveUpComponent
        keyName="highlighted-dish"
        delay={0.5}
        stylingClasses="mt-14"
      >
        {/* This is the container div of 3 dishes element */}
        <div className="md:flex md:w-[750px] lg:w-[900px] xl:w-[1000px] mx-auto">
          {/* The Array function is just for temporary use */}
          {selectedOption === 0 &&
            Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="md:w-1/3 xl:w-[350px]">
                <div className="relative w-[300px] h-[300px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] xl:w-[290px] xl:h-[290px] mx-auto">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="https://images.unsplash.com/photo-1604908814792-f3d42c558764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="highlighted dish-1"
                  />
                </div>
                <div className="text-center space-y-3 mt-5 mb-10">
                  <h2 className="font-prata text-2xl text-[#001D38]">
                    Cơm Trộn Chay
                  </h2>
                  <p className="paragraph px-2 md:px-3">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                  <h3 className="text-lg">$2.90</h3>
                  <button className="text-secondary text-sm border border-secondary px-3 py-2 hover:bg-secondary hover:text-white transition duration-200 ease-out">
                    Chi tiết
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="md:flex gap-x-8 md:w-fit md:px-5 lg:w-[900px] xl:w-[1000px] mx-auto">
          {selectedOption === 1 &&
            Array.from({ length: 3 }, (_, i) => (
              <div key={i}>
                <div className="relative w-[450px] h-[450px] md:w-full md:h-[350px] mx-auto">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="https://preview.colorlib.com/theme/coffeeblend/images/xdrink-1.jpg.pagespeed.ic.RCrXYE6lI1.webp"
                    alt="highlightede dish-2"
                  />
                </div>
                <div className="text-center space-y-3 mt-5 mb-10">
                  <h2 className="font-prata text-2xl">Lemonade Juice</h2>
                  <p className="paragraph">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                  <h3 className="text-lg">$2.90</h3>
                  <button className="text-secondary text-sm border border-secondary px-3 py-2 hover:bg-secondary hover:text-white transition duration-200 ease-out">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="md:flex gap-x-8 md:w-fit md:px-5 lg:w-[900px] xl:w-[1000px] mx-auto">
          {selectedOption === 2 &&
            Array.from({ length: 3 }, (_, i) => (
              <div key={i}>
                <div className="relative w-[450px] h-[450px] md:w-full md:h-[350px] mx-auto">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="https://preview.colorlib.com/theme/coffeeblend/images/xdessert-2.jpg.pagespeed.ic.PXl-DGXsd5.webp"
                    alt="highlightede dish-3"
                  />
                </div>
                <div className="text-center space-y-3 mt-5 mb-10">
                  <h2 className="font-prata text-2xl">Hot Cake Honey</h2>
                  <p className="paragraph">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                  <h3 className="text-lg">$2.90</h3>
                  <button className="text-secondary text-sm border border-secondary px-3 py-2 hover:bg-secondary hover:text-white transition duration-200 ease-out">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </StaggeredMoveUpComponent>
    </section>
  );
};

export default HighlightedDishes;
