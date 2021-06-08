import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Main = styled.main`
 margin: 0 auto;
 display: flex;
 flex-flow: row wrap;
 background-color: var(--color-white);

 @media (max-width: 48rem) {
  flex-direction: column;
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
