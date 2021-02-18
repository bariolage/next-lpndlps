import matter from "gray-matter";
import Text from "../components/text";
import Gallery from "../components/gallery";
import Table from "../components/table";
import Hero from "../components/hero";
import Cover from "../components/cover";
import Page from "../components/page";
import { getGlobalData } from "../lib/getGlobalData";
import SEO from "../components/seo";

export async function getStaticProps() {
  const content = await import(`../content/pages/pain.md`);
  const data = matter(content.default);

  const globalData = await getGlobalData();

  return {
    props: {
      body: data.content,
      pageData: data.data,
      globalData,
    },
  };
}

export default function Pains({ body, pageData, globalData }) {
  return (
    <Page globalData={globalData}>
      <SEO globalData={globalData} title={pageData.title} />
      <Hero title={pageData.title} message={pageData.message} />
      <Table data={pageData.carte} />
      <Cover image={pageData.cover} />
      <Text fullWith="true" body={body} />
      <Gallery fullWith="true" images={pageData.gallery} />
    </Page>
  );
}
