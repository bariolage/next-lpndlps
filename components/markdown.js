import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Markdown = ({ body, bg }) => {
 const renderers = {
  link: (props) => {
   return props.href.startsWith("http") ? (
    <a rel="noopener noreferrer" target="_blank" {...props} />
   ) : (
    <Link {...props} />
   );
  },
 };
 return (
  <ReactMarkdown
   children={body}
   components={renderers}
   id="infos"
   className={`prose max-w-prose mx-auto text-current`}
  />
 );
};

export default Markdown;
