import Image from "next/image";
import styles from "./images.module.css";

export default function Images({ images }) {
  return (
    <section className={styles.section}>
      {images.map((item, i) => (
        <figure key={`image-${i}`} className={styles.figure}>
          <Image
            src={item.src}
            width={512}
            height={(512 / item.size.width) * item.size.height}
            layout="responsive"
          />
        </figure>
      ))}
    </section>
  );
}
