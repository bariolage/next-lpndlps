import Hero from "../components/hero";
import Page from "../components/page";
import dynamic from "next/dynamic";
import { getGlobalData } from "../lib/getGlobalData";
import SEO from "../components/seo";

const Cover = dynamic(() => import("../components/cover"));

export async function getStaticProps() {
  const globalData = await getGlobalData();
  return {
    props: {
      globalData,
    },
  };
}

export default function Home({ globalData }) {
  return (
    <Page globalData={globalData} title="Mentions Légales">
      <SEO globalData={globalData} />
      <Hero title="Mentions Légales" />
    </Page>
  );
}
