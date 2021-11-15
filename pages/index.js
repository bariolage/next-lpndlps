import Box from "../components/box";
import Markdown from "../components/markdown";
import SEO from "../components/seo";
import { getGlobalData, getHomeData } from "../lib/get";
import Hero from "../components/hero";
import Thumbnail from "../components/thumbnail";
//import Snipcart from "../components/Snipcart";
export async function getStaticProps() {
 const globalData = await getGlobalData();
 const pageData = await getHomeData();
 return {
  props: {
   pageData,
   globalData,
  },
 };
}

export default function Home({ pageData, globalData }) {
 return (
  <>
   {/* <Snipcart pickupLocations={globalData.shop.pickup} /> */}
   <SEO globalData={globalData} title={pageData.title} />
   <Hero title={pageData.title} message={pageData.message} />

   {pageData.sections.map((section, i) => (
    <section
     key={`home-${i}`}
     className={`w-full flex ${
      i % 2 == 0 ? "flex-row flex-wrap" : "flex-row-reverse flex-wrap"
     }`}
    >
     <Box>
      <Markdown body={section.content} />
     </Box>
     <Box isThumbnail="true">
      <Thumbnail image={section.cover.url} />
     </Box>
    </section>
   ))}
   <Box id="annonce" fullWith="true" bg="dark">
    <Markdown body={globalData.global.annonce.body || ""} />
   </Box>
  </>
 );
}
