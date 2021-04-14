import Text from "../components/text";
import Gallery from "../components/gallery";
import Table from "../components/table";
import Hero from "../components/hero";
import Cover from "../components/cover";
import Layout from "../components/layout";
import { getGlobalData, getMenuData } from "../lib/get";
import SEO from "../components/seo";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const menuData = await getMenuData();
 return {
  props: {
   menuData,
   globalData,
  },
 };
}

export default function Menu({ menuData, globalData }) {
 return (
  <Layout globalData={globalData}>
   <SEO globalData={globalData} title={menuData.title} />
   <Hero title={menuData.title} message={menuData.message} />
   <Table data={menuData.categories} />
   <Cover image={menuData.cover.url} />
   <Text fullWith="true" body={menuData.content} />
   <Gallery fullWith="true" images={menuData.gallery} />
  </Layout>
 );
}
