import "../styles/globals.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Layout from "@/components/common/Layout.js";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
