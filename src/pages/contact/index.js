import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/GeneralUI/Header"));
const Footer = dynamic(() => import("../../components/GeneralUI/Footer"));
const CommentSection = dynamic(() =>
  import("../../components/ContactUs/CommentSection")
);
const ContactInfo = dynamic(() =>
  import("../../components/ContactUs/ContactInfo")
);
const BannerImage = dynamic(() =>
  import("../../components/GeneralUI/BannerImage")
);
const Map = dynamic(() => import("../../components/MapBox/Map"));

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
        <BannerImage
          upperHeading="Liên hệ"
          lowerHeading="Đến chúng tôi"
          img="https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
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
