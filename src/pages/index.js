import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const HighlightedDishes = dynamic(() =>
  import("../components/Homepage/HighlightedDishes")
);
const Footer = dynamic(() => import("../components/GeneralUI/Footer"));
const Header = dynamic(() => import("../components/GeneralUI/Header"));
const AboutUs = dynamic(() => import("../components/Homepage/AboutUs"));
const Banner = dynamic(() => import("../components/Homepage/Banner"));
const ContactInfo = dynamic(() => import("../components/Homepage/ContactInfo"));
const FullMenuBanner = dynamic(() =>
  import("../components/Homepage/FullMenuBanner")
);
const MealServices = dynamic(() =>
  import("../components/Homepage/MealServices")
);

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Nhà hàng chay An Trú</title>
        <meta name="description" content="Trang chủ nhà hàng chay An Trú" />
        <meta
          name="keywords"
          content="An Trú, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nhà hàng chay An Trú" />
        <meta
          property="og:description"
          content="Trang chủ nhà hàng chay An Trú"
        />
        <meta property="og:url" content="https://nhahangchayantru.vn" />
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        {/* <link
          rel="preload"
          href="https://images.unsplash.com/photo-1630492782892-74f99406dc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          as="image"
        /> */}
        <link rel="canonical" href="https://nhahangchayantru.vn" />
      </Head>

      <Header />
      <main>
        <Banner />
        <ContactInfo />
        <AboutUs />
        <MealServices />
        <FullMenuBanner />
        <HighlightedDishes />
      </main>
      <Footer />
    </Fragment>
  );
}
