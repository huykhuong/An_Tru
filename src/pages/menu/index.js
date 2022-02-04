import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/GeneralUI/Header"));
const Footer = dynamic(() => import("../../components/GeneralUI/Footer"));
const DishComponent = dynamic(() =>
  import("../../components/Menu/DishComponent")
);

const FoodQualityBanner = dynamic(() =>
  import("../../components/Menu/FoodQualityBanner")
);
const StaggeredMoveUpComponent = dynamic(() =>
  import(
    "../../components/FramerMotionReusableComponents/StaggeredMoveUpComponent"
  )
);
const BannerImage = dynamic(() =>
  import("../../components/GeneralUI/BannerImage")
);
const CategoryOptions = dynamic(() =>
  import("../../components/Menu/CategoryOptions")
);
import { Fragment, useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState(0);

  const selectCategory = (value) => {
    setSelectedCategory(value);
  };

  return (
    <Fragment>
      <Head>
        <title>Menu - Nhà hàng An Trú</title>
        <meta
          name="keywords"
          content="Menu, An Trú, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menu" />
        <meta property="og:description" content />
        {/* <meta property="og:url" content="https://iron-fever.vn/"/> */}
        {/* <meta property="og:image:secure_url" content="https://bizweb.dktcdn.net/100/360/775/themes/729132/assets/logo.png?1622064036816"></meta> */}
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        <link rel="canonical" href="https://nhahangchayantru.vn/menu" />
      </Head>

      <Header />

      <main className="lg:-mt-[88px] text-white font-prata">
        {/* Parallax Banner Image */}
        <BannerImage
          upperHeading="Menu"
          lowerHeading="Của chúng tôi"
          img="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Category Options */}
        <CategoryOptions
          selectedCategory={selectedCategory}
          selectCategory={selectCategory}
        />

        {/* Dishes section */}
        <section className="bg-white py-10 px-3 h-full md:px-10 lg:pb-40 2xl:px-24">
          {selectedCategory === 0 && (
            <StaggeredMoveUpComponent
              keyName="rice"
              stylingClasses=""
              delay={0.2}
            >
              <h2 className="menuPageHeading">Cơm</h2>

              {/* List of dishes */}
              <div className="lg:flex lg:flex-wrap">
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
              </div>
            </StaggeredMoveUpComponent>
          )}

          {selectedCategory === 1 && (
            <StaggeredMoveUpComponent
              keyName="noodle"
              stylingClasses=""
              delay={0.2}
            >
              <h2 className="menuPageHeading">Mỳ</h2>

              {/* List of dishes */}
              <div className="lg:flex lg:flex-wrap">
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
              </div>
            </StaggeredMoveUpComponent>
          )}

          {selectedCategory === 2 && (
            <StaggeredMoveUpComponent
              keyName="desserts"
              stylingClasses=""
              delay={0.2}
            >
              <h2 className="menuPageHeading">Tráng Miệng</h2>

              {/* List of dishes */}
              <div className="lg:flex lg:flex-wrap">
                {TrangMiengArray.map(
                  ({ img, title, description, price }, i) => (
                    <DishComponent
                      key={title}
                      img={img}
                      title={title}
                      description={description}
                      price={price}
                      index={i}
                    />
                  )
                )}
              </div>
            </StaggeredMoveUpComponent>
          )}
        </section>

        {/* Food quality and ingredient section | Laptop/desktop view only */}
        <section className="h-[650px] hidden lg:block bg-transparent relative">
          <StaggeredMoveUpComponent
            keyName="food-quality-banner"
            delay={0.3}
            stylingClasses=""
          >
            <FoodQualityBanner />
          </StaggeredMoveUpComponent>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
