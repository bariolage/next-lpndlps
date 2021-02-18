import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
var unwrapImages = require("remark-unwrap-images");
import styled from "styled-components";

const Wrap = styled.section`
  margin: 0 auto;
  font-weight: 500;
  position: relative;
  color: var(--color-white);
  background-color: ${(props) =>
    props.bg == "dark" ? "var(--color-black)" : "var(--color-primary)"};
  padding: 4rem;
  width: 50%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: ${(props) => props.fullWith && "1 0 100%"};

  > * {
    max-width: 64rem;
  }

  p {
    margin: 0.5rem 0;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: bold;
    margin: 3rem 0 1rem 0;
    text-align: center;
    text-transform: uppercase;
  }

  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-weight: bold;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }
  ul {
    width: 100%;
    padding: 0;
    padding-left: 0.5rem;
    list-style-type: none;
    margin: 0;
  }
  li {
    padding: 0.25rem 0;
  }

  @media (max-width: 48rem) {
    margin: 0 auto;
    font-weight: 500;
    position: relative;
    color: var(--color-white);
    background-color: ${(props) =>
      props.bg == "dark" ? "var(--color-black)" : "var(--color-primary)"};

    padding: 4rem 1rem;
    width: 100%;
  }
`;

const Text = ({ body, id, fullWith, bg }) => {
  const renderers = {
    image: (props) => {
      return (
        <figure
          style={{
            position: "relative",
            width: "50%" /* , height: `${size.height /size.width * 100}`%  */,
            height: "20rem",
            margin: "4rem auto",
          }}
        >
          <Image
            {...props}
            //width={600}
            //height={300}
            layout="fill"
            objectFit="contain"
          />
        </figure>
      );
    },
    link: (props) => {
      return props.href.startsWith("http") ? (
        <a rel="noopener noreferrer" target="_blank" {...props} />
      ) : (
        <Link {...props} />
      );
    },
  };
  return (
    <Wrap id={id} fullWith={fullWith} bg={bg}>
      <ReactMarkdown
        plugins={[unwrapImages]}
        source={body}
        renderers={renderers}
        id="infos"
      />
    </Wrap>
  );
};

export default Text;
