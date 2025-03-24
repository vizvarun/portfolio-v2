import React, { useState } from "react";
import "./portfolio.styles.scss";
import Designs from "../../components/Designs/designs.component";
import WebDevelopment from "../../components/WebDevelopment/web-development.component";
import AppDevelopment from "../../components/AppDevelopment/app-development.component";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("app"); // Default to app development tab

  const renderContent = () => {
    switch (activeTab) {
      case "app":
        return <AppDevelopment />;
      case "web":
        return <WebDevelopment />;
      case "design":
        return <Designs />;
      default:
        return <AppDevelopment />;
    }
  };

  return (
    <div>
      <section className="portfolio" id="portfolio">
        <div className="portfolio-divider" />
        <div className="container">
          <div className="portfolio-header">
            <h4 className="portfolio-subtitle">My Work</h4>
            <h2 className="portfolio-title">Portfolio</h2>
          </div>

          <div className="portfolio-tabs">
            <button
              className={`tab-button ${activeTab === "app" ? "active" : ""}`}
              onClick={() => setActiveTab("app")}
            >
              App Development
            </button>
            <button
              className={`tab-button ${activeTab === "web" ? "active" : ""}`}
              onClick={() => setActiveTab("web")}
            >
              Web Development
            </button>
            <button
              className={`tab-button ${activeTab === "design" ? "active" : ""}`}
              onClick={() => setActiveTab("design")}
            >
              Designs
            </button>
          </div>

          <div className="portfolio-content">
            <div className="portfolio-category-title">
              {activeTab === "app" && <h3>App Development</h3>}
              {activeTab === "web" && <h3>Web Development</h3>}
              {activeTab === "design" && <h3>Designs</h3>}
            </div>

            {renderContent()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
