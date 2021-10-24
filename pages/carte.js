import Text from "../components/text";
import ProductList from "../components/productList";
import Hero from "../components/hero";
import Cover from "../components/cover";
import Layout from "../components/layout";
import { getGlobalData, getMenuData } from "../lib/get";
import SEO from "../components/seo";
import { useState, useEffect } from "react";
import { DateTime, Settings } from "luxon";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const menuData = await getMenuData();
 return {
  props: {
   menuData,
   globalData,
  },
 };
}

export default function Menu({ menuData, globalData }) {
 Settings.defaultLocale = "fr";
 const now = () => DateTime.now();
 const [currentDate, setCurrentDate] = useState(now);

 useEffect(() => {
  const timeoutId = setTimeout(() => {
   setCurrentDate(now);
  }, 1000);

  return () => clearTimeout(timeoutId);
 }, [currentDate]);

 const daysID = [
  { day: "Dimanche", id: 7 },
  { day: "Lundi", id: 1 },
  { day: "Mardi", id: 2 },
  { day: "Mercredi", id: 3 },
  { day: "Jeudi", id: 4 },
  { day: "Vendredi", id: 5 },
  { day: "Samedi", id: 6 },
 ];

 const getNumDay = (element) => {
  return daysID.find((obj) => obj.day == element).id;
 };

 const dayOptions = [];
 globalData.shop.pickup.map((e) =>
  e.pickupDay.map(
   (d) =>
    !dayOptions.find((obj) => obj.day == d.day) &&
    dayOptions.push({ id: getNumDay(d.day), day: d.day })
  )
 );
 dayOptions.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

 const countdownInfo = (weekDay) => {
  const now = currentDate.plus({ hours: 24 - 13 });
  const day = DateTime.fromObject({ weekday: getNumDay(weekDay) });
  const nextDay =
   now > day
    ? now > day.plus({ weeks: 1 })
      ? day.plus({ weeks: 2 })
      : day.plus({ weeks: 1 })
    : day;

  let {
   values: { days, hours, minutes, seconds },
  } = nextDay.diff(now, ["days", "hours", "minutes", "seconds"]);

  return {
   next: nextDay.setLocale("fr").toFormat("cccc dd LLL"),
   c: { d: days, h: hours, m: minutes, s: seconds },
   countD:
    (days > 0 ? days + "j " : "") +
    (hours > 0 ? hours + "h " : "") +
    (minutes > 0 ? minutes + "m " : "") +
    Math.floor(seconds) +
    "s",
  };
 };

 return (
  <>
   <SEO globalData={globalData} title={menuData.title} />
   <Hero title={menuData.title} message={menuData.message} />
   <Text bg="light">
    <div className="prose max-w-prose mx-auto">
     <h3 className="uppercase text-3xl font-black mb-6 text-gray-800 text-center">
      Commandes à emporter
     </h3>
     <p>
      Lors de la finalisation de la commande, nous vous invitons à choisir parmi
      les points de retraits disponibles (voir ci-dessous), jusqu'à 13h la
      veille.
     </p>
    </div>
    <div className=" overflow-x-auto">
     <table className="my-4 table-auto p-2 m-1 mx-auto">
      <thead>
       <tr>
        <th />
        {dayOptions.map((e, i) => (
         <th className="border-2 border-gray-300 px-2">
          {countdownInfo(e.day).next}
         </th>
        ))}
       </tr>
       <tr>
        <th />
        {dayOptions.map((e, i) => (
         <th className="border-2 border-gray-300 px-2 font-normal text-sm">
          {countdownInfo(e.day).countD}
         </th>
        ))}
       </tr>
      </thead>
      <tbody>
       {globalData.shop.pickup.map((e, i) => (
        <tr
         key={`pickup-${i}`}
         className={`${i % 2 === 1 && "bg-gray-200"} font-bold`}
        >
         <td className="border-2 border-gray-300 px-2">{e.name}</td>
         {dayOptions.map((d, index) => (
          <td className={`text-center text-gray-700 border-2 border-gray-300`}>
           {e.pickupDay.find((obj) => obj.day == d.day) ? "x" : ""}
          </td>
         ))}
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </Text>
   <Cover image={menuData.cover.url} />
   <ProductList
    data={menuData.categories}
    shopIsActive={globalData.shop.isActive}
    fullWith="true"
   />
   <Text fullWith="true" body={menuData.content} bg="dark" />
  </>
 );
}
