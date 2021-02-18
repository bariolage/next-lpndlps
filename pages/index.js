import matter from "gray-matter";
import Text from "../components/text";
import { Fragment } from "react";
import Hero from "../components/hero";
//import Cover from "../components/cover";
import Page from "../components/page";
import dynamic from "next/dynamic";
import { getGlobalData } from "../lib/getGlobalData";
import SEO from "../components/seo";
const Cover = dynamic(() => import("../components/cover"));

export async function getStaticProps() {
  const content = await import(`../content/about.md`);
  const data = matter(content.default);

  const globalData = await getGlobalData();
  return {
    props: {
      pageData: data.data,
      globalData,
    },
  };
}

export default function Home({ pageData, globalData }) {
  return (
    <Page globalData={globalData}>
      <SEO globalData={globalData} title={pageData.title} />
      <Hero title={pageData.title} message={pageData.message} />
      {pageData.section.map((section, i) => (
        <Fragment key={`home-${i}`}>
          <Text body={section.content} />
          <Cover image={section.cover} />
        </Fragment>
      ))}
    </Page>
  );
}
