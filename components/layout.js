import React from "react";
import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";
import Hero from "./hero";

const Layout = ({ globalData, pageData, children }) => {
 return (
  <>
   {pageData && <SEO globalData={globalData} title={pageData.title} />}
   <Header globalData={globalData} />
   <main className="mx-auto flex flex-wrap flex-col lg:flex-row bg-white">
    {pageData && (
     <Hero title={pageData.title} message={pageData.message || ""} />
    )}
    {children}
   </main>
   <Footer globalData={globalData} />
  </>
 );
};

export default Layout;
