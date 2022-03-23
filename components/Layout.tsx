import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({
  title,
  description,
  keywords,
  children,
  top,
}: {
  title?: string;
  description?: string;
  keywords?: string;
  children: any;
  top: any;
}) {
  return (
    <>
      <Head>
        {title &&<title>{title}</title>}
        {description &&<meta name="description" content={description} />}
        {keywords &&<meta name="keywords" content={keywords} />}
      </Head>
      <main>
        <div className={styles.top} id="home">
          {top}
        </div>
        <article className={styles.content}>{children}</article>
      </main>
    </>
  );
}
