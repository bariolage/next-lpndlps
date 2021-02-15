import Image from "next/image";
import { useAmp } from "next/amp";
import styled from "styled-components";

const Wrap = styled.section`
  width: 50%;
  padding: 0rem;
  @media (max-width: 48rem) {
    width: 100%;
    padding: 0rem;
    height: 20rem;
  }
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
  background-color: lighten(blue, 15%);
  background-blend-mode: multiply;
  mix-blend-mode: multiply;
  width: 100%;
  height: 100%;
`;

export default function Cover({ image, about }) {
  const isAmp = useAmp();

  return (
    <Wrap>
      <Figure>
        {isAmp ? (
          <amp-img alt="image" src={image} alt="a cool image" layout="fill" />
        ) : (
          <Image alt="image" src={image} layout="fill" objectFit="cover" />
        )}
      </Figure>
    </Wrap>
  );
}
