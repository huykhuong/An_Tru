import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const BannerImage = dynamic(() =>
  import("../../components/GeneralUI/BannerImage")
);
const Footer = dynamic(() => import("../../components/GeneralUI/Footer"));
const Header = dynamic(() => import("../../components/GeneralUI/Header"));
const PostCard = dynamic(() => import("../../components/Blog/PostCard"));
import { getPosts } from "../../graphServices";

export default function Blog({ posts }) {
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
          content="Trang Blog của Nhà hàng chay An Trú"
        />
      </Head>

      <Header />

      <main className="lg:-mt-[88px] text-white font-prata">
        <div className="mb-10">
          <BannerImage
            upperHeading="Tin tức"
            lowerHeading="Về chúng tôi"
            img="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="mx-auto md:flex md:flex-wrap md:max-w-2xl lg:max-w-6xl">
          {posts?.map((post) => (
            <PostCard key={post.node.id} post={post.node} />
          ))}
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
