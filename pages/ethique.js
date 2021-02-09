/* import matter from "gray-matter";
import sizeOf from "image-size";
import Text from "../components/text";
import Images from "../components/images";

export async function getStaticProps() {
  const content = await import(`../content/pages/about.md`);
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

export default function Ethique({ body, images }) {
  return (
    <>
      <Text body={body} />
      <Images images={images} />
    </>
  );
}
 */
