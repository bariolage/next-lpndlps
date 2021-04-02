import { Marker as BaseMarker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";

const Marker = ({ shop, openPopup }) => {
  const markerRef = useRef();
  useEffect(() => {
    if (openPopup) {
      markerRef.current.openPopup();
    } else {
      markerRef.current.closePopup();
    }
  }, [openPopup]);
  return (
    <BaseMarker
      ref={markerRef}
      position={[shop.geo.lat, shop.geo.lng]}
      animate={true}
    >
      <Popup>
        <p>{shop.name}</p>
      </Popup>
    </BaseMarker>
  );
};

export default Marker;
