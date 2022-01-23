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
        <title>Nhà hàng An Trú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Trang thông tin chi tiết món ăn của Nhà hàng chay An Trú"
        />
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

// Fetch data at build time
export async function getStaticProps({ params }) {
  return {
    props: {},
    revalidate: 86400 * 7,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
