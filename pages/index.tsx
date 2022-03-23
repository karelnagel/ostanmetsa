import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../interfaces";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const teenusedFailid = ["metsa_ost", "metsa_muuk", "puidu_muuk", "veoteenus", "metsa_ulestootamine", "metsa_majandamine"];

export default function Home({ posts, teenused }: { posts: Post[]; teenused: Post[] }) {
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: any) => {
    e.preventDefault();
    console.log("sending");
    if (sending) return;
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_USER_ID
      );
      console.log(result.text);
      form.current?.reset();
    } catch (e) {
      console.log(e);
    }
    setSending(false);
  };
  return (
    <main>
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
            <a key={i} className={styles.teenus} href={`/teenused/${teenus.slug}`}>
              <div>
                <Image className={styles.teenusedImage} src={teenus.thumbnailUrl!} alt={teenus.title} layout="fill"></Image>
              </div>
              <h3 className={styles.title}>{teenus.title}</h3>
              <p className={styles.description}>{teenus.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.blog} id="blog">
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
        <Link href="/blog">
          <a className={styles.blogButton}>Loe rohkem</a>
        </Link>
      </div>

      <div id="kontakt" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Kontakt</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Nimi" name="name" />
          <input type="mail" placeholder="E-post" name="email" required />
          <textarea placeholder="Sõnum" name="message" required></textarea>
          <button className="button" type="submit">
            {sending ? "Saadan ..." : "Saada"}
          </button>
        </form>
      </div>

      <footer className={styles.footer}></footer>
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
