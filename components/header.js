import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation";
import styled from "styled-components";

const Wrap = styled.header`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: var(--header-height);
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 4rem;
  background-color: var(--color-dark);
  color: var(--color-white);

  @media (max-width: 48rem) {
    width: 100vw;
    padding: 2rem 1rem;
  }
`;

const Figure = styled.figure`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
`;

const Title = styled.a`
  z-index: 2;
  height: fit-content;
  cursor: pointer;
  h1 {
    font-family: var(--font-heading);
    color: var(--color-white);
    margin: 1rem 0;
    font-size: 3rem;
    line-height: 2.5rem;
  }

  h1:hover {
    color: var(--color-primary);
  }
  p {
    margin: 0;
  }
`;
const Header = ({ globalData }) => {
  return (
    <Wrap id="header">
      <Figure>
        <Image
          alt={globalData.config.cover.alt}
          src={globalData.config.cover.image}
          layout="fill"
          objectFit="cover"
        />
      </Figure>
      <Link href="/">
        <Title>
          <h1>{globalData.config.name}</h1>
          <p>{globalData.config.description}</p>
        </Title>
      </Link>
      <Navigation navigation={globalData.config.navigation} />
    </Wrap>
  );
};

export default Header;
