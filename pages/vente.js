import matter from "gray-matter";
import Text from "../components/text";
import Images from "../components/images";
import sizeOf from "image-size";
import Hero from "../components/hero";
import Table from "../components/table";
import Cover from "../components/cover";
import Map from "../components/map";

export async function getStaticProps() {
  const content = await import(`../content/pages/vente.md`);
  const data = matter(content.default);
  const images = [];
  data.data.images.map((image) => {
    images.push({
      src: image,
      size: sizeOf("public" + image),
    });
  });
  const table = [];
  const shops = [];
  data.data.pos.map((mag) => {
    const items = [];
    mag.items.map((item) => {
      //items.push(item.name);
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
      title: data.data.title,
      body: data.content,
      data: data.data,
      images,
      table,
      apiKey,
      shops,
    },
  };
}

export default function Vente({ body, images, data, table, shops, apiKey }) {
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
