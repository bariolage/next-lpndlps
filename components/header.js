import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation";

const Header = ({ globalData }) => {
 return (
  <header
   className="relative z-20 flex flex-col justify-between bg-gray-800 text-white w-screen py-8 px-4 lg:h-128 lg:w-1/2 lg:p-16 lg:absolute lg:top-0 lg:left-0"
   id="header"
  >
   <Link href="/">
    <a className="z-20">
     <h1 className="text-white text-4xl w-2/3 lg:w-auto lg:text-5xl hover:text-blue-500">
      {globalData.global.title}
     </h1>
    </a>
   </Link>
   <p className="z-20 text-white">{globalData.global.description}</p>
   <Navigation navigation={globalData.global.navigation} />
   <a
    href="#"
    class="z-20 bg-blue-700 rounded-full fixed top-0 right-0 my-8 mx-8 p-2 lg:p-4 lg:m-12 shadow-md hover:shadow-xl snipcart-checkout"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="24"
     height="24"
     className="fill-current"
    >
     <path fill="none" d="M0 0h24v24H0z" />
     <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
   </a>
   <figure className="absolute top-0 right-0 bottom-0 left-0">
    <Image
     alt={globalData.global.coverAlt || "le pain des lou - illustration"}
     src={globalData.global.cover}
     layout="fill"
     objectFit="cover"
    />
   </figure>
  </header>
 );
};

export default Header;
