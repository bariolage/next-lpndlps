import React from "react";
import { usePickup } from "../lib/usePickup";

const PickupTable = ({ pickupData }) => {
 const { data } = usePickup(pickupData);
 return (
  <div className=" overflow-x-auto">
   <table className="my-4 table-auto p-2 m-1 mx-auto">
    <thead>
     <tr>
      <th
       className="border-2 border-gray-300 px-2 font-normal text-sm whitespace-normal"
       rowSpan="2"
      >
       Commandes jusqu'à 13h la veille.
      </th>
      {data.map((e, i) => (
       <th
        key={`day-${i}`}
        className="border-2 border-gray-300 px-2 whitespace-nowrap"
       >
        {e.nextDate}
       </th>
      ))}
     </tr>
     <tr>
      {data.map((e, i) => (
       <th
        key={`dayOption-${i}`}
        className="border-2 border-gray-300 px-2 font-normal text-sm whitespace-nowrap"
       >
        {e.countDown}
       </th>
      ))}
     </tr>
    </thead>
    <tbody>
     {pickupData.map((e, i) => (
      <tr
       key={`pickup-${i}`}
       className={`${i % 2 === 1 && "bg-gray-200"} font-bold`}
      >
       <td className="border-2 border-gray-300 px-2 whitespace-nowrap">
        {e.name}
       </td>
       {data.map((d, index) => (
        <td
         key={`valid-${index}`}
         className={`text-center text-gray-700 border-2 border-gray-300`}
        >
         {e.pickupDay.find((obj) => obj.day == d.day) ? "✔️" : ""}
        </td>
       ))}
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default PickupTable;
