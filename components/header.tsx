import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import logo from "./../images/logo.png";

export function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>
          <Image src={logo} alt="logo" layout="fill"></Image>
        </a>
      </Link>
      <div>
        <Link href="/blog">Blogi</Link>
        <Link href="/tood">Tehtud tood</Link>
        <Link href="#kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}
