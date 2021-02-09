import matter from "gray-matter";
import Text from "../components/text";
import sizeOf from "image-size";
import Images from "../components/images";
import Table from "../components/table";
import Hero from "../components/hero";
import ReactMarkdown from "react-markdown";
import Cover from "../components/cover";

export async function getStaticProps() {
  const content = await import(`../content/pages/pain.md`);
  const data = matter(content.default);
  const images = [];
  data.data.gallery.map((image) => {
    images.push({
      src: image,
      size: sizeOf("public" + image),
    });
  });
  return {
    props: {
      title: data.data.title,
      body: data.content,
      data: data.data,
      images,
    },
  };
}

export default function Pains({ body, images, title, data }) {
  return (
    <>
      <Hero title={data.title} message={data.message} />
      <Table data={data.carte} />
      <Cover image={data.cover} />
      <Text body={body} />
      <Images images={images} />
    </>
  );
}
