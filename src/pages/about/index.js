import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Story = dynamic(() => import("../../components/AboutUs/Story"));
const BannerImage = dynamic(() =>
  import("../../components/GeneralUI/BannerImage")
);
const Footer = dynamic(() => import("../../components/GeneralUI/Footer"));
const Header = dynamic(() => import("../../components/GeneralUI/Header"));

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>Về chúng tôi - Nhà hàng An Trú</title>
        <meta
          name="keywords"
          content="Về chúng tôi, An Trú, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay, nhahangchayantru.vn"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Về chúng tôi" />
        <meta property="og:description" content />
        <meta property="og:url" content="https://nhahangchayantru.vn/about" />
        {/* <meta property="og:image:secure_url" content="https://bizweb.dktcdn.net/100/360/775/themes/729132/assets/logo.png?1622064036816"></meta> */}
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        <link rel="canonical" href="https://nhahangchayantru.vn/about" />
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
