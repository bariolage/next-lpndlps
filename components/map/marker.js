import React from "react";
import { useAppContext } from "../../pages/_app";
import styles from "./marker.module.css";

//import dynamic from "next/dynamic";
//const BaseShop = dynamic(() => import("../shops/shop"));

const Marker = ({ lat, lng, text, onClick }) => {
  const { viewport } = useAppContext();
  return (
    <>
      {lat === viewport.lat && lng === viewport.lng ? (
        <p className={styles.p} onClick={onClick}>
          {text}
        </p>
      ) : (
        <div className={styles.wrapper} alt={text} onClick={onClick} />
      )}
    </>
  );
};

export default Marker;
