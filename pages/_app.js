import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React from "react";
import "typeface-dosis";
import { AnimateSharedLayout } from "framer-motion";
import Layout from "../components/layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
 const { route } = useRouter();
 if (
  route === "/" ||
  route === "/carte" ||
  route === "/vente" ||
  route === "/legal"
 ) {
  return (
   <Layout globalData={pageProps.globalData}>
    <AnimateSharedLayout>
     <Component {...pageProps} />
    </AnimateSharedLayout>
   </Layout>
  );
 } else {
  return (
   <>
    <Component {...pageProps} />
   </>
  );
 }
}

export default MyApp;
