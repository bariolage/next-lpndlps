import matter from "gray-matter";
import Text from "../components/text";
import Hero from "../components/hero";
import ShopList from "../components/shopList";
import Cover from "../components/cover";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Layout from "../components/layout";
import { getGlobalData, getShopData } from "../lib/get";
import SEO from "../components/seo";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const shopData = await getShopData();
 return {
  props: {
   shopData,
   globalData,
  },
 };
}

export default function Vente({ shopData, globalData }) {
 const viewportInit = { lat: 48.35261871558314, lng: -4.4191839176185725 };
 const [viewport, setViewport] = useState(viewportInit);
 const isViewportInit =
  viewport.lat === viewportInit.lat && viewport.lng === viewportInit.lng;
 const Map = useMemo(
  () =>
   dynamic(() => import("../components/leafmap"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
   }),
  []
 );
 return (
  <>
   <SEO globalData={globalData} title={shopData.title} />
   <Hero title={shopData.title} message={shopData.message} />
   <ShopList
    data={shopData.categories}
    viewportInit={viewportInit}
    viewport={viewport}
    setViewport={setViewport}
    isViewportInit={isViewportInit}
   />
   <Map
    shops={shopData.shops}
    viewportInit={viewportInit}
    viewport={viewport}
    setViewport={setViewport}
    isViewportInit={isViewportInit}
   />
   <Cover image={shopData.cover.url} />
   <Text body={shopData.content} id="infos" />
  </>
 );
}
