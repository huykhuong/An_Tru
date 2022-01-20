import Head from "next/head";
import { Fragment } from "react";
import Story from "../../components/AboutUs/Story";
import BannerImage from "../../components/GeneralUI/BannerImage";
import Footer from "../../components/GeneralUI/Footer";
import Header from "../../components/GeneralUI/Header";

export default function About() {
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
          content="Trang Về Chúng Tôi của Nhà hàng chay An Trú"
        />
      </Head>

      <Header />
      <main className="lg:-mt-[88px] text-white font-prata">
        <BannerImage
          upperHeading="Về"
          lowerHeading="Chúng tôi"
          img="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <Story />
      </main>
      <Footer />
    </Fragment>
  );
}
