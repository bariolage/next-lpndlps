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
  <Layout globalData={globalData}>
   <SEO globalData={globalData} title={homeData.title} />
   <Hero title={homeData.title} message={homeData.message} />
   {homeData.sections.map((section, i) => (
    <Fragment key={`home-${i}`}>
     <Text body={section.content} />
     <Cover image={section.cover.url} />
    </Fragment>
   ))}
  </Layout>
 );
}
