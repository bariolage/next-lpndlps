import Document, { Html, Head, Main, NextScript } from "next/document";
import DatePicker from "../components/DataPicker";

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
 }
 render() {
  return (
   <Html lang="fr">
    <Head>
     <link rel="preconnect" href="https://app.snipcart.com" />
     <link rel="preconnect" href="https://cdn.snipcart.com" />
     <link
      href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
      rel="stylesheet"
     />
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}
