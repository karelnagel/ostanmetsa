import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../interfaces";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
const teenusedFailid = ["metsa_ost", "metsa_muuk", "puidu_muuk", "veoteenus", "metsa_ulestootamine", "metsa_majandamine"];

export default function Home({ posts, teenused }: { posts: Post[]; teenused: Post[] }) {
  return (
    <main>
      <div className={styles.top} id="home">
        <div className={styles.topContent}>
          <h1>Ostame Lõuna-Eestis kuusepalki</h1>
          <h3>Teeme vastavalt sortimendi pikkusele ja läbimoodule personaalse tihumeetri hinna</h3>
          <Button href="#kontakt" color="white">
            Küsi pakkumist
          </Button>
        </div>
      </div>
      <section className={styles.meist}>
        <div className={styles.meistImage}>
          <Image src={"/blog/kas_telefoni_teel.jpeg"} alt="logo" layout="fill"></Image>
        </div>
        <div className={styles.meistText}>
          <h2>Meist</h2>
          <p>
            Oleme noor firma kuid kasvame jõudsalt tänu usaldusväärsele koostööle oma koostööpartneritega ja klientidega. Meie eesmärk on majandada
            metsanduses läbipaistvalt ja ausalt.
          </p>
          <div>
            <Button href={"/tood"} color="var(--color-green)">Tehtud tood</Button>
            <Button href={"/meist"} color="var(--color-brown)">Personal</Button>
          </div>
        </div>
      </section>
      <section className={styles.teenused} id="teenused">
        <h2>Teenused</h2>
        <div>
          {teenused.map((teenus, i) => (
            <a key={i} className={styles.teenus} href={`/teenused/${teenus.slug}`}>
              <div>
                <Image className={styles.teenusedImage} src={teenus.thumbnailUrl!} alt={teenus.title} layout="fill"></Image>
              </div>
              <h3 className={styles.title}>{teenus.title}</h3>
              <p className={styles.description}>{teenus.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.blog} id="blog">
        <h2>Viimased uudised</h2>
        <div>
          {posts.slice(0, 3).map((post: any, i: number) => (
            <a key={i} href={`/blog/${post.slug}`} className={styles.post}>
              <Image src={post.thumbnailUrl} alt={post.title} layout="fill" className={styles.postImage}></Image>
              <div className={styles.postText}>
                <h3>{post.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <Button href={"/blog"}>Loe rohkem</Button>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts", "blog"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", "blog", filename), "utf-8");
    const { data } = matter(markdownWithMeta);
    return {
      ...data,
      slug: filename.split(".")[0],
    };
  });

  const teenused = teenusedFailid.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", "teenused", filename + ".mdx"), "utf-8");
    const { data } = matter(markdownWithMeta);
    return {
      ...data,
      slug: filename,
    };
  });
  return {
    props: {
      posts,
      teenused,
    },
  };
};
