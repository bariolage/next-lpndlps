import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Text from "../text";
const Footer = ({ contactData }) => {
  return (
    <footer id="contact" className={styles.footer}>
      <figure className={styles.figure}>
        <Image
          src={contactData.frontmatter.cover}
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <Text body={contactData.content} />
    </footer>
  );
};

export default Footer;
