import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/GeneralUI/Footer";
import Header from "../components/GeneralUI/Header";
import AboutUs from "../components/Homepage/AboutUs";
import Banner from "../components/Homepage/Banner";
import ContactInfo from "../components/Homepage/ContactInfo";
import FullMenuBanner from "../components/Homepage/FullMenuBanner";
import HighlightedDishes from "../components/Homepage/HighlightedDishes";
import MealServices from "../components/Homepage/MealServices";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Nhà hàng An Trú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Homepage of An Tru" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></script>
      </Head>

      <Header />
      <main>
        <Banner />
        <ContactInfo />
        <AboutUs />
        <MealServices />
        <HighlightedDishes />
        <FullMenuBanner />
      </main>
      <Footer />
    </Fragment>
  );
}
