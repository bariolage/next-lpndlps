import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
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
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
