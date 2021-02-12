import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import { useRouter } from "next/router";
import { useAppContext } from "../../pages/_app";

const Navigation = (props) => {
  const { menuIsOpen, toggle } = useAppContext();
  const router = useRouter();
  return (
    <>
      {/* <button className={styles.menuButton} onClick={() => toggle(!menuIsOpen)}>
        <FontAwesomeIcon className={styles.menu} icon={faBars} />
      </button> */}
      <nav className={styles.nav + " " + styles.nav_open}>
        <ul className={styles.ul}>
          {props.navigation &&
            props.navigation.map((item) => (
              <li
                className={
                  styles.li +
                  " " +
                  (router.pathname === item.slug && styles.li_invert)
                }
                key={`nav-${item.slug}`}
                onClick={() => toggle(false)}
              >
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
    </>
  );
};

export default Navigation;
