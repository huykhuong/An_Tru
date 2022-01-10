import Image from "next/image";

const DishComponent = ({ img, title, description, price }) => {
  return (
    // Overall div
    <div className="flex gap-x-4 md:gap-x-10 mt-14 transform lg:hover:scale-[1.02] transition duration-150 lg:gap-x-0 lg:w-1/2 lg:pb-10 2xl:w-1/3">
      {/* Image div */}
      <div className="relative h-32 w-32 md:h-40 md:w-40 flex-shrink-0 lg:w-64 lg:h-64 2xl:w-60 2xl:h-60">
        <Image
          className="rounded-lg"
          src={img}
          layout="fill"
          objectFit="contain"
          alt={title}
        />
      </div>
      {/* Contents div */}
      <div className="text-black flex flex-col lg:w-64 lg:h-64 lg:px-4 lg:items-center lg:text-center 2xl:w-60 2xl:h-60">
        <h3 className="text-md mb-1 md:text-lg lg:mb-4">{title}</h3>
        <p className="flex-grow text-xs !leading-4 lg:!leading-7 md:text-sm opacity-60 font-sans">
          {description}
        </p>
        <p className="text-sm text-lighter_green">{price}</p>
      </div>
    </div>
  );
};

export default DishComponent;
