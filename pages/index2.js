/* import matter from "gray-matter";
import sizeOf from "image-size";
import Text from "../components/text";
import Images from "../components/images";
import Hero from "../components/hero";
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

  const context = require.context("../content/pages", false, /\.md$/);
  const pages = [];
  for (const key of context.keys()) {
    const page = key.slice(2);
    const content = await import(`../content/pages/${page}`);
    const meta = matter(content.default);
    pages.push({
      slug: page.replace(".md", ""),
      title: meta.data.title,
      data: meta.data,
      body: meta.content,
    });
  }

  return {
    props: {
      //title: data.data.title,
      body: data.content,
      images,
      pages: pages,
    },
  };
}

export default function Home({ body, images, pages }) {
  return (
    <>
      <article>
        <Hero />
        <section>
          {pages.map((page, i) => (
            <Text key={i} body={page.body} data={page.data} />
          ))}
        </section>
      </article>
    </>
  );
}
 */
