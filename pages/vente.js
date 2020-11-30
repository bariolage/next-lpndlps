import matter from "gray-matter";
import Text from "../components/text";

export async function getStaticProps() {
  const content = await import(`../content/pages/vente.md`);
  const data = matter(content.default);
  return {
    props: {
      frontmatter: data.data,
      body: data.content,
    },
  };
}

export default function Vente({ body, frontmatter }) {
  return (
    <>
      <Text body={body} />
    </>
  );
}
