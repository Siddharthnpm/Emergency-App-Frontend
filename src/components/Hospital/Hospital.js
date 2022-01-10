import React, { useState } from "react";

import "./Hospital.css";

export default function Hospital() {
  const zoom = "14";

  const [location, setLocation] = useState("");

  function handleClick() {
    console.log(location);
  }

  function handleChange(event) {
    setLocation(event.target.value)
  }

  return (
    <div className="hospital-page">
      <h3 className="hospital-page__title">Hospitals Near Me</h3>

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
            <h4><b>Care @ Home</b></h4>
            <a className="link" href="https://www.maxathome.in/">Click To Proceed</a>
          </div>
        </div>
        <div className="card">
          <img src="img_avatar.png" alt="Avatar" className="card-img" />
          <div className="name-container">
            <h4><b>Nearby Labs</b></h4>
            <a className="link" href="https://www.maxlab.co.in/">Click To Proceed</a>
          </div>
        </div>
        <div className="card">
          <img src="img_avatar.png" alt="Avatar" className="card-img" />
          <div className="name-container">
            <h4><b>Doctors Near Me</b></h4>
            <a className="link" href="https://www.google.com/search?q=doctors+near+me&oq=Doctors+near+me&aqs=chrome.0.0i433i457i512j0i402j0i512l8.3796j0j4&sourceid=chrome&ie=UTF-8">Click To Proceed</a>
          </div>
        </div>
        <div className="card">
          <img src="img_avatar.png" alt="Avatar" className="card-img" />
          <div className="name-container">
            <h4><b>Get Vaccinated</b></h4>
            <a className="link" href="https://selfregistration.cowin.gov.in/">Click To Proceed</a>
          </div>
        </div>
      </div>
    </div>
  );
}
