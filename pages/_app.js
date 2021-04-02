import React from "react";
import "typeface-dosis";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
  --font-body: Dosis, Mukta, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --font-heading: Dosis, Boogaloo, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  --space: 2rem;
  --header-height: 32rem;
  --flex: 1;
  --lg-height: 32rem;
  --sm-height: 10rem;
  --color-dark: #252525;
  --color-white: #fefef6;
  --color-primary: #0B7C96;
}
@media (max-width: 48rem) {
  :root {
    --big-height: 20rem;
    --header-height: 24rem;
  }
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: var(--font-body);
  background-color: var(--color-dark);
  color: var(--color-dark);
  letter-spacing: 0.125rem;
  line-height: 1.5rem;
  font-weight: 500;
}

a {
  color: inherit;
  /* text-decoration: none; */
}

* {
  box-sizing: border-box;
  border: 10x solid red;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
