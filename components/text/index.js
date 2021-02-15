import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
var unwrapImages = require("remark-unwrap-images");
import styles from "./text.module.css";

const Text = ({ body, id, full }) => {
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
        <a
          className="styles.link"
          rel="noopener noreferrer"
          target="_blank"
          {...props}
        />
      ) : (
        <Link {...props} />
      );
    },
  };
  return (
    <section id={id} className={styles.section + " " + (full && styles.full)}>
      <ReactMarkdown
        plugins={[unwrapImages]}
        source={body}
        renderers={renderers}
        id="infos"
      />
    </section>
  );
};

export default Text;
