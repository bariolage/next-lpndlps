import { getGlobalData, getHomeData } from "../lib/get";

export async function getStaticProps() {
 const globalData = await getGlobalData();
 const homeData = await getHomeData();
 return {
  props: {
   homeData,
   globalData,
  },
 };
}

export default function Custom500({ homeData, globalData }) {
 return (
  <>
   <p>500 - Server-side error occurred</p>
  </>
 );
}
