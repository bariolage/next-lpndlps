import { Fragment } from "react";
import styles from "./page.module.css";
import Header from "../header";
import Footer from "../footer";

const Page = (props) => {
  return (
    <Fragment>
      <Header
        title={props.infos.siteTitle}
        navigation={props.infos.navigation}
      />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Page;
