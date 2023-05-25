import "@fortawesome/fontawesome-svg-core/styles.css";
import "../css/style.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Footer from "components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
