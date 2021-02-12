import Image from "next/image";
import styles from "./images.module.css";

export default function Images({ images }) {
  return (
    <section className={styles.section}>
      {images.map((item, i) => (
        <figure key={`image-${i}`} className={styles.figure}>
          <Image alt="image" src={item} layout="fill" objectFit="cover" />
        </figure>
      ))}
    </section>
  );
}
