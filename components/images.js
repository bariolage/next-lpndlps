import Image from "next/image";
import styled from "styled-components";

const Wrap = styled.section`
  padding: 0.5rem;
  padding-top: ${(props) => !props.full && "0"};
  order: ${(props) => props.full && "+1"};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 0.5rem;
  max-width: ${(props) => (props.full ? "100%" : "64rem")};
  width: 50%;
  flex: ${(props) => props.full && "1 0 100%"};
  @media (max-width: 48rem) {
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

export default function Images({ images, full }) {
  return (
    <Wrap full={full}>
      {images.map((item, i) => (
        <Figure key={`image-${i}`}>
          <Image alt="image" src={item} layout="fill" objectFit="cover" />
        </Figure>
      ))}
    </Wrap>
  );
}
