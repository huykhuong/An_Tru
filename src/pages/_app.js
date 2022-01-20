import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";

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
      <div className="h-full bg-black-background box-border">
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
