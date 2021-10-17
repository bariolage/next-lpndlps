import ReactMarkdown from "react-markdown";

export default function ProductList({ data }) {
 return (
  <section className="w-full lg:w-1/2 max-w-full h-fit mx-auto py-8 px-4 lg:p-16 flex flex-wrap">
   {data.map((e, i) => (
    <div className="min-w-60 flex-1 m-4" key={i}>
     <p className="uppercase font-bold mb-2 text-gray-800">{e.title}</p>
     <ul>
      {e.items.map((item, i) => (
       <li
        className="capitalize flex flex-col items-baseline my-3"
        key={item.name + i}
       >
        <ReactMarkdown className="prose" children={item.name} />
        <div>
         <span className="mr-2 text-sm text-gray-600">{item.price}€</span>
         <button
          className="relative self-center text-gray-800 snipcart-add-item hover:text-blue-700"
          data-item-id={`${item.name}-${e.title}`}
          data-item-price={item.price}
          data-item-url="/carte"
          data-item-description={`${item.name}-${e.title}`}
          data-item-image={item.image.url}
          data-item-name={`${item.name}-${e.title}`}
         >
          Ajouter au panier
         </button>
        </div>
       </li>
      ))}
     </ul>
    </div>
   ))}
   <p className="w-full text-right">*Prix au kilo</p>
  </section>
 );
}
