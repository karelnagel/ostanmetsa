import logo from "./../images/logo.png";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Ostanmetsa.ee</h3>
        <Image src={logo} alt="logo"></Image>
      </div>
    </footer>
  );
}
