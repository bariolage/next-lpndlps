import matter from "gray-matter";
import Text from "../components/text";
import Images from "../components/images";
import sizeOf from "image-size";
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
  return {
    props: {
      title: data.data.title,
      body: data.content,
      images,
    },
  };
}

export default function Vente({ body, images, frontmatter }) {
  return (
    <>
      <Text body={body} />
      <Images images={images} />
    </>
  );
}
