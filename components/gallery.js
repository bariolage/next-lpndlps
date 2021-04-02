import Image from "next/image";
import styled from "styled-components";

const Wrap = styled.section`
  padding: 0.5rem;
  padding-top: ${(props) => !props.fullWith && "0"};
  order: ${(props) => props.fullWith && "+1"};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 0.5rem;
  max-width: ${(props) => (props.fullWith ? "100%" : "64rem")};
  width: 50%;
  flex: ${(props) => props.fullWith && "1 0 100%"};
  @media (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    padding: 0.25rem;
    grid-gap: 0.25rem;
    max-width: 100%;
    width: 100%;
  }
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
  height: 16rem;
  padding-bottom: 100%;
  display: inline-block;
  vertical-align: top;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.125rem;
  background-color: var(--color-dark);
  color: var(--color-white);
`;

export default function Gallery({ images, fullWith }) {
  return (
    <Wrap fullWith={fullWith}>
      {images.map((e, i) => (
        <Figure key={`image-${i}`}>
          <Image alt={e.alt} src={e.url} layout="fill" objectFit="cover" />
          <Figcaption>{e.alt}</Figcaption>
        </Figure>
      ))}
    </Wrap>
  );
}
