import Text from "../components/text";
import ProductList from "../components/productList";
import Hero from "../components/hero";
import Cover from "../components/cover";
import { getGlobalData, getMenuData } from "../lib/get";
import SEO from "../components/seo";
import PickupTable from "../components/PickupTable";

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
    fullWith="true"
    bg="light"
   />{" "}
   <Cover image={menuData.cover.url} />
   <Text bg="light">
    <PickupTable pickupData={globalData.shop.pickup} />
   </Text>
   <Text bg="dark" body={menuData.content} bg="dark" />
  </>
 );
}
