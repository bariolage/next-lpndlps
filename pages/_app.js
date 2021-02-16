import "../styles/globals.css";
import React, { useContext, useState } from "react";
import "typeface-dosis";

/* export const Context = React.createContext();

export function useAppContext() {
  const context = useContext(Context);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
} */

function MyApp({ Component, pageProps }) {
  /* const [menuIsOpen, toggle] = useState(false);
  const viewportInit = { lat: 48.35261871558314, lng: -4.4191839176185725 };
  const [viewport, setViewport] = useState(viewportInit); */

  return (
    /*  <Context.Provider
      value={{
        menuIsOpen,
        toggle,
        viewport,
        setViewport,
        viewportInit,
      }}
    > */
    <Component {...pageProps} />
    /* </Context.Provider> */
  );
}

// MyApp.getInitialProps = async () => {
//   const infos = await import(`../content/infos.json`);
//   const content = await import(`../content/pages/contact.md`);
//   const data = matter(content.default);
//   return {
//     pageProps: {
//       infos: infos.default,
//       contactData: { frontmatter: data.data, content: data.content },
//     },
//   };
// };

export default MyApp;
