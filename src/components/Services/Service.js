import React from "react";
import { Link } from "react-router-dom";
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
                            <Link className="services-link" to='/Banking'>{service.title}</Link>
                        </div>
                    );
                })}
            </div>
        </div>


    );
}
export default Services;

// {`/${service.title}`}