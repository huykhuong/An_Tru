const FoodQualityBanner = () => {
  return (
    <section className="absolute -top-16 w-full px-16 xl:px-52 2xl:px-80">
      {/* First Row */}
      <div className="flex shadow-xl">
        <div className=" flex flex-col justify-center align-middle px-10 bg-white max-h-[300px] max-w-[300px] text-center gap-y-6">
          <h1 className="text-black font-prata text-2xl w-40 mx-auto">
            Thực phẩm chất lượng
          </h1>
          <p className="text-black font-josephin font-normal text-opacity-50 text-md">
            A heaping mountain of rings, handmade with Panko breading and
            shredded coconut flakes.
          </p>
        </div>
        <div className="relative bg-[url(https://images.unsplash.com/photo-1470338950318-40320a722782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)] bg-center bg-no-repeat bg-cover w-full h-[300px] "></div>
      </div>

      {/* Second Row */}
      <div className="flex shadow-xl">
        <div className="relative bg-[url(https://images.unsplash.com/photo-1600626334697-2b025169fb1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80)] bg-center bg-no-repeat bg-cover min-h-[300px] min-w-[300px] "></div>
        <div className="flex flex-col justify-center items-middle w-full px-10 bg-white text-center gap-y-6">
          <h1 className="text-black font-prata text-2xl w-40 mx-auto">
            Nguyên liệu sạch
          </h1>
          <p className="text-black font-josephin font-light text-md">
            A heaping mountain of rings, handmade with Panko breading and
            shredded coconut flakes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodQualityBanner;
