import { usePickup } from "../lib/usePickup";

export default function DatePicker({ pickupLocations }) {
 const { data } = usePickup(pickupLocations);
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
  </>
 );
}
