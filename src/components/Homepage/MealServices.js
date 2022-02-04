import Image from "next/image";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const MealServices = () => {
  return (
    <section>
      {/* Meals */}
      <div className="flex flex-col items-center px-20 py-10 bg-white w-full text-black text-center">
        <h1 className="text-5xl font-secondary">
          <span className="text-bright_yellow">Các</span> bữa ăn
        </h1>
        <p className="mealServiceParagraph lg:max-w-4xl">
          Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla
          semper arcu vel diam auctor. condimentum. Nam molestie sem eu quam
          fermentum a tempus nisi aliquet.
        </p>

        {/* Meals Section */}
        <div className="font-prata mt-10 flex flex-col gap-y-20 md:flex-row md:gap-x-5 md:max-w-3xl lg:max-w-5xl">
          {/* First meal */}
          <StaggeredMoveUpComponent
            keyName="first-meal"
            delay={0.2}
            stylingClasses="space-y-4"
          >
            <div className="mx-auto relative h-28 w-28">
              <Image
                objectFit="cover"
                layout="fill"
                src="https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico1.png"
                alt="breakfast"
              />
            </div>
            <h2 className="mealServiceHeading">Bữa sáng</h2>
            <p className="mealServiceParagraph">
              Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod
              congue bibendum.
            </p>
          </StaggeredMoveUpComponent>

          {/* Second Meal */}
          <StaggeredMoveUpComponent
            keyName="second-meal"
            delay={0.4}
            stylingClasses="space-y-4"
          >
            <div className="mx-auto relative h-28 w-28">
              <Image
                objectFit="cover"
                layout="fill"
                src="https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico1.png"
                alt="lunch"
              />
            </div>
            <h2 className="mealServiceHeading">Bữa trưa</h2>
            <p className="mealServiceParagraph">
              Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod
              congue bibendum.
            </p>
          </StaggeredMoveUpComponent>

          {/* Third Meal */}
          <StaggeredMoveUpComponent
            keyName="third-meal"
            delay={0.6}
            stylingClasses="space-y-4"
          >
            <div className="mx-auto relative h-28 w-28">
              <Image
                objectFit="cover"
                layout="fill"
                src="https://preview.codeless.co/picante/default/wp-content/uploads/2018/03/ico1.png"
                alt="dinner"
              />
            </div>
            <h2 className="mealServiceHeading">Bữa tối</h2>
            <p className="mealServiceParagraph">
              Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod
              congue bibendum.
            </p>
          </StaggeredMoveUpComponent>
        </div>
      </div>
    </section>
  );
};

export default MealServices;
