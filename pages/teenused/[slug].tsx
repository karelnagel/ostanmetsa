import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { Post } from "../../interfaces";
import styles from "../../styles/Post.module.css";
const components = {};

export default function TeenusedPage({ title, description, mdxSource, tags }: Post) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={tags?.toString()} />
      </Head>
      <main>
        <div className={styles.top} id="home">
          <h1>{title}</h1>
        </div>
        <article className={styles.content}>
          <MDXRemote {...mdxSource} components={components} />
        </article>
      </main>
    </>
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
