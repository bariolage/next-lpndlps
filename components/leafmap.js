import {
 MapContainer,
 Marker as BaseMarker,
 TileLayer,
 Popup,
 useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useRef } from "react";

const Map = ({
 shops,
 viewport,
 setViewport,
 viewportInit,
 isViewportInit,
}) => {
 const resetViewport = () => setViewport(viewportInit);
 const mapRef = useRef();
 return (
  <div className="w-full lg:w-1/2 max-h-2/3 h-128">
   <MapContainer
    center={[viewport.lat, viewport.lng]}
    zoom={11}
    scrollWheelZoom={false}
    style={{ height: "100%", width: "100%" }}
    tap={false}
    ref={mapRef}
    className="z-10"
   >
    <TileLayer
     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {shops.map((shop, i) => {
     const isClicked =
      shop.geo.lat == viewport.lat && shop.geo.lng == viewport.lng;
     return (
      <Marker
       openPopup={isClicked}
       shop={shop}
       key={shop.name + shop.geo.lat}
       viewport={viewport}
       isViewportInit={isViewportInit}
       setViewport={setViewport}
       viewportInit={viewportInit}
       resetViewport={resetViewport}
      />
     );
    })}
   </MapContainer>
  </div>
 );
};

const Marker = ({ shop, openPopup, viewport, setViewport, viewportInit }) => {
 const markerRef = useRef();
 const map = useMap();
 useEffect(() => {
  if (openPopup) {
   markerRef.current.openPopup();
   map.flyTo([shop.geo.lat, shop.geo.lng], 13, {
    duration: 1,
   });
  } else {
   markerRef.current.closePopup();
  }
 }, [openPopup]);
 return (
  <BaseMarker
   ref={markerRef}
   position={[shop.geo.lat, shop.geo.lng]}
   animate={true}
   eventHandlers={{
    click: (e) => {
     const isCurrent =
      viewport.lat === e.latlng.lat && viewport.lng === e.latlng.lng;
     if (isCurrent) {
      setViewport({ lat: viewportInit.lat, lng: viewportInit.lng });
      map.flyTo([viewportInit.lat, viewportInit.lng], 9, {
       duration: 1,
      });
     } else {
      setViewport({ lat: e.latlng.lat, lng: e.latlng.lng });
      map.flyTo([viewport.lat, viewport.lng], 13, {
       duration: 1,
      });
     }
    },
   }}
  >
   <Popup>
    <p>{shop.name}</p>
   </Popup>
  </BaseMarker>
 );
};

export default Map;
