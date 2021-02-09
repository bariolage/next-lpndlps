import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../pages/_app";
import Navigation from "./navigation";

const Header = (props) => {
  const { menuIsOpen, toggle } = useAppContext();
  const router = useRouter();
  const home = router.pathname === "/";
  return (
    <header className={styles.header}>
      <figure
        className={styles.figure + " " + (menuIsOpen && styles.figureBack)}
      >
        <Image src="/a_la_craie-72px.jpg" layout="fill" objectFit="cover" />
      </figure>
      <Link href="/">
        <a className={styles.title}>
          <h1 className={styles.h1}>{props.title}</h1>
          <p>{props.headline}</p>
        </a>
      </Link>
      <Navigation navigation={props.navigation} />
      {/* {home && (
        <FontAwesomeIcon className={styles.chevron} icon={faChevronDown} />
      )} */}
    </header>
  );
};

export default Header;
