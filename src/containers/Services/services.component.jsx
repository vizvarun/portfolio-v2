import React from "react";
import "./services.styles.scss";
import mobileDevelopment from "../../assets/images/mobile-development.svg";
import webDevelopment from "../../assets/images/web-development.svg";
import uiDesigning from "../../assets/images/ui-designing.svg";
import servicesGif from "../../assets/images/services.gif";

const services = [
  { icon: webDevelopment, name: "Web Development" },
  { icon: mobileDevelopment, name: "App Development" },
  { icon: uiDesigning, name: "UI/UX Designing" },
];

const Services = () => {
  return (
    <div>
      <section className="services" id="expertise">
        <div className="services-divider" />
        <div className="container">
          <div className="row services-row">
            <div className="col-lg-6 services-text">
              <div className="services-header">
                <h4 className="services-subtitle">How I Can Help?</h4>
                <h2 className="services-title">My Expertise</h2>
              </div>
              <div className="row">
                {services.map((service, index) => (
                  <div className="col-lg-4 service-icon-block" key={index}>
                    <img
                      src={service.icon}
                      alt="web"
                      className="service-icon"
                    />
                    <h4 className="service-name">{service.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 image-block">
              <img className="services-image" src={servicesGif} alt="profile" />
            </div>
          </div>
          <div className="row services-row-small">
            <div className="divider-block" />
            <div className="col-lg-6 image-block">
              <img className="services-image" src={servicesGif} alt="profile" />
            </div>
            <div className="col-lg-6 services-text">
              <h4 className="head-text inner-span">What I do ?</h4>
              <h2 className="main-head">My Services</h2>
              <div className="row">
                {services.map((service, index) => (
                  <div className="col-lg-4 service-icon-block" key={index}>
                    <img
                      src={service.icon}
                      alt="web"
                      className="service-icon"
                    />
                    <h4 className="service-name">{service.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
