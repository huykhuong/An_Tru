import Head from "next/head";
import { Fragment } from "react";
import BannerImage from "../../components/ContactUs/BannerImage";
import CommentSection from "../../components/ContactUs/CommentSection";
import ContactInfo from "../../components/ContactUs/ContactInfo";
import Footer from "../../components/GeneralUI/Footer";
import Header from "../../components/GeneralUI/Header";
import Map from "../../components/MapBox/Map";

export default function Contact() {
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
          content="Trang Liên hệ của Nhà hàng chay An Trú"
        />
      </Head>

      <Header />

      <main className="lg:-mt-[88px] text-white font-prata">
        <BannerImage />
        <div className="lg:flex lg:justify-center lg:items-start lg:py-16">
          <ContactInfo />
          <CommentSection />
        </div>
        <div className="w-full h-[370px] px-5 mt-10 mb-32 md:px-16 lg:h-[600px] lg:max-w-[1034.094px] mx-auto">
          <h1 className="text-lg mb-5 xl:text-2xl">Vị trí của chúng tôi</h1>
          <Map />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
