import React, { useState } from "react";

import "./Police.css";

export default function Police() {
  const zoom = "14";

  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("police station near ");

  function handleChange(event) {
    setLocation(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
    setQuery(query + location);
  };

  return (
    <div className="police-page">
      <h3 className="police-page__title">Nearby Police Station</h3>

      {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=police%20station%20near%20dwarka%20sec%201&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123moviesz.nl"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://googlemapsembedcodegenerator.com
"> how to add a map to wordpress </a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */}

      <div className="police-page__map">
        <iframe
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          //src={`https://maps.google.com/maps?q=police+station+near+me&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <form onSubmit={handleSubmit} className="police-page_search-box">
        <input
          id="search"
          className="police-page_search-txt"
          type="text"
          placeholder="Search Location"
          value={location}
          onChange={handleChange}
        ></input>
        <button type="submit">
          <a className="search-btn" href="#">
            <i class="fas fa-search fa-xs"></i>
          </a>
        </button>
      </form>
      <div className="police-page_card-section">
        <div className="police-page_card">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_130332.png"
            alt="Avatar"
            className="card-img"
          />
          <div className="name-container">
            <h4>
              <b>Lost And Found</b>
            </h4>
            <a
              target="_blank"
              className="link"
              href="https://lostfound.delhipolice.gov.in/LostApp/index.aspx"
            >
              Click To Lodge F.I.R
            </a>
          </div>
        </div>
        <div className="police-page_card">
          <img
            src="https://static.thenounproject.com/png/780425-200.png"
            alt="Avatar"
            className="card-img"
          />
          <div className="name-container">
            <h4>
              <b>Telephone Directory</b>
            </h4>
            <a target="_blank" className="link" href="https://www.delhipolice.nic.in/HELPLINE2">
              Click To Proceed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
