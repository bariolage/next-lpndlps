import { Fragment } from "react";
import styles from "./hero.module.css";
import ReactMarkdown from "react-markdown";

const Hero = ({ title, message }) => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>{title}</h2>
      <ReactMarkdown className={styles.message} source={message} />
    </section>
  );
};

export default Hero;
