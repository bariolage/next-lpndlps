import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Box = ({ children, isThumbnail, id, fullWith, bg }) => {
 const controls = useAnimation();
 const [ref, inView] = useInView();

 useEffect(() => {
  if (inView) {
   controls.start("visible");
  }
 }, [controls, inView]);

 return (
  <section
   className={`relative 
   ${isThumbnail ? "h-80 lg:h-auto" : "px-4 py-16 lg:p-16"}   mx-auto
   w-full  min-h-96 ${fullWith ? "lg:w-full" : "lg:w-1/2"}
   text-white ${
    bg == "dark"
     ? "bg-gray-800 text-gray-300"
     : bg == "light"
     ? "bg-white text-gray-800"
     : "bg-white text-gray-800"
   }
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
    {children}
   </motion.div>
  </section>
 );
};

export default Box;
