import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXData } from "../../interfaces";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { getMDXData, getMDXPaths } from "../../functions/MDX";

export default function Blog({ posts }: { posts: MDXData[] }) {
  return (
    <Layout top={<h1>Blogi posititused ja uudised</h1>}>
      <div className="grid grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`} passHref>
            <div className="flex flex-col h-60 shadow-md shadow-gray-400 rounded-lg relative group overflow-hidden hover:scale-110 cursor-pointer duration-200">
              <div className="relative h-40 basis-2/3 ">
                <Image src={post.thumbnailUrl!} alt={post.title} layout="fill" className=" object-cover rounded-t-lg"></Image>
                <div className="absolute bg-white h-full bg-opacity-40 text-center text-lg font-bold p-2 leading-6 invisible group-hover:visible">
                  <p>{post.description}</p>
                </div>
              </div>
              <div className="text-center p-4 basis-1/3 rounded-b-lg">
                <h2 className="font-bold text-xl">{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const paths = getMDXPaths(`posts/blog`);
  const posts = paths.map((filename) => {
    const {data} = getMDXData(`posts/blog/${filename}.mdx`);
    return data;
  });
  return {
    props: {
      posts,
    },
  };
};
