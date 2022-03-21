import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { Post } from "../../interfaces";

const components = {};

export default function PostPage({ title, date, mdxSource }: Post) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h3>{title}</h3>
      <h3>{date}</h3>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }): Promise<{ props: Post }> => {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...frontMatter,
      slug,
      mdxSource,
    },
  };
};
