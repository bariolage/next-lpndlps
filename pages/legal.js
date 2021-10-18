import Hero from "../components/hero";
import Layout from "../components/layout";
import Text from "../components/text";
import dynamic from "next/dynamic";
import { getGlobalData, getLegalData } from "../lib/get";
import SEO from "../components/seo";

const Cover = dynamic(() => import("../components/cover"));

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const legalData = await getLegalData();
 return {
  props: {
   globalData,
   legalData,
  },
 };
}

export default function Home({ globalData, legalData }) {
 return (
  <>
   <SEO globalData={globalData} />
   <Hero title={legalData.title} />
   <Text body={legalData.content} fullWith="true" bg="dark" />
  </>
 );
}
