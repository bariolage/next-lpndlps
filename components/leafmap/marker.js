import { Marker as BaseMarker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import styles from "./marker.module.css";

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
      position={[shop.coordinates.latitude, shop.coordinates.longitude]}
      animate={true}
    >
      <Popup className={styles.popup}>
        <p className={styles.content}>{shop.name}</p>
      </Popup>
    </BaseMarker>
  );
};

export default Marker;
