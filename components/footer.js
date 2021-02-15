import React from "react";
import Image from "next/image";
import Text from "./text";
import styled from "styled-components";

const Wrap = styled.footer`
  position: relative;
  display: flex;
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 4rem 1rem;
  align-items: center;
  section {
    background-color: var(--color-dark);
  }
  @media (max-width: 48rem) {
    flex-direction: column;
    padding: 2rem 0;
    align-items: flex-start;
  }
`;

const Figure = styled.figure`
  position: relative;
  width: 50%;
  height: 16rem;
  margin: 0;
  @media (max-width: 48rem) {
    width: 100%;
    height: 16rem;
    margin: 0;
  }
`;

const Button = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 3rem;
  width: 3rem;
  margin: 2rem;
  background-color: var(--color-white);

  &:hover {
    background-color: var(--color-primary);
  }
`;

const Footer = ({ contactData }) => {
  return (
    <Wrap id="contact">
      <Figure>
        <Image
          src={contactData.frontmatter.cover}
          layout="fill"
          objectFit="contain"
        />
      </Figure>
      <Text body={contactData.content} />
      <a href="#header">
        <Button
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
        </Button>
      </a>
    </Wrap>
  );
};

export default Footer;
