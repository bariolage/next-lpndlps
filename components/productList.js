import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function ProductList({ data }) {
 return (
  <section className="bg-gray-100 w-full lg:w-1/2 max-w-full h-fit mx-auto py-8 px-4 lg:p-16 flex flex-wrap">
   {data.map((e, i) => (
    <div className="min-w-60 flex-1 m-4" key={i}>
     <h3 className="uppercase text-xl font-black mb-2 text-gray-800">
      {e.title}
     </h3>
     <ul>
      {e.items.map((item, i) => (
       <li
        className="capitalize flex flex-col items-center my-3 bg-white rounded-2xl"
        key={item.name + i}
       >
        <figure className="flex-auto relative w-full h-24">
         <Image
          className="rounded-t-2xl"
          src={item.image.url}
          layout="fill"
          objectFit="cover"
         />
        </figure>
        <div className="self-start py-2 px-2">
         <p className="text-xl font-bold">{item.name}</p>
         {item.description && <p>{item.description}</p>}
        </div>
        <div className="flex justify-between w-full  pb-4">
         <p className="px-2 text-sm text-yellow-700 font-bold ">
          {item.price}€<span className="font-normal text-gray-600">/kilo</span>
         </p>
         <button
          className="text-sm font-bold relative self-center text-white snipcart-add-item hover:text-gray-100 hover:bg-yellow-500 bg-yellow-600 pl-3 pr-2 py-1 rounded-l-2xl"
          data-item-id={`${e.title} - ${item.name}`}
          data-item-price={item.price}
          data-item-url="/carte"
          data-item-description={`${e.title} - ${item.name}`}
          data-item-image={item.image.url}
          data-item-name={`${e.title} - ${item.name}`}
         >
          Ajouter au panier
         </button>
        </div>
       </li>
      ))}
     </ul>
    </div>
   ))}
  </section>
 );
}
