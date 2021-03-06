import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary text-white flex flex-col justify-center items-start px-5 py-10 mx-auto gap-y-10 md:flex-row md:max-w-full md:gap-x-3 lg:flex-row lg:px-20 lg:gap-x-20 xl:px-48 ">
      {/* The restaurant */}
      <div className="md:flex-1/3">
        <h1 className="footerHeading">Nhà hàng chay An Trú</h1>
        <p className="paragraph mt-4 text-white opacity-80">
          Cảm ơn quý khách đã dành sự quan tâm đến chúng tôi
        </p>
      </div>
      {/* Overall div of opening time and social links */}
      <div className="md:flex-1/3">
        {/* Opening time */}
        <div>
          <div>
            <h1 className="footerHeading">Giờ hoạt động 1</h1>
            <p className="paragraph mt-4 text-white opacity-80">Từ 10h sáng - 2h chiều</p>
          </div>
          <div>
            <h1 className="footerHeading mt-4">Giờ hoạt động 2</h1>
            <p className="paragraph mt-4 text-white opacity-80">Từ 5h chiều - 9h tối</p>
          </div>
        </div>
        {/* Social Media Links */}
        <div>
          <h1 className="footerHeading mt-10">Kết nối với chúng tôi</h1>
          <div className="flex items-center justify-start gap-x-3 mt-5">
            <FaFacebookF className="w-6 h-6 " />
            <BsInstagram className="w-6 h-6 " />
          </div>
        </div>
      </div>
      {/* Brief contact info */}
      <div className="md:flex-1/3">
        <h1 className="footerHeading">Quý khách có câu hỏi cho chúng tôi?</h1>
        <div className="space-y-5 pt-5">
          <div className="flex">
            <PhoneIcon className="footerIcons" />
            <div>
              <p className="paragraph text-white opacity-80">000 (123) 456 7890</p>
            </div>
          </div>

          <div className="flex">
            <LocationMarkerIcon className="footerIcons" />
            <div>
              <p className="paragraph text-white opacity-80">198 West 21th Street</p>
            </div>
          </div>

          <div className="flex">
            <MailIcon className="footerIcons" />
            <div>
              <p className="paragraph text-white opacity-80">nhahangantru@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
