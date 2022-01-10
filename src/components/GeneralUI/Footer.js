import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="mt-14 flex flex-col justify-center items-center lg:flex-row lg:px-20 lg:gap-x-20">
      <h1 className="font-josephin text-white">
        BẠN CÓ CÂU HỎI CHO CHÚNG TÔI?
      </h1>
      <div className="space-y-5 text-white lg:flex lg:gap-x-20 py-10 lg:space-y-0">
        <div className="flex">
          <PhoneIcon className="h-6 pr-5" />
          <div>
            <p>000 (123) 456 7890</p>
          </div>
        </div>

        <div className="flex">
          <LocationMarkerIcon className="h-6 pr-5" />
          <div>
            <p>198 West 21th Street</p>
          </div>
        </div>

        <div className="flex">
          <MailIcon className="h-6 pr-5" />
          <div>
            <p>nhahangantru@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
