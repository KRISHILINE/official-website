import Head from "next/head";
import { AppProps } from "next/app";

import "@/app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Krishiline Synchronization India Pvt Ltd</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
