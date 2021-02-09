import { Fragment } from "react";
import styles from "./page.module.css";
import Header from "../header";
import Footer from "../footer";
import Image from "next/image";

const Page = (props) => {
  return (
    <Fragment>
      <Header
        title={props.infos.siteTitle}
        headline={props.infos.headline}
        navigation={props.infos.navigation}
      />
      <main className={`${styles.main}`}>{props.children}</main>
      <Footer contactData={props.contactData} />
    </Fragment>
  );
};

export default Page;
