import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../../interfaces";
import styles from "../../styles/Post.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";
const components = {};

export default function PostPage({ title, description, mdxSource, thumbnailUrl, tags }: Post) {
  return (
    <Layout
      title={title}
      description={description}
      keywords={tags?.toString()}
      top={
        <div className={styles.topContent}>
          <h1>{title}</h1>
          <div>
            <Image src={thumbnailUrl!} alt={title} layout="fill"></Image>
          </div>
        </div>
      }
    >
      <MDXRemote {...mdxSource} components={components} />
    </Layout>
    
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts", "blog"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts", "blog", slug + ".mdx"), "utf-8");

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
