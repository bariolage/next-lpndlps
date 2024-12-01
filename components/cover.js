import Image from "next/legacy/image";
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
 /* background-color: lighten(blue, 15%);
 background-blend-mode: multiply;
 mix-blend-mode: multiply; */
 width: 100%;
 height: 100%;
`;

export default function Cover({ image }) {
 return (
  <Wrap>
   <Figure>
    <Image
     alt={image.alt || "le pain des lou - illustration"}
     src={image}
     layout="fill"
     objectFit="cover"
    />
   </Figure>
  </Wrap>
 );
}
