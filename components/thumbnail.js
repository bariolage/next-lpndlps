import Image from "next/image";

const Thumbnail = ({ image }) => {
 return (
  <figure className="h-full w-full relative">
   <Image
    alt={image.alt || "le pain des lou - illustration"}
    src={image}
    layout="fill"
    objectFit="cover"
    sizes="50vw"
   />
  </figure>
 );
};

export default Thumbnail;
