import Head from "next/head";
import Header from "../../components/GeneralUI/Header";
import Footer from "../../components/GeneralUI/Footer";
import BannerImage from "../../components/Menu/BannerImage";
import DishComponent from "../../components/Menu/DishComponent";
import FoodQualityBanner from "../../components/Menu/FoodQualityBanner";
import StaggeredMoveUpComponent from "../../components/FramerMotionReusableComponents/StaggeredMoveUpComponent";
import { Fragment } from "react";

const KhaiViArray = [
  {
    img: "https://preview.colorlib.com/theme/meal/images/ximg_3.jpg.pagespeed.ic.PFMzUZS3Jy.webp",
    title: "Warm Spinach Dip & Chips",
    description:
      "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    price: 90,
  },
  {
    img: "https://preview.colorlib.com/theme/meal/images/ximg_1.jpg.pagespeed.ic.L60-aVe_WJ.webp",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 200,
  },
  {
    img: "https://images.unsplash.com/photo-1544510806-e28d3cd4d4e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 150,
  },
  {
    img: "https://images.unsplash.com/photo-1544510806-e28d3cd4d4e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 150,
  },
  {
    img: "https://images.unsplash.com/photo-1544510806-e28d3cd4d4e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 150,
  },
];

const MonChinhArray = [
  {
    img: "https://images.unsplash.com/photo-1604908814792-f3d42c558764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Warm Spinach Dip & Chips",
    description:
      "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    price: 90,
  },
  {
    img: "https://images.unsplash.com/photo-1625938144595-4f5112c529b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 200,
  },
  {
    img: "https://images.unsplash.com/photo-1625944525735-f5e9f22f91d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 150,
  },
];

const TrangMiengArray = [
  {
    img: "https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Warm Spinach Dip & Chips",
    description:
      "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    price: 90,
  },
  {
    img: "https://images.unsplash.com/photo-1625938144595-4f5112c529b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 200,
  },
  {
    img: "https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Key Wast Machos",
    description:
      "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    price: 150,
  },
];

export default function Menu() {
  return (
    <Fragment>
      <Head>
        <title>Nhà hàng An Trú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Trang Menu của Nhà hàng chay An Trú"
        />
      </Head>

      <Header />

      <main className="lg:-mt-[88px] text-white font-prata">
        {/* Parallax Banner Image */}
        <BannerImage />

        {/* Dishes section */}
        <section className="bg-white py-10 px-3 md:px-10 2xl:px-24 h-full lg:pb-40">
          <StaggeredMoveUpComponent
            stylingClasses="text-primary text-2xl font-bold"
            delay={0.2}
          >
            <h2>Món khai vị</h2>
          </StaggeredMoveUpComponent>
          {/* List of dishes */}
          <StaggeredMoveUpComponent
            stylingClasses="lg:flex lg:flex-wrap"
            delay={0.3}
          >
            {KhaiViArray.map(({ img, title, description, price }, i) => (
              <DishComponent
                key={title}
                img={img}
                title={title}
                description={description}
                price={price}
                index={i}
              />
            ))}
          </StaggeredMoveUpComponent>

          <StaggeredMoveUpComponent
            stylingClasses="text-primary text-2xl font-bold mt-20 lg:mt-28"
            delay={0.2}
          >
            <h2>Món chính</h2>
          </StaggeredMoveUpComponent>
          <StaggeredMoveUpComponent
            stylingClasses="lg:flex lg:flex-wrap"
            delay={0.3}
          >
            {MonChinhArray.map(({ img, title, description, price }, i) => (
              <DishComponent
                key={title}
                img={img}
                title={title}
                description={description}
                price={price}
                index={i}
              />
            ))}
          </StaggeredMoveUpComponent>

          <StaggeredMoveUpComponent
            stylingClasses="text-primary text-2xl font-bold mt-20 lg:mt-28"
            delay={0.2}
          >
            <h2>Tráng miệng</h2>
          </StaggeredMoveUpComponent>
          <StaggeredMoveUpComponent
            stylingClasses="lg:flex lg:flex-wrap mb-20"
            delay={0.3}
          >
            {TrangMiengArray.map(({ img, title, description, price }, i) => (
              <DishComponent
                key={title}
                img={img}
                title={title}
                description={description}
                price={price}
                index={i}
              />
            ))}
          </StaggeredMoveUpComponent>
        </section>

        {/* Food quality and ingredient section | Laptop/desktop view only */}
        <section className="h-[650px] hidden lg:block bg-transparent relative">
          <StaggeredMoveUpComponent delay={0.3} stylingClasses="">
            <FoodQualityBanner />
          </StaggeredMoveUpComponent>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

// bg-[#EBEAE7]
