import matter from "gray-matter";
import Text from "../components/text";
import { Fragment } from "react";
import Hero from "../components/hero";
import Cover from "../components/cover";

export async function getStaticProps() {
  const content = await import(`../content/pages/about.md`);
  const data = matter(content.default);

  return {
    props: {
      data: data.data,
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <Hero title={data.title} message={data.message} />
      {data.section.map((section, i) => (
        <Fragment key={`home-${i}`}>
          <Text body={section.content} />
          <Cover image={section.cover} />
        </Fragment>
      ))}
    </>
  );
}
