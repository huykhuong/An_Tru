import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [navBarScroll, setNavBarScroll] = useState(false);
  const [mobileMenuChosenOption, setMobileMenuChosenOption] = useState(1);
  const router = useRouter();

  let windowPathname;

  const changeNavBarAppearance = () => {
    if (window.scrollY >= 270) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBarAppearance);
    windowPathname = window.location.pathname;
  }

  // When you change a positioning property in CSS (such as top, left, bottom, right or z-index) you have to specify a position property other than static (the default).
  // So change the z-index and the position CSS properties.

  return (
    <header
      className={`bg-black text-white font-josephin font-light z-30 ${
        navBarScroll
          ? "animate-headerScrollDown sticky top-0 "
          : "relative lg:!bg-transparent lg:border-b lg:border-opacity-20"
      }`}
    >
      <section>
        <nav className="lg:mx-auto lg:max-w-[53rem] xl:max-w-6xl">
          {/* Nav Contents */}
          <div className="flex justify-between items-center px-7 py-4 md:px-16 lg:py-7">
            {/* Logo */}
            <div
              className="text-2xl md:text-2xl cursor-pointer"
              onClick={() => router.push("/")}
            >
              An trú
            </div>

            {/* Navigations */}
            <div className="hidden cursor-pointer lg:flex gap-x-16">
              <div className="navBarElement" onClick={() => router.push("/")}>
                Trang chủ
              </div>
              <div
                className="navBarElement"
                onClick={() => router.push("/menu")}
              >
                Menu
              </div>
              <div
                className="navBarElement"
                onClick={() => router.push("/about")}
              >
                Về chúng tôi
              </div>
              <div className="navBarElement">Liên hệ</div>
            </div>

            {/* Mobile Menu button */}
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => {
                setOpenMobileNav(!openMobileNav);
              }}
            >
              <MenuIcon className="h-7" />
            </div>
          </div>
        </nav>
      </section>
      {/* Mobile Navigations */}
      <div
        className={`${
          openMobileNav ? "h-[260px]" : "h-0"
        } mt-3 px-[2rem] overflow-hidden md:px-16 bg-black text-white transition-all duration-300 ease-in-out space-y-10 font-bold lg:hidden 
      `}
      >
        <div
          onClick={() => router.push("/")}
          className={`${windowPathname === "/" && "text-secondary"}`}
        >
          Trang chủ
        </div>
        <div
          onClick={() => router.push("/menu")}
          className={`${windowPathname === "/menu" && "text-secondary"}`}
        >
          Menu
        </div>
        <div
          onClick={() => router.push("/about")}
          className={`${windowPathname === "/about" && "text-secondary"}`}
        >
          Về chúng tôi
        </div>
        <div onClick={() => router.push("/menu")}>Liên hệ</div>
      </div>
    </header>
  );
};

export default Header;
