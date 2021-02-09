import matter from "gray-matter";
import Text from "../components/text";
import Images from "../components/images";
import Hero from "../components/hero";
import Cover from "../components/cover";

export async function getStaticProps() {
  const content = await import(`../content/pages/about.md`);
  const data = matter(content.default);

  return {
    props: {
      title: data.data.title,
      body: data.content,
      data: data.data,
    },
  };
}

export default function Home({ body, images, data, pageProps }) {
  return (
    <>
      <Hero title={data.title} message={data.message} />
      {data.section.map((section, i) => (
        <>
          <Text body={section.content} />
          <Cover image={section.cover} />
        </>
      ))}
    </>
  );
}
