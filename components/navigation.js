import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = (props) => {
 const router = useRouter();
 return (
  <>
   <nav className="mt-8 flex-1 z-20 w-full px-4 ">
    <ul className="flex flex-col items-end h-full justify-end">
     {props.navigation &&
      props.navigation.map((item) => (
       <li
        className={`${
         router.pathname === item.slug ? "bg-blue-700" : "bg-gray-800"
        }
        hover:bg-blue-700
        mb-2 rounded-2xl font-bold`}
        key={`nav-${item.slug}`}
       >
        <Link href={item.slug} passHref>
         <a className="block py-2 px-3">
          {router.pathname === item.slug ? item.name : item.name}
         </a>
        </Link>
       </li>
      ))}
    </ul>
   </nav>
  </>
 );
};

export default Navigation;
