import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../../interfaces";
import React from "react";
import Layout from "../../components/Layout";
const components = {};

export default function TeenusedPage({ title, description, mdxSource, tags }: Post) {
  return (
    <Layout title={title} description={description} keywords={tags?.toString()} top={<h1>{title}</h1>}>
      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts", "teenused"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts", "teenused", slug + ".mdx"), "utf-8");

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
