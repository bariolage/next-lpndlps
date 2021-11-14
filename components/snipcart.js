import React from "react";
import Script from "next/script";
import DatePicker from "./Datepicker";

const Snipcart = ({ pickupLocations }) => {
 return (
  <>
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
      <DatePicker pickupLocations={pickupLocations} />
     </fieldset>
    </shipping-method>
   </div>
  </>
 );
};

export default Snipcart;
