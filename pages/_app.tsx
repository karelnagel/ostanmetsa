import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "./../components/header";
import { Footer } from "./../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const name = "Ostanmetsa.ee";
  const description = "Ostame Lõuna-Eestis kuusepalki. Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna.";
  const url = "https://ostanmetsa.vercel.app";
  const image = `${url}/logo.png`;

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta name="keywords" content="mets, ost, müük, kuusk, kask, palk, harvester, majandamine" />

        <meta name="og:title" content={name} />
        <meta name="og:url" content={url} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="geo.position" content="57.84207777546021, 27.01856912768089" />
        <meta name="geo.placename" content="Võru, Estonia" />
        <meta name="geo.region" content="EE" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
