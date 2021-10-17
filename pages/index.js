import Text from "../components/text";
import { Fragment } from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import dynamic from "next/dynamic";
import { getGlobalData, getHomeData } from "../lib/get";
import SEO from "../components/seo";
const Cover = dynamic(() => import("../components/cover"));

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const homeData = await getHomeData();
 return {
  props: {
   homeData,
   globalData,
  },
 };
}

export default function Home({ homeData, globalData }) {
 return (
  <>
   <SEO globalData={globalData} title={homeData.title} />
   <Hero title={homeData.title} message={homeData.message} />
   {homeData.sections.map((section, i) => (
    <section
     key={`home-${i}`}
     style={{
      width: "100%",
      display: "flex",
      flexFlow: i % 2 == 0 ? "row wrap" : "row-reverse wrap",
     }}
    >
     <Text body={section.content} />
     <Cover image={section.cover.url} />
    </section>
   ))}
  </>
 );
}
