import Box from "../components/box";
import Markdown from "../components/markdown";
import SEO from "../components/seo";
import { getGlobalData, getLegalData } from "../lib/get";
import Hero from "../components/hero";
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
   <SEO globalData={globalData} title={pageData.title} />
   <Hero title={pageData.title} message={pageData.message} />

   <Box fullWith="true" bg="dark">
    <Markdown body={pageData.content} />
   </Box>
  </>
 );
}
