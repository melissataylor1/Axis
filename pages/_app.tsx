import "../css/style.css";

import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Footer from "components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>



      </head>
      <body>
    <Layout>
      <Component {...pageProps} />;
      <Footer />
    </Layout>
    </body>
      </html>
  );
}
export default MyApp;