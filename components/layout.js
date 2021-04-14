import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Main = styled.main`
 margin: 0 auto;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 background-color: var(--color-white);

 section:nth-child(2n + 4) {
  order: +1;
 }

 @media (max-width: 48rem) {
  flex-direction: column;

  section:nth-child(2n + 4) {
   order: 0;
  }
 }
`;

const Layout = ({ infos, globalData, children }) => {
 return (
  <Fragment>
   <Header globalData={globalData} />
   <Main>{children}</Main>
   <Footer globalData={globalData} />
  </Fragment>
 );
};

export default Layout;
