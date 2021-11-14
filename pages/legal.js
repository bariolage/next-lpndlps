import Box from "../components/box";
import { getGlobalData, getLegalData } from "../lib/get";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const pageData = await getLegalData();
 return {
  props: {
   globalData,
   pageData,
  },
 };
}

export default function Home({ globalData, pageData }) {
 return (
  <>
   <Box body={pageData.content} fullWith="true" bg="dark" />
  </>
 );
}
