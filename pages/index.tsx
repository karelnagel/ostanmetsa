import Image from "next/image";
import { MDXData } from "../interfaces";
import Link from "next/link";
import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { getMDXData, getMDXPaths } from "../functions/MDX";
import { ContactForm } from "../components/ContactForm";

export default function Home({ posts, teenused }: { posts: MDXData[]; teenused: MDXData[] }) {
  return (
    <main className="flex flex-col space-y-20 mb-20">
      <section className="h-[100vh] bg-main bg-cover" id="home">
        <div className="bg-black h-full bg-opacity-20 flex items-center">
          <div className="max-w-screen-lg m-auto flex items-start pt-20 ">
            <div className="flex flex-col  space-y-10 text-white basis-3/5 ">
              <h1 className="text-5xl font-bold ">Ostame Lõuna-Eestis kuusepalki</h1>
              <h3 className="text-2xl">Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna</h3>
            </div>
            <ContactForm teenused={teenused.map((t) => t.title) as string[]} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center m-auto max-w-screen-lg space-y-10" id="teenused">
        <h2 className="text-3xl font-bold uppercase">Teenused</h2>
        <div className="grid grid-cols-3 gap-6">
          {teenused.map((teenus, i) => (
            <Link key={i} href={`/teenused/${teenus.slug}`} passHref>
              <div className=" shadow-md rounded-lg p-4 h-60 w-60  group overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 group-hover:h-20 group-hover:w-20  duration-300 ease-in-out">
                    <Image className="object-contain" src={teenus.thumbnailUrl!} alt={teenus.title} layout="fill"></Image>
                  </div>
                  <h3 className="font-bold text-lg">{teenus.title}</h3>
                  <p className="">{teenus.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center m-auto max-w-screen-md space-y-10" id="blog">
        <h2 className="text-3xl uppercase font-bold">Kasulik lugemine</h2>
        <div className="flex flex-col rounded-lg overflow-hidden">
          {posts.slice(0, 7).map((post: any, i: number) => (
            <Link key={i} href={`/blog/${post.slug}`} passHref>
              <h3
                className={`
                ${i === 0 ? "" : "border-t"} 
                text-xl px-6 py-3 border-black bg-gray-100 hover:bg-gradient-primary hover:scale-105 cursor-pointer duration-100`}
              >
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
        <Link href={"/blog"} passHref>
          <button className="btn">Vaata kõik blogi postitused</button>
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
