import { useState, useRef, useEffect } from "react";
export default function DatePicker({ pickupLocations }) {
 const altPickupLocations = [
  {
   name: "Beaj Kafé",
   pickupDay: ["Mardi", "Vendredi"],
  },
  {
   name: "Le Fournil",
   pickupDay: ["Mardi", "Mercredi", "Jeudi", "Vendredi"],
  },
  {
   name: "Le Lapic",
   pickupDay: ["Vendredi"],
  },
  {
   name: "CMB Arkéa",
   pickupDay: ["Mercredi"],
  },
 ];

 const daysID = [
  { day: "Dimanche", id: 0 },
  { day: "Lundi", id: 1 },
  { day: "Mardi", id: 2 },
  { day: "Mercredi", id: 3 },
  { day: "Jeudi", id: 4 },
  { day: "Vendredi", id: 5 },
  { day: "Samedi", id: 6 },
 ];

 const getNextDay = (element) => {
  Date.prototype.addHours = function (h) {
   this.setHours(this.getHours() + h);
   return this;
  };
  const id = daysID.find((obj) => obj.day == element).id;
  const now = new Date();
  const d = now.addHours(35);
  d.setDate(d.getDate() + ((((7 - d.getDay()) % 7) + id) % 7));
  return d.toLocaleString("fr-FR", {
   month: "short",
   day: "numeric",
   weekday: "long",
  });
 };

 return (
  <>
   <div class="snipcart-form__field">
    <snipcart-label for="retrait" class="snipcart__font--tiny" for="retrait">
     Jour et lieu de retrait
    </snipcart-label>
    <snipcart-select
     name="retrait"
     class="snipcart-form__select  snipcart__font--secondary snipcart__font--bold"
    >
     {pickupLocations.map((e, i) => (
      <optgroup key={`place-${i}`} label={e.name}>
       {e.pickupDay.map((item) => {
        const value = `${e.name} - ${getNextDay(item.day)}`;
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
  </>
 );
}
