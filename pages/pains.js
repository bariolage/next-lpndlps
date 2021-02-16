import matter from "gray-matter";
import Text from "../components/text";
import Images from "../components/images";
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
      data: data.data,
      globalData,
    },
  };
}

export default function Pains({ body, data, globalData }) {
  return (
    <Page globalData={globalData}>
      <SEO globalData={globalData} title={data.title} />
      <Hero title={data.title} message={data.message} />
      <Table data={data.carte} />
      <Cover image={data.cover} />
      <Text full="true" body={body} />
      <Images full="true" images={data.gallery} />
    </Page>
  );
}
