import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Text from "./text";

const Wrap = styled.footer`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Infos = styled(Text)`
  section {
    background-color: var(--color-black);
  }
`;

const Contact = styled.section`
  padding: 4rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  width: 50%;
  h2 {
    text-transform: uppercase;
    margin-top: 0;
  }

  @media (max-width: 48rem) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  p {
    margin-top: 0;
  }
`;

const Icon = styled.svg`
  fill: var(--color-white);
  margin-right: 1rem;
`;

const Card = styled.section`
  padding: 0;
  background-color: var(--color-white);
  color: var(--color-black);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 48rem) {
    width: 100%;
    padding: 0.25rem;
  }
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  @media (max-width: 48rem) {
  }
`;

const Button = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 3rem;
  width: 3rem;
  margin: 2rem;
  fill: var(--color-white);
  &:hover {
    background-color: var(--color-primary);
  }
`;

const BottomBar = styled.div`
  display: flex;
  align-items: baseline;
  color: var(--color-black);
  a {
    text-decoration: underline;
    margin: 2rem;
    &:hover {
      color: var(--color-primary);
    }
  }
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;
const Footer = ({ globalData }) => {
  return (
    <Wrap id="contact">
      <Text fullWith="true" bg="dark" body={globalData.body} />
      <Contact>
        <h2>{globalData.title}</h2>
        <p>{globalData.description}</p>
        <List>
          <Item>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
            </Icon>
            <p>{globalData.mail}</p>
          </Item>
          <Item>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
            </Icon>
            <List>
              {globalData.telephone.map((e, i) => (
                <Item key={e + i}>
                  <p>{e}</p>
                </Item>
              ))}
            </List>
          </Item>
          <Item>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </Icon>
            <p>
              {globalData.address.streetAddress +
                ", " +
                globalData.address.postalCode +
                " " +
                globalData.address.addressLocality}
            </p>
          </Item>
        </List>
      </Contact>
      <Card>
        <Figure>
          <Image
            src={globalData.banner.image}
            alt={globalData.banner.alt}
            layout="responsive"
            width={globalData.banner.width}
            height={globalData.banner.height}
          />
        </Figure>
        <BottomBar>
          <Link href="/legal" passHref>
            <a>Mentions Légales</a>
          </Link>
          <p>lepaindeslou@2021</p>
        </BottomBar>
      </Card>
      {/* <Figure>
        <Image
          src={globalData.frontmatter.cover}
          layout="fill"
          objectFit="contain"
        />
      </Figure>
      <Text body={globalData.content} /> */}
      <a href="#header">
        <Button
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>Scroll to Top</title>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
        </Button>
      </a>
    </Wrap>
  );
};

export default Footer;
