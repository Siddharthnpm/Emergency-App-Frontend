import React from "react";

import "./Police.css";

export default function Police() {
  const zoom = "14";

  return (
    <div className="police-page">
      <h3 className="police-page__title">Nearby Police Station</h3>

      <div className="police-page__map">
        <iframe
          height="541"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=police+station+near+me&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}
