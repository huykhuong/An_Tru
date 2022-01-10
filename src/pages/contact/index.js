import Head from "next/head";
import BannerImage from "../../components/ContactUs/BannerImage";
import ContactInfo from "../../components/ContactUs/ContactInfo";
import Footer from "../../components/GeneralUI/Footer";
import Header from "../../components/GeneralUI/Header";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Nhà hàng An Trú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Contact Page of An Tru" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></script>
      </Head>

      <Header />
      <main className="lg:-mt-[88px] text-white font-prata">
        <BannerImage />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
