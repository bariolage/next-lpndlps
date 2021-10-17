export default function ShopList({
 data,
 viewportInit,
 viewport,
 setViewport,
}) {
 return (
  <section className="w-full lg:w-1/2 max-w-full h-fit mx-auto py-8 px-4 lg:p-16 flex flex-wrap">
   {data.map((e, i) => (
    <div className="min-w-60 flex-1 m-4" key={i}>
     <p className="uppercase font-bold">{e.title}</p>
     <ul>
      {e.items.map((item, i) => (
       <li className="capitalize" key={item.name + i}>
        <button
         className="pointer hover:text-blue-700"
         onClick={() =>
          setViewport({
           lat: item.geo.lat === viewport.lat ? viewportInit.lat : item.geo.lat,
           lng: item.geo.lng === viewport.lng ? viewportInit.lng : item.geo.lng,
          })
         }
        >
         {item.name}
        </button>
       </li>
      ))}
     </ul>
    </div>
   ))}
  </section>
 );
}
