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

const Page = ({ infos, contact, children }) => {
  return (
    <Fragment>
      <Header
        title={infos.siteTitle}
        headline={infos.headline}
        navigation={infos.navigation}
      />
      <Main>{children}</Main>
      <Footer contactData={contact} />
    </Fragment>
  );
};

export default Page;
