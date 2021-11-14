import Box from "@components/box";
import ProductList from "@components/productlist";
import { getGlobalData, getMenuData } from "@lib/get";
import PickupTable from "@components/pickuptable";

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
   <ProductList
    data={pageData.categories}
    shopIsActive={globalData.shop.isActive}
    fullWith="true"
    bg="light"
   />
   <Box image={pageData.cover.url} />
   <Box bg="light">
    <PickupTable pickupData={globalData.shop.pickup} />
   </Box>
   <Box bg="dark" body={pageData.content} bg="dark" />
  </>
 );
}
