//import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React from "react";
/* import "typeface-dosis"; */
//import { AnimateSharedLayout } from "framer-motion";
import Layout from "../components/layout";
//import { useRouter } from "next/router";
import Snipcart from "../components/snipcart";
//import Head from "next/head";
// import dynamic from "next/dynamic";
// const Snipcart = dynamic(() => import("../components/snipcart"), { ssr: true });

function MyApp({ Component, pageProps }) {
 //const { route } = useRouter();
 /* if (
  route === "/" ||
  route === "/carte" ||
  route === "/vente" ||
  route === "/legal"
 ) { */
 return (
  <>
   <Layout globalData={pageProps.globalData} pageData={pageProps.pageData}>
    <Component {...pageProps} />
   </Layout>
   {/* {pageProps.globalData.shop.isActive && (
     <Snipcart pickupLocations={pageProps.globalData.shop.pickup} />
    )} */}
   <Snipcart pickupLocations={pageProps.globalData.shop.pickup} />
  </>
 );
 /* } else {
  return (
   <>
    <Component {...pageProps} />
   </>
  );
 } */
}

export default MyApp;
