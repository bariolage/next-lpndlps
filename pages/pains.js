import matter from "gray-matter";
import Text from "../components/text";
import Images from "../components/images";
import Table from "../components/table";
import Hero from "../components/hero";
import Cover from "../components/cover";
import Page from "../components/page";

export async function getStaticProps() {
  const content = await import(`../content/pages/pain.md`);
  const data = matter(content.default);

  const infos = await import(`../content/infos.json`);
  const contact = await import(`../content/pages/contact.md`);
  const contactData = matter(contact.default);
  return {
    props: {
      body: data.content,
      data: data.data,
      infos: infos.default,
      contact: {
        frontmatter: contactData.data,
        content: contactData.content,
      },
    },
  };
}

export default function Pains({ body, data, infos, contact }) {
  return (
    <Page infos={infos} contact={contact}>
      <Hero title={data.title} message={data.message} />
      <Table data={data.carte} />
      <Cover image={data.cover} />
      <Text body={body} />
      <Images images={data.gallery} />
    </Page>
  );
}
