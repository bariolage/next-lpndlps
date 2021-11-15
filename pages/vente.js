import Box from "../components/box";
import ShopList from "../components/shopList";
import dynamic from "next/dynamic";
import { useState } from "react";
import { getGlobalData, getShopData } from "../lib/get";
import Thumbnail from "../components/thumbnail";
import Markdown from "../components/markdown";
import SEO from "../components/seo";
import Hero from "../components/hero";

const Map = dynamic(() => import("../components/leafmap"), {
 loading: () => <p>A map is loading</p>,
 ssr: false,
});

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const pageData = await getShopData();
 return {
  props: {
   pageData,
   globalData,
  },
 };
}

export default function Vente({ pageData, globalData }) {
 const viewportInit = { lat: 48.35261871558314, lng: -4.4191839176185725 };
 const [viewport, setViewport] = useState(viewportInit);
 const isViewportInit =
  viewport.lat === viewportInit.lat && viewport.lng === viewportInit.lng;

 return (
  <>
   <SEO globalData={globalData} title={pageData.title} />
   <Hero title={pageData.title} message={pageData.message} />
   <ShopList
    data={pageData.categories}
    viewportInit={viewportInit}
    viewport={viewport}
    setViewport={setViewport}
    isViewportInit={isViewportInit}
   />
   <Map
    shops={pageData.shops}
    viewportInit={viewportInit}
    viewport={viewport}
    setViewport={setViewport}
    isViewportInit={isViewportInit}
   />
   <Box isThumbnail="true">
    <Thumbnail image={pageData.cover.url} />
   </Box>
   <Box id="infos">
    <Markdown body={pageData.content} />
   </Box>
  </>
 );
}
