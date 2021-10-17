import { Fragment, useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";

const Layout = ({ infos, globalData, children }) => {
 return (
  <Fragment>
   {/* {globalData.global.annonce.visible && (
    <div className="p-4 lg:px-16 w-screen bg-white text-gray-800">
     <Link href="/#annonce">
      <a>
       {globalData.global.annonce.date} : {globalData.global.annonce.title}
      </a>
     </Link>
    </div>
   )} */}
   <Header globalData={globalData} />
   <main className="mx-auto flex flex-wrap flex-col lg:flex-row bg-white">
    {children}
   </main>
   <Footer globalData={globalData} />
  </Fragment>
 );
};

export default Layout;
