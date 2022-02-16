import Head from "next/head";
import { Fragment } from "react";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/GeneralUI/Header"));
const Footer = dynamic(() => import("../../components/GeneralUI/Footer"));
const InfoSection = dynamic(() =>
  import("../../components/Menu/DetailPage/InfoSection")
);

const DishDetail = () => {
  return (
    <Fragment>
      <Head>
        {/* The title needs to be renamed according to the name of the dish */}
        {/* <title>Menu - Nhà hàng An Trú</title> */}
        <meta
          name="keywords"
          content="Menu, An Trú, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menu" />
        <meta property="og:description" content />
        {/* <meta property="og:url" content="https://iron-fever.vn/"/> */}
        {/* <meta property="og:image:secure_url" content="https://bizweb.dktcdn.net/100/360/775/themes/729132/assets/logo.png?1622064036816"></meta> */}
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        <link rel="canonical" href="https://nhahangchayantru.vn/menu" />
      </Head>

      <Header />

      <main>
        <InfoSection />
      </main>

      <Footer />
    </Fragment>
  );
};

export default DishDetail;

// // Fetch data at build time
// export async function getStaticProps({ params }) {
//   return {
//     props: {},
//     revalidate: 86400 * 7,
//   };
// }

// // Specify dynamic routes to pre-render pages based on data.
// // The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: false,
//   };
// }
