import React, { useState } from "react";

import "./Police.css";

export default function Police() {
  const [coords, setCoords] = useState({});
  const API_KEY = "AIzaSyDUF_msWhgZdsG5-meRO95I20X_9L-Fpn8";
  const center = `${coords.lat},${coords.long}`;
  const zoom = "14";
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCoords({
      lat: latitude,
      long: longitude,
    });
    console.log(latitude, longitude);
  });
  return (
    <div className="police-page">
      <h3 className="police-page__title">Nearby Police Station</h3>
      {coords?.lat && (
        <div className="police-page__map">
          <iframe
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/search?key=${API_KEY}&center=${center}&zoom=${zoom}&q=police+station`}
          ></iframe>
        </div>
      )}
    </div>
  );
}
