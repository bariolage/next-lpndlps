import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const Header = (props) => {
  const router = useRouter();
  return (
    <motion.header
      initial={{ paddingTop: "calc(var(--lg-height) + 1rem" }}
      animate={{
        paddingTop:
          router.pathname === "/"
            ? "calc(var(--lg-height) + 1rem)"
            : "calc(var(--sm-height) + 1rem)",
      }}
      className={styles.header}
    >
      <motion.figure
        animate={{
          height:
            router.pathname === "/" ? "var(--lg-height)" : "var(--sm-height)",
        }}
        className={styles.figure}
      >
        <Image src="/a_la_craie-72px.jpg" layout="fill" objectFit="cover" />
      </motion.figure>
      <Link href="/">
        <a className={styles.title}>
          <h1 className={styles.h1}>{props.title}</h1>
          <p>Fournil artisanal Nature & Progrès</p>
        </a>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {props.navigation &&
            props.navigation.map((item) => (
              <li className={styles.li} key={`nav-${item.slug}`}>
                <Link href={item.slug} passHref>
                  <a>
                    {router.pathname === item.slug
                      ? "/" + item.name
                      : item.name}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <article className={styles.article}>
        <header>
          <h3>En vente directe</h3>
        </header>
        <section className={styles.section_sell_infos}>
          <p>Mardi 18h au Jeudi soir</p>
          <p>Uniquement sur commande</p>
        </section>
        <section className={styles.section_postal}>
          <p>179 rte de Lodoen</p>
          <p>29470 Plougastel-Daoulas</p>
        </section>
      </article>
    </motion.header>
  );
};

export default Header;
