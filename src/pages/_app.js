import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 2,
    color: "#C49B63",
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-full box-border">
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
