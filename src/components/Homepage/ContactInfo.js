import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import StaggeredMoveUpComponent from "../FramerMotionReusableComponents/StaggeredMoveUpComponent";

const ContactInfo = () => {
  return (
    <section className="flex flex-col py-10 px-2 gap-y-5 text-white lg:flex-row lg:max-w-screen-xl lg:pl-10">
      <StaggeredMoveUpComponent delay={0.1} stylingClasses="flex flex-1/3">
        <PhoneIcon className="homepageContactIcon lg:px-10" />
        <div>
          <p className="font-josephin">000 (123) 456 7890</p>
          <p className="paragraph">
            A small river named Duden flows by their place and supplies
          </p>
        </div>
      </StaggeredMoveUpComponent>

      <StaggeredMoveUpComponent delay={0.3} stylingClasses="flex flex-1/3">
        <LocationMarkerIcon className="homepageContactIcon lg:px-10" />
        <div>
          <p className="font-josephin">198 West 21th Street</p>
          <p className="paragraph">
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
        </div>
      </StaggeredMoveUpComponent>

      <StaggeredMoveUpComponent delay={0.5} stylingClasses="flex flex-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="homepageContactIcon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>

        <div>
          <p className="font-josephin">Open Monday-Friday</p>
          <p className="paragraph">8:00am - 9:00pm</p>
        </div>
      </StaggeredMoveUpComponent>
    </section>
  );
};

export default ContactInfo;
