import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "./../components/header";
import { Footer } from "./../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ostanmetsa.ee</title>
        <meta name="description" content="Ostame Lõuna-Eestis kuusepalki" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
