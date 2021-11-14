import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import SEO from "@components/seo";
import Hero from "@components/hero";

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
