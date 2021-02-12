import { Fragment } from "react";
import styles from "./page.module.css";
import Header from "../header";
import Footer from "../footer";

const Page = ({ infos, contact, children }) => {
  return (
    <Fragment>
      <Header
        title={infos.siteTitle}
        headline={infos.headline}
        navigation={infos.navigation}
      />
      <main className={`${styles.main}`}>{children}</main>
      <Footer contactData={contact} />
    </Fragment>
  );
};

export default Page;
