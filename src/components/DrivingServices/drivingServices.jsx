import React from "react";
import { ServiceList } from "./serviceList";
import { Link } from "react-router-dom";
function DrivingServices() {
    return (
        <div className="services-section">
            <div className="services-section-wrapper">
                {ServiceList.map((service) => {
                    return (
                        <div className="service-card">
                            <img
                                className="service-card-img"
                                src={service.url}
                                alt={service.about}
                            />
                            <a className="services-link" target="_blank" href={service.link}>
                                {service.title}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default DrivingServices;