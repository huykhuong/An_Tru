import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/GeneralUI/Footer";
import Header from "../../components/GeneralUI/Header";
import InfoSection from "../../components/Menu/DetailPage/InfoSection";

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
