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

export default function Custom404({ homeData, globalData }) {
 return (
  <>
   <p>404 - Page Not Found</p>
  </>
 );
}
