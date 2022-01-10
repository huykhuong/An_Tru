import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col justify-center items-start px-5 py-10 max-w-[450px] mx-auto gap-y-10 md:flex-row md:max-w-full md:gap-x-3 xl:px-[450px] lg:flex-row lg:px-20 lg:gap-x-20">
      {/* The restaurant */}
      <div className="md:flex-1/3">
        <h1 className="footerHeading">Nhà hàng An Trú</h1>
        <p className="paragraph text-white mt-4">
          Cảm ơn quý khách đã dành sự quan tâm đến chúng tôi
        </p>
      </div>
      {/* Overall div of opening time and social links */}
      <div className="md:flex-1/3">
        {/* Opening time */}
        <div>
          <div>
            <h1 className="footerHeading">Giờ hoạt động 1</h1>
            <p className="paragraph text-white mt-4">Từ 10h sáng - 2h chiều</p>
          </div>
          <div>
            <h1 className="footerHeading mt-4">Giờ hoạt động 2</h1>
            <p className="paragraph text-white mt-4">Từ 5h chiều - 9h tối</p>
          </div>
        </div>
        {/* Social Media Links */}
        <div>
          <h1 className="footerHeading mt-10">Kết nối với chúng tôi</h1>
          <div className="flex items-center justify-start gap-x-3 mt-5">
            <FaFacebookF className="w-6 h-6 text-white" />
            <BsInstagram className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      {/* Brief contact info */}
      <div className="md:flex-1/3">
        <h1 className="footerHeading">Bạn có câu hỏi cho chúng tôi?</h1>
        <div className="space-y-5 text-white pt-5">
          <div className="flex">
            <PhoneIcon className="h-6 pr-5 mt-1" />
            <div>
              <p className="paragraph text-white">000 (123) 456 7890</p>
            </div>
          </div>

          <div className="flex">
            <LocationMarkerIcon className="h-6 pr-5 mt-1" />
            <div>
              <p className="paragraph text-white">198 West 21th Street</p>
            </div>
          </div>

          <div className="flex">
            <MailIcon className="h-6 pr-5 mt-1" />
            <div>
              <p className="paragraph text-white">nhahangantru@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
