import Head from "next/head";

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
      <main className="">
        <div className="bg-light h-96 bg-cover flex flex-col justify-end items-center font-bold uppercase text-primary text-3xl p-6" id="home">
          {top}
        </div>
        <article className="m-auto max-w-screen-lg px-2 py-10 flex flex-col items-center">{children}</article>
      </main>
    </>
  );
}
