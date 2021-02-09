import matter from "gray-matter";
import Text from "../components/text";
import Images from "../components/images";
import Table from "../components/table";
import Hero from "../components/hero";
import Cover from "../components/cover";

export async function getStaticProps() {
  const content = await import(`../content/pages/pain.md`);
  const data = matter(content.default);
  return {
    props: {
      body: data.content,
      data: data.data,
    },
  };
}

export default function Pains({ body, data }) {
  return (
    <>
      <Hero title={data.title} message={data.message} />
      <Table data={data.carte} />
      <Cover image={data.cover} />
      <Text body={body} />
      <Images images={data.gallery} />
    </>
  );
}
