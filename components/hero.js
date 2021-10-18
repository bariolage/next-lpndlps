import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const Hero = ({ title, message }) => {
 return (
  <section className="flex flex-col justify-end bg-blue-700 text-white py-12 px-4 lg:p-16 w-full lg:w-1/2 h-fit lg:h-128  lg:ml-1/2">
   <motion.h2
    className="pb-12 text-5xl font-bold"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
   >
    {title}
   </motion.h2>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
   >
    <ReactMarkdown
     className="prose text-white tracking-wide"
     children={message}
    />
   </motion.div>
  </section>
 );
};

export default Hero;
