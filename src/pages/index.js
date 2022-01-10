import Head from "next/head";
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
    <div>
      <Head>
        <title>Nhà hàng An Trú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Homepage of An Tru" />
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
    </div>
  );
}
