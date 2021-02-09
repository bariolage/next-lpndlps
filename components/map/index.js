import React, { useEffect } from "react";
import Marker from "./marker";
import { useAppContext } from "../../pages/_app";
import GoogleMapReact from "google-map-react";
import styles from "./map.module.css";

const Map = ({ apiKey, shops }) => {
  const { viewportInit, viewport, setViewport } = useAppContext();
  return (
    <>
      <div className={styles.div}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{
            key: apiKey,
          }}
          defaultCenter={viewport}
          center={viewport}
          defaultZoom={11}
        >
          {shops.map((e) => {
            return (
              <Marker
                lat={e.coordinates.latitude}
                lng={e.coordinates.longitude}
                text={e.name}
                key={e.name}
                onClick={() =>
                  setViewport({
                    lat:
                      e.coordinates.latitude === viewport.lat
                        ? viewportInit.lat
                        : e.coordinates.latitude,
                    lng:
                      e.coordinates.longitude === viewport.lng
                        ? viewportInit.lng
                        : e.coordinates.longitude,
                  })
                }
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
