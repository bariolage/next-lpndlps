import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Box = ({ children, body, image, id, fullWith, bg }) => {
 const controls = useAnimation();
 const [ref, inView] = useInView();

 useEffect(() => {
  if (inView) {
   controls.start("visible");
  }
 }, [controls, inView]);
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
  <section
   className={`tracking-wide relative 
   ${image ? "h-80 lg:h-auto" : "px-4 py-16 lg:p-16"}   mx-auto
   w-full  min-h-96  ${fullWith ? "lg:w-full" : "xl:w-1/2"}
   text-white ${
    bg == "dark"
     ? "bg-gray-800"
     : bg == "light"
     ? "bg-gray-100 text-gray-800"
     : "bg-blue-700"
   }
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
    className="h-full w-full "
   >
    {children ? (
     children
    ) : body ? (
     <ReactMarkdown
      children={body}
      components={renderers}
      id="infos"
      className={`prose max-w-prose mx-auto ${
       bg == "dark" ? "text-gray-300" : "text-blue-50"
      }`}
     />
    ) : image ? (
     <figure className="h-full w-full relative">
      <Image
       alt={image.alt || "le pain des lou - illustration"}
       src={image}
       layout="fill"
       objectFit="cover"
       priority
      />
     </figure>
    ) : (
     ""
    )}
   </motion.div>
  </section>
 );
};

export default Box;
