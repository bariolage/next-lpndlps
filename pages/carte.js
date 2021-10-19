import Text from "../components/text";
import ProductList from "../components/productList";
import Hero from "../components/hero";
import Cover from "../components/cover";
import Layout from "../components/layout";
import { getGlobalData, getMenuData } from "../lib/get";
import SEO from "../components/seo";
import Image from "next/image";
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
  <>
   <SEO globalData={globalData} title={menuData.title} />
   <Hero title={menuData.title} message={menuData.message} />
   <ProductList
    data={menuData.categories}
    shopIsActive={globalData.shop.isActive}
   />
   <Cover image={menuData.cover.url} />
   <Text fullWith="true" body={menuData.content} />
  </>
 );
}
