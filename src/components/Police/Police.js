import React, { useState } from "react";

import "./Police.css";

export default function Police() {
  const zoom = "14";

  const [location, setLocation] = useState("");

  function handleClick() {
    console.log(location);
  }

  function handleChange(event) {
    setLocation(event.target.value)
  }

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
      <div className="search-box">
        <input id="search" className="search-txt" type="text" placeholder="Search Location" value={location} onChange={handleChange}></input>
        <a className="search-btn" href="#" onClick={handleClick}>
          <i class="fas fa-search fa-xs"></i>
        </a>
      </div>
      <div className="card-section">
        <div className="card">
          <img src="img_avatar.png" alt="Avatar" className="card-img" />
          <div className="name-container">
            <h4><b>Lost And Found</b></h4>
            <a className="link" href="https://lostfound.delhipolice.gov.in/LostApp/index.aspx">Click To Lodge F.I.R</a>
          </div>
        </div>
        <div className="card">
          <img src="img_avatar.png" alt="Avatar" className="card-img" />
          <div className="name-container">
            <h4><b>Telephone Directory</b></h4>
            <a className="link" href="https://www.delhipolice.nic.in/HELPLINE2">Click To Proceed</a>
          </div>
        </div>
      </div>
    </div>
  );
}
