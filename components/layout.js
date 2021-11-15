import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ globalData, pageData, children }) => {
 return (
  <>
   <Header globalData={globalData} />
   <main className="mx-auto lg:flex lg:flex-row lg:flex-wrap bg-white tracking-wide ">
    {children}
   </main>
   <Footer globalData={globalData} />
  </>
 );
};

export default Layout;
