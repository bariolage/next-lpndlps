import Image from "next/image";

export default function Cover({ image }) {
 return (
  <section className="w-full lg:w-1/2 h-80 lg:h-auto">
   <figure className="h-full w-full relative">
    <Image
     alt={image.alt || "le pain des lou - illustration"}
     src={image}
     layout="fill"
     objectFit="cover"
    />
   </figure>
  </section>
 );
}
