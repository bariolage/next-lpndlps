import { useState, useEffect } from "react";
import { DateTime, Settings } from "luxon";

const getWeekDayIndex = (element) => {
 const daysID = [
  { day: "Dimanche", id: 0 },
  { day: "Lundi", id: 1 },
  { day: "Mardi", id: 2 },
  { day: "Mercredi", id: 3 },
  { day: "Jeudi", id: 4 },
  { day: "Vendredi", id: 5 },
  { day: "Samedi", id: 6 },
 ];
 return daysID.find((obj) => obj.day == element).id;
};

export function usePickup(pickupOptions) {
 Settings.defaultLocale = "fr";
 const now = () => DateTime.now();
 const [currentDate, setCurrentDate] = useState(now);
 useEffect(() => {
  const timeoutId = setTimeout(() => {
   setCurrentDate(now);
  }, 1000);

  return () => clearTimeout(timeoutId);
 }, [currentDate]);

 const nextWeekDay = (weekDay) => {
  const deadLine = currentDate.plus({ hours: 24 - 13 });
  const day = DateTime.fromObject({ weekday: getWeekDayIndex(weekDay) });
  const nextDay =
   deadLine > day
    ? deadLine > day.plus({ weeks: 1 })
      ? day.plus({ weeks: 2 })
      : day.plus({ weeks: 1 })
    : day;

  let {
   values: { days, hours, minutes, seconds },
  } = nextDay.diff(deadLine, ["days", "hours", "minutes", "seconds"]);

  return {
   date: nextDay.setLocale("fr").toFormat("ccc dd LLL"),
   countdown:
    (days > 0 ? days + "jour(s) " : "") + (hours > 0 ? hours + "h " : "") /* +
    (minutes > 0 ? minutes + "m " : "")  */ /* +
    Math.floor(seconds) +
    "s" */,
  };
 };

 const pickupData = [];
 pickupOptions.map((e) =>
  e.pickupDay.map(
   (d) =>
    !pickupData.find((obj) => obj.day == d.day) &&
    pickupData.push({
     id: getWeekDayIndex(d.day),
     day: d.day,
     nextDate: nextWeekDay(d.day).date,
     countDown: nextWeekDay(d.day).countdown,
    })
  )
 );
 pickupData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
 return { data: pickupData };
}
