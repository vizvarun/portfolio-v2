import React from "react";
import ui1Image from "../../assets/images/ui1.png";
import ui2Image from "../../assets/images/ui2.png";
import ui3Image from "../../assets/images/ui3.png";
import ui4Image from "../../assets/images/ui4.png";

const Designs = () => {
  const designs = [
    {
      id: 0,
      title: "ScoopBox UI",
      desc: "News App",
      source: ui1Image,
      href: "https://www.behance.net/gallery/95264701/ScoopBox-News-App",
    },
    {
      id: 1,
      title: "Shoe Store UI",
      desc: "E-commerce Website",
      source: ui2Image,
      href: "https://www.behance.net/gallery/94228867/E-Commerce-Website-UI",
    },
    {
      id: 2,
      title: "Odyssey UI",
      desc: "Travel App",
      source: ui3Image,
      href: "https://www.behance.net/gallery/94645719/Odyssey-Online-Travel-Booking-App-UI",
    },
    {
      id: 3,
      title: "Lamborghini Aventador",
      desc: "Detailed Illustration",
      source: ui4Image,
      href: "https://www.behance.net/gallery/98702507/Lamborghini-Aventador-Illustration",
    },
  ];

  return (
    <div className="row project-block">
      {designs.map((design, id) => (
        <div className="col-md-12 col-lg-6" key={design.id}>
          <div className={id % 2 === 0 ? "project-n" : "project-n-1"}>
            <div className="project-title">
              <h2>{design.title}</h2>
              <h4>{design.desc}</h4>
              <div className="project-img-wrapper">
                <img src={design.source} alt="ui" className="project-img" />
                <div className="overlay">
                  <div className="btn-def view-btn">
                    <a
                      href={design.href}
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
      ))}
    </div>
  );
};

export default Designs;
