import { useRouter } from "next/router";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const FullMenuBanner = () => {
  const router = useRouter();
  return (
    <section className="mt-20 mb-10 max-w-[80%] mx-auto lg:flex lg:flex-row-reverse justify-center items-center">
      {/* Background Image */}
      {/* <div className="bg-[url('/photo-1541921671-016ccc70f7cc.webp')] min-h-[288px] lg:min-h-[380px] lg:bg-fixed bg-center bg-no-repeat bg-cover relative"></div> */}

      <img
        className='max-h-[640px] mx-auto'
        src="https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80"
        alt="full-menu"
        loading="lazy"
      />

      {/*Contents */}
      <div className="flex flex-col justify-evenly items-start mt-10 lg:mr-40">
        <StaggeredMoveUpComponent
          keyName="overlay-contents"
          delay={0.2}
          stylingClasses=""
        >
          <h3 className="lowerHeading">Khám phá Menu của chúng tôi</h3>

          <div className="h-[1px] w-1/5 bg-[#001D38]"></div>

          <p className="paragraph mt-10">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
        </StaggeredMoveUpComponent>

        <StaggeredMoveUpComponent
          keyName="full-menu-button"
          delay={0.4}
          stylingClasses="mt-10"
        >
          <button
            onClick={() => router.push("/menu")}
            className="fullMenuButton"
          >
            Xem Menu
          </button>
        </StaggeredMoveUpComponent>
      </div>
    </section>
  );
};

export default FullMenuBanner;
