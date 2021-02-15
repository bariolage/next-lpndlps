import matter from "gray-matter";
import Text from "../components/text";
import { Fragment } from "react";
import Hero from "../components/hero";
//import Cover from "../components/cover";
import Page from "../components/page";
import dynamic from "next/dynamic";

const Cover = dynamic(() => import("../components/cover"));

export async function getStaticProps() {
  const content = await import(`../content/pages/about.md`);
  const data = matter(content.default);

  const infos = await import(`../content/infos.json`);
  const contact = await import(`../content/pages/contact.md`);
  const contactData = matter(contact.default);
  return {
    props: {
      data: data.data,
      infos: infos.default,
      contact: {
        frontmatter: contactData.data,
        content: contactData.content,
      },
    },
  };
}

export default function Home({ data, infos, contact }) {
  return (
    <Page infos={infos} contact={contact}>
      <Hero title={data.title} message={data.message} />
      {data.section.map((section, i) => (
        <Fragment key={`home-${i}`}>
          <Text body={section.content} />
          <Cover image={section.cover} />
        </Fragment>
      ))}
    </Page>
  );
}
