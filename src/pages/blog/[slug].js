import Head from "next/head";
import { Fragment } from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../../components/GeneralUI/Footer"));
const Header = dynamic(() => import("../../components/GeneralUI/Header"));
const PostDetail = dynamic(() => import("../../components/Blog/PostDetail"));
const SimilarPosts = dynamic(() =>
  import("../../components/Blog/SimilarPosts")
);

import { getPostDetails, getPosts, getSimilarPosts } from "../../graphServices";

const PostDetailPage = ({ post, similarPosts }) => {
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
          content="Thông tin bài blog của Nhà hàng chay An Trú"
        />
      </Head>

      <Header />

      <main className="mx-auto lg:grid lg:grid-cols-4 lg:gap-x-5 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        {/* Post Detail and Author div */}
        <div className="lg:col-span-3">
          <PostDetail post={post} />
        </div>
        {/* Recent Posts and Category tags div */}
        <div className="my-20 lg:col-span-1 lg:flex lg:flex-col lg:mt-8">
          <h1 className="text-[#001D38] text-2xl font-semibold px-4 md:px-16 lg:px-0">
            Bài viết tương tự
          </h1>
          <SimilarPosts similarPosts={similarPosts} />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default PostDetailPage;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  const categories = data.categories.map((category) => category.slug);
  const similarPosts = await getSimilarPosts(categories, data.slug);

  return {
    props: {
      post: data,
      similarPosts,
    },
    revalidate: 86400 * 7,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts?.map(({ node: { slug } }) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
