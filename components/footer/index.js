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
      <a href="#header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={styles.topButton}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
