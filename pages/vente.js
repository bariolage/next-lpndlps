import matter from "gray-matter";
import Text from "../components/text";
import Hero from "../components/hero";
import Table from "../components/table";
import Cover from "../components/cover";
import Map from "../components/map";

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

  const apiKey = process.env.NEXT_PUBLIC_GMAP_KEY;
  return {
    props: {
      body: data.content,
      data: data.data,
      table,
      apiKey,
      shops,
    },
  };
}

export default function Vente({ body, data, table, shops, apiKey }) {
  return (
    <>
      <Hero title={data.title} message={data.message} />
      <Table data={table} withMap="true" />
      <Map apiKey={apiKey} shops={shops} />
      <Cover image={data.cover} />
      <Text body={body} id="infos" />
    </>
  );
}
