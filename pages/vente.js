import matter from "gray-matter";
import Text from "../components/text";
import Hero from "../components/hero";
import Table from "../components/table";
import Cover from "../components/cover";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export const config = {
  amp: true,
};

export async function getStaticProps() {
  const content = await import(`../content/pages/vente.md`);
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

  return {
    props: {
      body: data.content,
      data: data.data,
      table,
      shops,
    },
  };
}

export default function Vente({ body, data, table, shops }) {
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
      <Hero title={data.title} message={data.message} />
      <Table data={table} withMap="true" />
      <Map shops={shops} />
      <Cover image={data.cover} />
      <Text body={body} id="infos" />
    </>
  );
}
