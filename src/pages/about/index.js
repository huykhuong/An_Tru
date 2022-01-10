import Head from "next/head";
import BannerImage from "../../components/AboutUs/BannerImage";
import Story from "../../components/AboutUs/Story";
import Footer from "../../components/GeneralUI/Footer";
import Header from "../../components/GeneralUI/Header";

export default function About() {
  return (
    <div>
      <Head>
        <title>Nhà hàng An Trú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="AboutUs Page of An Tru" />
      </Head>

      <Header />
      <main className="lg:-mt-[88px] text-white font-prata">
        <BannerImage />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
