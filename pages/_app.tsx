import "../css/style.css";
import type { AppProps } from "next/app";

import Layout from "components/Layout";
import Footer from "components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}
export default MyApp;
