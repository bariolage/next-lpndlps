import Box from "../components/box";
import ProductList from "../components/productList";
import { getGlobalData, getMenuData } from "../lib/get";
import PickupTable from "../components/PickupTable";
import Markdown from "../components/markdown";
import Thumbnail from "../components/thumbnail";
import SEO from "../components/seo";
import Hero from "../components/hero";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const pageData = await getMenuData();
 return {
  props: {
   pageData,
   globalData,
  },
 };
}

export default function Menu({ pageData, globalData }) {
 return (
  <>
   <SEO globalData={globalData} title={pageData.title} />
   <Hero title={pageData.title} message={pageData.message} />
   <Box bg="light">
    <ProductList
     data={pageData.categories}
     shopIsActive={globalData.shop.isActive}
     fullWith="true"
     bg="light"
    />
    <PickupTable pickupData={globalData.shop.pickup} />
   </Box>
   <Box isThumbnail="true">
    <Thumbnail image={pageData.cover.url} />
   </Box>

   <Box bg="dark" fullWith="true">
    <Markdown body={pageData.content} />
   </Box>
  </>
 );
}
