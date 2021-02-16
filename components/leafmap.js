import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useAppContext } from "../pages/_app";
import Marker from "./marker";
import styled from "styled-components";
const Wrap = styled.div`
  width: 50%;
  height: 40rem;
  @media (max-width: 48rem) {
    width: 100%;
    max-height: 70vh;
  }
`;

const Map = ({ shops, viewport }) => {
  //const [viewport] = usePosition();
  return (
    <Wrap>
      <MapContainer
        center={[viewport.lat, viewport.lng]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        tap={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((shop, i) => {
          const isClicked =
            shop.coordinates.latitude == viewport.lat &&
            shop.coordinates.longitude == viewport.lng;
          return (
            <Marker
              openPopup={isClicked}
              shop={shop}
              key={shop.name + shop.coordinates.latitude}
            >
              <Popup>
                <p>{shop.name}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Wrap>
  );
};

export default Map;
