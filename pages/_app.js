import "../styles/globals.css";
import Page from "../components/page";
import "typeface-boogaloo";
import "typeface-mukta";
import "typeface-damion";
import "typeface-cookie";
import "typeface-cutive-mono";

function MyApp({ Component, pageProps }) {
  //console.log(pageProps.infos);

  return (
    <Page {...pageProps}>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.getInitialProps = async () => {
  const infos = await import(`../content/infos.json`);
  return {
    pageProps: {
      infos: infos.default,
    },
  };
};

export default MyApp;
