import Image from "next/image";

export default function ProductList({ data, shopIsActive }) {
 return (
  <section className="w-full xl:w-1/2 max-w-full h-fit mx-auto py-8 xl:p-16 flex flex-wrap">
   {data.map((e, i) => (
    <div className="min-w-60 flex-1 m-4" key={i}>
     <p className="uppercase font-bold mb-2">{e.title}</p>
     <ul>
      {e.items.map((item, i) => (
       <li className="flex flex-col" key={item.name + i}>
        <div className="flex justify-between items-center">
         {/* <figure className="relative h-12 w-12 rounded-full border-2">
          <Image
           className="rounded-full"
           src={item.image.url}
           layout="fill"
           objectFit="cover"
          />
         </figure> */}
         <p className="capitalize flex-1 ">{item.name}</p>
         <p className="px-4 lowercase text-xs">{item.price}€/kg</p>
         <button
          className="pointer bg-yellow-600 text-white rounded-full  hover:bg-yellow-700 px-2 text-xs snipcart-add-item"
          data-item-id={`${e.title} - ${item.name}`}
          data-item-price={item.price}
          data-item-url="/carte"
          data-item-description={`${e.title} - ${item.name}`}
          data-item-image={item.image.url}
          data-item-name={`${e.title} - ${item.name}`}
         >
          Ajouter
         </button>
        </div>
        <p className="whitespace-nowrap opacity-70 text-xs">
         {item.description && item.description}
        </p>
       </li>
      ))}
     </ul>
    </div>
   ))}
  </section>
 );
}
