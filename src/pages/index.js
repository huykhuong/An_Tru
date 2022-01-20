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
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1630492782892-74f99406dc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          as="image"
        />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></script> */}
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
