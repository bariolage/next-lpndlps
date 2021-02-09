import Image from "next/image";
import styles from "./cover.module.css";

export default function Cover({ image, about }) {
  return (
    <section className={styles.section + " " + (about && styles.float)}>
      <figure className={styles.figure}>
        <Image src={image} layout="fill" objectFit="cover" />
      </figure>
    </section>
  );
}
