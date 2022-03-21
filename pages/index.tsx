import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "./../images/logo.png";
import { teenused } from "./../consts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../interfaces";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main>
      <nav className={styles.nav}>
        <Image src={logo} alt="logo" height={80} width={180}></Image>
        <div>
          <a href="#teenused">Teenused</a>
          <a href="#blogi">Blogi</a>
          <a href="#tood">Tehtud tood</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <div className={styles.top} id="home">
        <div className={styles.topContent}>
          <h1>Ostame Lõuna-Eestis kuusepalki</h1>
          <h3>Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna</h3>
          <a href="#kontakt">Küsi pakkumist</a>
        </div>
      </div>

      <div className={styles.teenused} id="teenused">
        <h2>Teenused</h2>
        <div>
          {teenused.map((teenus, i) => (
            <a key={i} className={styles.teenus} href={"/"}>
              <Image className={styles.teenusedImage} src={teenus.image} alt={teenus.title}></Image>
              <p className={styles.title}>{teenus.title}</p>
              <p className={styles.description}>{teenus.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.blog} id="blogi">
        <h2>Uudised</h2>
        {posts.map((post: any, i: number) => (
          <a key={i} href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            <Image src={post.thumbnailUrl} alt={post.title} width="100" height="100"></Image>
            <p>{post.description}</p>
          </a>
        ))}
      </div>
      <footer className={styles.footer}></footer>
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
