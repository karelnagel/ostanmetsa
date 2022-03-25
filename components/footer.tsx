import logo from "./../images/logo.png";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export function Footer() {
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
    <footer>
      <div id="kontakt" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Kontakt</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Nimi" name="name" />
          <input type="mail" placeholder="E-post" name="email" required />
          <textarea placeholder="Sõnum" name="message" required></textarea>
          <button className="button" type="submit">
            {sending ? "Saadan..." : "Saada"}
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <div>
          <h3>Ostanmetsa.ee</h3>
          <Image src={logo} alt="logo"></Image>
        </div>
      </div>
    </footer>
  );
}
