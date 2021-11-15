import React from "react";
//import Script from "next/script";
import DatePicker from "./datepicker";
import Head from "next/head";

const Snipcart = ({ pickupLocations }) => {
 return (
  <>
   {/* <Script
    src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
    strategy="lazyOnload"
   /> */}
   <Head>
    {/* <link rel="dns-prefetch" href="https://app.snipcart.com" />
    <link rel="dns-prefetch" href="https://cdn.snipcart.com" /> */}
    <link rel="preconnect" href="https://app.snipcart.com" />
    <link rel="preconnect" href="https://cdn.snipcart.com" />
    <link
     rel="preload"
     href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
     as="style"
     onLoad="this.onload=null;this.rel='stylesheet'"
    />
   </Head>
   <script
    async
    src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
    //strategy="lazyOnload"
   />
   <div
    hidden
    id="snipcart"
    data-api-key={process.env.NEXT_SNIPCART_API}
    data-config-modal-style="side"
   >
    <shipping-method section="bottom">
     <fieldset className="snipcart-form__set">
      <DatePicker pickupLocations={pickupLocations} />
     </fieldset>
    </shipping-method>
   </div>
  </>
 );
};

export default Snipcart;
