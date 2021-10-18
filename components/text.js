import { useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { unwrapImages } from "remark-unwrap-images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Text = ({ body, id, fullWith, bg }) => {
 const controls = useAnimation();
 const [ref, inView] = useInView();

 useEffect(() => {
  if (inView) {
   controls.start("visible");
  }
 }, [controls, inView]);
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
  <section
   className={`tracking-wide relative 
   py-16 px-4 lg:p-16 mx-auto
   w-full  min-h-96 ${fullWith ? "lg:w-full" : "lg:w-1/2"}
   text-white ${bg == "dark" ? "bg-gray-800" : "bg-blue-700"}
   flex flex-col justify-center
   `}
   id={id}
  >
   <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    transition={{ duration: 0.3 }}
    variants={{
     visible: { opacity: 1, scale: 1 },
     hidden: { opacity: 0, scale: 0.9 },
    }}
   >
    <ReactMarkdown
     /* plugins={[unwrapImages]} */
     children={body}
     components={renderers}
     id="infos"
     className={`prose max-w-prose mx-auto ${
      bg == "dark" ? "text-gray-300" : "text-blue-50"
     }`}
    />
   </motion.div>
  </section>
 );
};

export default Text;
