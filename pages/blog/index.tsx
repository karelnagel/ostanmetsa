import styles from "./../../styles/Blog.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../../interfaces";
import Link from "next/link";
import Image from "next/image";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <main className={styles.blog}>
      <div className={styles.top}>
        <h1>Blogi posititused ja uudised</h1>
      </div>
      <div className={styles.posts}>
        {posts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`}>
            <a className={styles.post}>
              <div className={styles.image}>
                <Image src={post.thumbnailUrl!} alt={post.title} layout="fill"></Image>
              </div>
              <div className={styles.content}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data } = matter(markdownWithMeta);
    return {
      ...data,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
