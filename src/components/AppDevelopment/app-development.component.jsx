import React, { useState } from "react";
import app1Image from "../../assets/images/app1.png";
import app2Image from "../../assets/images/app2.png";
import app3Image from "../../assets/images/app3.png";
import ui5Image from "../../assets/images/ui5.png";

const AppDevelopment = () => {
  const [appDevelopments] = useState([
    {
      id: 0,
      title: "ScoopBox",
      desc: "News App",
      source: app1Image,
      href: "https://github.com/vizvarun/ScoopBox-News-App-ReactNative",
    },
    {
      id: 1,
      title: "Harmony",
      desc: "Social Media",
      source: app2Image,
      href: "https://github.com/vizvarun/harmony-music-app/",
    },
    {
      id: 2,
      title: "Odyssey",
      desc: "Travel App",
      source: app3Image,
      href: "https://github.com/vizvarun/odyssey-rn-app",
    },
    {
      id: 3,
      title: "Lumos UI",
      desc: "Lamp Store App",
      source: ui5Image,
    },
  ]);

  return (
    <div className="project-block row">
      {appDevelopments.map((appDevelopment, id) => (
        <React.Fragment key={appDevelopment.id}>
          {id % 2 === 0 ? (
            <div className="col-12 col-lg-6">
              <div className="project-n">
                <div className="project-title">
                  <h2>{appDevelopment.title}</h2>
                  <h4>{appDevelopment.desc}</h4>
                  <div className="project-img-wrapper">
                    <img
                      src={appDevelopment.source}
                      alt="ui"
                      className="project-img"
                    />
                    <div className="overlay">
                      <div className="btn-def view-btn">
                        <a
                          href={appDevelopment.href}
                          className="cta"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span style={{ color: "white" }}>View</span>
                          <svg
                            width="13px"
                            height="10px"
                            viewBox="0 0 15 10"
                            fill="white"
                          >
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-12 col-lg-6">
              <div className="project-n-1">
                <div className="project-title">
                  <h2>{appDevelopment.title}</h2>
                  <h4>{appDevelopment.desc}</h4>
                  <div className="project-img-wrapper">
                    <img
                      src={appDevelopment.source}
                      alt="ui"
                      className="project-img"
                    />
                    <div className="overlay">
                      <div className="btn-def view-btn">
                        <a
                          href={appDevelopment.href}
                          className="cta"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span style={{ color: "white" }}>View</span>
                          <svg
                            width="13px"
                            height="10px"
                            viewBox="0 0 15 10"
                            fill="white"
                          >
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AppDevelopment;
