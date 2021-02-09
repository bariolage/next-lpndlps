import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
var unwrapImages = require("remark-unwrap-images");
import styles from "./article.module.css";

const Article = ({ body }) => {
  const renderers = {
    root: (props) => <section className={styles.section} {...props} />,
    image: (props) => {
      return (
        <figure
          style={{
            position: "relative",
            width: "100%" /* , height: `${size.height /size.width * 100}`%  */,
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
    <>
      <ReactMarkdown
        plugins={[unwrapImages]}
        source={body}
        renderers={renderers}
      />
    </>
  );
};

export default Article;
