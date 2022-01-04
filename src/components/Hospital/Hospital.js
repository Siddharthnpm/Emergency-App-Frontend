import React from "react";

import "./Hospital.css";

export default function Hospital() {
  const zoom = "14";

  return (
    <div className="hospital-page">
      <h3 className="hospital-page__title">Nearby Hospital Station</h3>

      <div className="hospital-page__map">
        <iframe
          height="541"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=hospital+near+me&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}
