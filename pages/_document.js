import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
   ctx.renderPage = () =>
    originalRenderPage({
     enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });

   const initialProps = await Document.getInitialProps(ctx);
   return {
    ...initialProps,
    styles: (
     <>
      {initialProps.styles}
      {sheet.getStyleElement()}
     </>
    ),
   };
  } finally {
   sheet.seal();
  }
 }
 render() {
  return (
   <Html lang="fr">
    <Head>
     <link rel="preconnect" href="https://app.snipcart.com" />
     <link rel="preconnect" href="https://cdn.snipcart.com" />
     <link
      rel="stylesheet"
      href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
     />
    </Head>
    <body>
     <Main />
     <NextScript />

     <script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
     <div
      hidden
      id="snipcart"
      data-api-key="ZTg5MjMzMTYtMTk0Zi00MGRkLTgyNDYtZDg3YWQyYzczMmNiNjM3MjQwNTEwODI0NDkxMjc5"
      data-config-modal-style="side"
     >
      <shipping-method section="bottom">
       <fieldset class="snipcart-form__set">
        <div class="snipcart-form__field">
         <snipcart-label
          for="customerType"
          class="snipcart__font--tiny"
          for="customerType"
         >
          Jour de retrait
         </snipcart-label>
         <snipcart-select
          name="customerType"
          class="snipcart-form__select  snipcart__font--secondary snipcart__font--bold"
         >
          <option value="Lundi">Lundi</option>
          <option value="Mardi">Mardi</option>
          <option value="Mercredi">Mercredi</option>
          <option value="Jeudi">Jeudi</option>
          <option value="Vendredi">Vendredi</option>
          <option value="Samedi">Samedi</option>
         </snipcart-select>
        </div>
       </fieldset>
      </shipping-method>
     </div>
    </body>
   </Html>
  );
 }
}
