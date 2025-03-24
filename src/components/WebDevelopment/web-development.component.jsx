import React, { useState } from "react";
import web3Image from "../../assets/images/web3.png";
import web2Image from "../../assets/images/web2.png";
import web4Image from "../../assets/images/web4.png";
import web5Image from "../../assets/images/web5.png";

const WebDevelopment = () => {
  const [webDevelopments] = useState([
    {
      id: 0,
      title: "Proefficient",
      desc: "ERP System",
      source: web3Image,
      href: "https://proefficient.now.sh/admin/section1",
    },
    {
      id: 1,
      title: "Vizon",
      desc: "Multimedia Search Engine",
      source: web2Image,
      href: "https://vizvarun.github.io/tcfvison",
    },
    {
      id: 2,
      title: "Inceptra",
      desc: "Fest Website",
      source: web4Image,
      href: "https://vizvarun.github.io/inceptra",
    },
    {
      id: 3,
      title: "Winter of Code",
      desc: "Community Website",
      source: web5Image,
      href: "https://winterofcode.com",
    },
  ]);

  return (
    <div className="project-block row">
      {webDevelopments.map((webDevelopment, id) => (
        <React.Fragment key={webDevelopment.id}>
          {id % 2 === 0 ? (
            <div className="col-12 col-lg-6">
              <div className="project-n">
                <div className="project-title">
                  <h2>{webDevelopment.title}</h2>
                  <h4>{webDevelopment.desc}</h4>
                  <div className="project-img-wrapper">
                    <img
                      src={webDevelopment.source}
                      alt="ui"
                      className="project-img"
                    />
                    <div className="overlay">
                      <div className="btn-def view-btn">
                        <a
                          href={webDevelopment.href}
                          className="cta"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span style={{ color: "white" }}>View</span>
                          <svg
                            width="13px"
                            height="10px"
                            viewBox="0 0 15 10"
                            fill="#fff"
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
                  <h2>{webDevelopment.title}</h2>
                  <h4>{webDevelopment.desc}</h4>
                  <div className="project-img-wrapper">
                    <img
                      src={webDevelopment.source}
                      alt="ui"
                      className="project-img"
                    />
                    <div className="overlay">
                      <div className="btn-def view-btn">
                        <a
                          href={webDevelopment.href}
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

export default WebDevelopment;
