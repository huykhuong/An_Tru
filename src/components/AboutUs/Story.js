import Image from "next/image";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const Story = () => {
  return (
    <section className="bg-white h-full py-10 lg:px-32 xl:px-44">
      {/* commencing story */}
      <StaggeredMoveUpComponent
        key="commencing story"
        delay={0.3}
        stylingClasses="text-center mt-10 mb-20"
      >
        <h1 className="lowerHeading">Câu chuyện khởi đầu</h1>
        <div className="aboutUsPageParagraph">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="mt-5">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth
          </p>
        </div>
      </StaggeredMoveUpComponent>

      <div className="h-[1px] w-[30px] bg-[#001D38] mx-auto"></div>

      {/* Mission */}
      <StaggeredMoveUpComponent
        key="Mission"
        delay={0.3}
        stylingClasses="text-center mt-20 mb-20"
      >
        <h1 className="lowerHeading">Sứ mệnh & Tầm nhìn</h1>
        <div className="aboutUsPageParagraph">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </StaggeredMoveUpComponent>

      <div className="h-[1px] w-[30px] bg-[#001D38] mx-auto"></div>

      {/* Chef and Founders */}
      <StaggeredMoveUpComponent
        key="Chef and Founders"
        delay={0.3}
        stylingClasses="text-center mt-20 mb-20"
      >
        <h1 className="lowerHeading">Các nhà sáng lập</h1>

        {/* Overall div of both head chef and founder */}
        <div className="md:w-[600px] xl:flex xl:gap-x-5 xl:w-[910px] mx-auto">
          {/* Head chef */}
          <div className="text-sm text-black leading-7 mt-5 px-9 md:text-sm">
            <div className="relative h-44 w-44 rounded-full overflow-hidden mx-auto mt-10">
              <Image
                layout="fill"
                objectFit="cover"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/54514195_2138897516420260_2005702710225010688_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bvUq8U7rWD8AX9OoLQE&tn=mX0QbsWENjbyEzOp&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8vwRBsGzdtrHBoWqWzOuDur3bEzxMKeERYr5q_xF1TlQ&oe=61FEBA2E"
              />
            </div>
            <h2 className="aboutUsPageFounderName">Phan Duy Thịnh</h2>
            <h2 className="aboutUsPageFounderPosition">ĐỒNG SÁNG LẬP</h2>
            <p className="opacity-60 font-sans mt-5 md:leading-8 lg:text-[16px] xl:text-[17px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          {/* Founder */}
          <div className="text-sm text-black leading-7 mt-5 px-9 md:text-sm">
            <div className="relative h-44 w-44 rounded-full overflow-hidden mx-auto mt-10">
              <Image
                layout="fill"
                objectFit="cover"
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/135213847_3868278449851856_8844246534897896694_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IIqJmF3uuYwAX9LPHmk&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-JJ6tNSQY-J7C1yA74N6Cq7owaCsu507V8Ax_0by7ZtA&oe=620108EE"
              />
            </div>
            <h2 className="aboutUsPageFounderName">Nguyễn Minh Đạt</h2>
            <h2 className="aboutUsPageFounderPosition">ĐỒNG SÁNG LẬP</h2>
            <p className="opacity-60 font-sans mt-5 md:leading-8 lg:text-[16px] xl:text-[17px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          {/* Founder */}
          <div className="text-sm text-black leading-7 mt-5 px-9 md:text-sm">
            <div className="relative h-44 w-44 rounded-full overflow-hidden mx-auto mt-10">
              <Image
                layout="fill"
                objectFit="cover"
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/135213847_3868278449851856_8844246534897896694_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IIqJmF3uuYwAX9LPHmk&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-JJ6tNSQY-J7C1yA74N6Cq7owaCsu507V8Ax_0by7ZtA&oe=620108EE"
              />
            </div>
            <h2 className="aboutUsPageFounderName">Khương Chấn Huy</h2>
            <h2 className="aboutUsPageFounderPosition">ĐỒNG SÁNG LẬP</h2>
            <p className="opacity-60 font-sans mt-5 md:leading-8 lg:text-[16px] xl:text-[17px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </StaggeredMoveUpComponent>
    </section>
  );
};

export default Story;
