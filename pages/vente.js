import matter from "gray-matter";
import Text from "../components/text";
import Hero from "../components/hero";
import Table from "../components/table";
import Cover from "../components/cover";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Page from "../components/page";
import { getGlobalData } from "../lib/getGlobalData";
import SEO from "../components/seo";

export async function getStaticProps() {
  const content = await import(`../content/vente.md`);
  const data = matter(content.default);

  const table = [];
  const shops = [];
  data.data.pos.map((mag) => {
    const items = [];
    mag.items.map((item) => {
      items.push({
        name: item.name,
        coordinates: item.coordinates,
      });
      shops.push(item);
    });
    table.push({
      title: mag.title,
      items: items,
    });
  });

  const globalData = await getGlobalData();

  return {
    props: {
      //body: data.content,
      pageData: { ...data.data, table, shops, body: data.content },
      //table,
      //shops,
      globalData,
    },
  };
}

export default function Vente({ body, pageData, table, shops, globalData }) {
  const viewportInit = { lat: 48.35261871558314, lng: -4.4191839176185725 };
  const [viewport, setViewport] = useState(viewportInit);
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/leafmap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <Page globalData={globalData}>
      <SEO globalData={globalData} title={pageData.title} />
      <Hero title={pageData.title} message={pageData.message} />
      <Table
        data={pageData.table}
        withMap="true"
        viewportInit={viewportInit}
        viewport={viewport}
        setViewport={setViewport}
      />
      <Map shops={pageData.shops} viewport={viewport} />
      <Cover image={pageData.cover} />
      <Text body={pageData.body} id="infos" />
    </Page>
  );
}
