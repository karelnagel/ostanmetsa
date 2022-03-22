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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Ostame Lõuna-Eestis kuusepalki. Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna."
        />
        <meta name="og:title" content="Ostanmetsa.ee" />
        <meta name="og:url" content="https://ostanmetsa.ee" />
        <meta
          name="og:description"
          content="Ostame Lõuna-Eestis kuusepalki. Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna."
        />
        <meta name="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="mets, ost, müük, kuusk, kask, palk, harvester, majandamine" />
        <meta name="geo.position" content="57.84207777546021, 27.01856912768089" />
        <meta name="geo.placename" content="Võru, Estonia" />
        <meta name="geo.region" content="EE" />
      </Head>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
