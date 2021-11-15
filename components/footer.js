import React from "react";
import Image from "next/image";
import Link from "next/link";
//import Box from "./box";
//import { useRouter } from "next/router";

const Footer = ({ globalData }) => {
 //const router = useRouter();
 //const isHome = router.pathname === "/";
 return (
  <footer
   className="relative flex flex-wrap flex-col lg:flex-row items-start lg:items-stretch"
   id="contact"
  >
   <section className=" p-4  lg:p-16 bg-blue-700 text-white w-full lg:w-1/2">
    <h2 className="uppercase mb-8 text-2xl font-bold">
     {globalData.contact.title}
    </h2>
    <p>{globalData.contact.description}</p>
    <ul>
     <li className="flex my-8">
      <svg
       className="fill-current mr-4"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       width="24"
       height="24"
      >
       <path fill="none" d="M0 0h24v24H0z" />
       <path d={paths.mail} />
      </svg>
      <p>{globalData.contact.mail}</p>
     </li>
     <li className="flex my-8">
      <svg
       className="fill-current mr-4"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       width="24"
       height="24"
      >
       <path fill="none" d="M0 0h24v24H0z" />
       <path d={paths.phone} />
      </svg>
      <ul>
       {globalData.contact.telephone.map((e, i) => (
        <li className="flex" key={e.number + i}>
         <p>
          {e.name} : {e.number}
         </p>
        </li>
       ))}
      </ul>
     </li>
     <li className="flex my-8">
      <svg
       className="fill-current mr-4"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       width="24"
       height="24"
      >
       <path fill="none" d="M0 0h24v24H0z" />
       <path d={paths.address} />
      </svg>
      <p>
       {globalData.contact.address.streetAddress +
        ", " +
        globalData.contact.address.postalCode +
        " " +
        globalData.contact.address.addressLocality}
      </p>
     </li>
    </ul>
   </section>
   <section className="w-full lg:w-1/2 p-1 lg:p-0 bg-white text-gray-88 flex flex-col items-center justify-between">
    <figure className="relative w-full">
     <Image
      src={globalData.contact.banner.url}
      alt="carte"
      layout="responsive"
      width={globalData.contact.banner.width}
      height={globalData.contact.banner.height}
     />
    </figure>
    <div className="mb-8 flex flex-col items-center lg:flex-row lg:items-baseline ">
     <Link href="/legal" passHref>
      <a className="underline lg:mr-8 hover:text-blue-700">Mentions Légales</a>
     </Link>
     <p>lepaindeslou@2021</p>
    </div>
   </section>
   <a className="text-gray-800" href="#header">
    <svg
     className="fill-blue-700 absolute bottom-0 right-0 h-12 w-12 m-8 bg-transparent"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="24"
     height="24"
    >
     <title>Scroll to Top</title>
     <path fill="none" d="M0 0h24v24H0z" />
     <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
    </svg>
   </a>
  </footer>
 );
};

export default Footer;

const paths = {
 mail:
  "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z",
 phone:
  "M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z",
 address:
  "M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
};
