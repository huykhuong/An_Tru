import { useRouter } from "next/router";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const FullMenuBanner = () => {
  const router = useRouter();
  return (
    <section className="mt-20 relative">
      {/* Background Image */}
      <div className="bg-[url('https://images.unsplash.com/photo-1541921671-016ccc70f7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80')] min-h-[288px] lg:min-h-[380px] lg:bg-fixed bg-center bg-no-repeat bg-cover relative"></div>
      {/* Overlay Contents */}
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-evenly items-start px-7 md:px-10 lg:px-16 xl:px-40">
        <StaggeredMoveUpComponent delay={0.2} stylingClasses="">
          <h1 className="upperHeading">Khám phá</h1>
          <h3 className="lowerHeading">Menu của chúng tôi</h3>

          <p className="fullMenuParagraph">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
        </StaggeredMoveUpComponent>

        <StaggeredMoveUpComponent delay={0.4} stylingClasses="">
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
