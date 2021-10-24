import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React from "react";
import "typeface-dosis";
import { AnimateSharedLayout } from "framer-motion";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Script from "next/script";
import DatePicker from "../components/DataPicker";
function MyApp({ Component, pageProps }) {
 const { route } = useRouter();
 if (
  route === "/" ||
  route === "/carte" ||
  route === "/vente" ||
  route === "/legal"
 ) {
  return (
   <>
    <Layout globalData={pageProps.globalData}>
     {/* {pageProps.globalData.shop.isActive && (
      <Script
       src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
       strategy="lazyOnload"
      />
     )} */}
     <AnimateSharedLayout>
      <Component {...pageProps} />
     </AnimateSharedLayout>
    </Layout>
    {/* <div
     hidden
     id="snipcart"
     data-api-key={process.env.NEXT_SNIPCART_API}
     data-config-modal-style="side"
    >
     <shipping-method section="bottom">
      <fieldset className="snipcart-form__set">
       <DatePicker pickupLocations={pageProps.globalData.shop.pickup} />
      </fieldset>
     </shipping-method>
    </div> */}
   </>
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
