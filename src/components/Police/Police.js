import React, { useState } from "react";

import "./Police.css";

export default function Police() {
  const [coords, setCoords] = useState({});
  const API_KEY = "AIzaSyDUF_msWhgZdsG5-meRO95I20X_9L-Fpn8";
  navigator.geolocation.getCurrentPosition((position) => {
    setCoords({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
    console.log(position.coords.latitude, position.coords.longitude);
  });
  return (
    <div className="police-page">
      <h3 className="police-page__title">Nearby Police Station</h3>
      <div className="police-page__map">
        <iframe
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
    &q=nearby+police+station`}
        ></iframe>
      </div>
    </div>
  );
}
