import React from "react";
import Script from "next/script";
import Head from "next/head";
import { usePickup } from "@lib/usePickup";

const Snipcart = ({ pickupLocations }) => {
 const { data } = usePickup(pickupLocations);
 return (
  <>
   <Head>
    <link rel="preconnect" href="https://app.snipcart.com" />
    <link rel="preconnect" href="https://cdn.snipcart.com" />
    <link
     rel="preload"
     href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
     as="style"
     onLoad="this.onload=null;this.rel='stylesheet'"
    />
   </Head>
   <Script
    src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
    strategy="beforeInteractive"
   />
   <div
    hidden
    id="snipcart"
    data-api-key={process.env.NEXT_SNIPCART_API}
    data-config-modal-style="side"
   >
    <shipping-method section="bottom">
     <fieldset className="snipcart-form__set">
      <div className="snipcart-form__field">
       <snipcart-label
        for="retrait"
        className="snipcart__font--tiny"
        for="retrait"
       >
        Jour et lieu de retrait
       </snipcart-label>
       <snipcart-select
        name="retrait"
        className="snipcart-form__select  snipcart__font--secondary snipcart__font--bold"
       >
        {pickupLocations.map((e, i) => (
         <optgroup key={`place-${i}`} label={e.name}>
          {e.pickupDay.map((item) => {
           const nextDate = data.find((d) => d.day == item.day).nextDate;
           const value = `${e.name} - ${nextDate}`;
           return (
            <option key={`day-${item.id}`} value={value}>
             {value}
            </option>
           );
          })}
         </optgroup>
        ))}
       </snipcart-select>
      </div>
     </fieldset>
    </shipping-method>
   </div>
  </>
 );
};

export default Snipcart;
