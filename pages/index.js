import Box from "@components/box";
import { getGlobalData, getHomeData } from "../lib/get";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const pageData = await getHomeData();
 return {
  props: {
   pageData,
   globalData,
  },
 };
}

export default function Home({ pageData, globalData }) {
 return (
  <>
   {pageData.sections.map((section, i) => (
    <section
     key={`home-${i}`}
     style={{
      width: "100%",
      display: "flex",
      flexFlow: i % 2 == 0 ? "row wrap" : "row-reverse wrap",
     }}
    >
     <Box body={section.content} />
     <Box image={section.cover.url} />
    </section>
   ))}
  </>
 );
}
