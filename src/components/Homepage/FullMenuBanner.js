import { useRouter } from "next/router";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const FullMenuBanner = () => {
  const router = useRouter();
  return (
    <section className="mt-20 relative">
      {/* Background Image */}
      <div className="bg-[url('/photo-1541921671-016ccc70f7cc.webp')] min-h-[288px] lg:min-h-[380px] lg:bg-fixed bg-center bg-no-repeat bg-cover relative"></div>
      {/* Overlay Contents */}
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-evenly items-start px-7 md:px-10 lg:px-16 xl:px-40">
        <StaggeredMoveUpComponent
          keyName="overlay-contents"
          delay={0.2}
          stylingClasses=""
        >
          <h1 className="upperHeading">Khám phá</h1>
          <h3 className="lowerHeading">Menu của chúng tôi</h3>

          <p className="fullMenuParagraph">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
        </StaggeredMoveUpComponent>

        <StaggeredMoveUpComponent
          keyName="full-menu-button"
          delay={0.4}
          stylingClasses=""
        >
          <button
            onClick={() => router.push("/menu")}
            className="fullMenuButton"
          >
            View Full Menu
          </button>
        </StaggeredMoveUpComponent>
      </div>
    </section>
  );
};

export default FullMenuBanner;
