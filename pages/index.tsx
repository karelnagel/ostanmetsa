import Image from "next/image";
import { MDXData } from "../interfaces";
import Link from "next/link";
import React from "react";
import { getMDXData, getMDXPaths } from "../functions/MDX";
import { ContactForm } from "../components/ContactForm";

export default function Home({ posts, teenused }: { posts: MDXData[]; teenused: MDXData[] }) {
  return (
    <main className="flex flex-col space-y-20 mb-20">
      <section className="min-h-screen bg-main bg-cover" id="home">
        <div className="bg-black h-full bg-opacity-20 flex items-center px-2">
          <div className="max-w-screen-lg m-auto flex flex-col md:flex-row items-center md:items-start pt-20 justify-around h-full md:h-auto my-10">
            <div className="flex flex-col  space-y-10 text-white md:basis-3/5 ">
              <h1 className=" text-3xl md:text-5xl font-bold ">Ostame Lõuna-Eestis kuusepalki</h1>
              <h3 className=" text-lg md:text-2xl">Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna</h3>
            </div>
            <ContactForm teenused={teenused.map((t) => t.title) as string[]} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center m-auto max-w-screen-lg space-y-10 px-4" id="teenused">
        <h2 className="h2">Teenused</h2>
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {teenused.map((teenus, i) => (
            <Link key={i} href={`/teenused/${teenus.slug}`} passHref>
              <div className=" shadow-md rounded-lg p-2 md:p-4 h-32 md:h-60 md:w-60  group overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center md:space-y-4">
                  <div className="relative h-20 w-20 md:h-40 md:w-40 md:group-hover:h-20 md:group-hover:w-20  duration-300 ease-in-out">
                    <Image className="object-contain" src={teenus.thumbnailUrl!} alt={teenus.title} layout="fill"></Image>
                  </div>
                  <h3 className="md:font-bold md:text-lg leading-4">{teenus.title}</h3>
                  <p className="hidden md:block">{teenus.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center m-auto max-w-screen-md space-y-10 px-4" id="blog">
        <h2 className="h2">Kasulik lugemine</h2>
        <div className="flex flex-col rounded-lg overflow-hidden">
          {posts.slice(0, 7).map((post: any, i: number) => (
            <Link key={i} href={`/blog/${post.slug}`} passHref>
              <h3
                className={`
                ${i === 0 ? "" : "border-t"} 
                md:text-xl px-6 py-3 border-black bg-gray-100 hover:bg-gradient-primary hover:scale-105 cursor-pointer duration-100`}
              >
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
        <Link href={"/blog"} passHref>
          <button className="btn">Kõik blogi postitused</button>
        </Link>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const blogPaths = getMDXPaths(`posts/blog`);
  const posts = blogPaths.map((filename) => {
    const { data } = getMDXData(`posts/blog/${filename}.mdx`);
    return data;
  });

  const teenusedPaths = getMDXPaths(`posts/teenused`);
  const teenused = teenusedPaths
    .map((filename) => {
      const { data } = getMDXData(`posts/teenused/${filename}.mdx`);
      return data;
    })
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  return {
    props: {
      posts,
      teenused,
    },
  };
};
