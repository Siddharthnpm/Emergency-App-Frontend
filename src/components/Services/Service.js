import React from "react";
import { ServiceList } from "./ServiceList";
import "./Service.css";

function Services() {


    return (
        <div className="services-section">
            <div className="services-section-wrapper">
                {ServiceList.map(service => {
                    return (
                        <div className="service-card">
                            <img className="service-card-img" src={service.url} alt={service.about} />
                            <h3>{service.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>


    );
}
export default Services;