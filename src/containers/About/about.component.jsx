import React, { useContext } from "react";
import "./about.styles.scss";
import profileDarkImage from "../../assets/images/profile-dark.png";
import profileWhiteImage from "../../assets/images/profile-white.png";
import resumePdf from "../../assets/resume.pdf";
import { ThemeContext } from "../../contexts/theme.context";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <section className="about" id="about">
        <div className="about-divider" />
        <div className="container">
          <div className="about-header">
            <h4 className="about-subtitle">Who am I?</h4>
            <h2 className="about-title">About me</h2>
          </div>
          <div className="row about-row">
            <div className="col-lg-6 image-block">
              <img
                className="profile-image"
                src={theme === "dark" ? profileDarkImage : profileWhiteImage}
                alt="profile"
              />
            </div>
            <div className="col-lg-6 about-text">
              <div className="profile-block">
                <i className="fas fa-map-marker-alt map-icon"></i>
                <p className="location-text">&nbsp; India | &nbsp;</p>
                <p className="profile-text">
                  React | Angular | Spring Boot | UI/UX
                </p>
              </div>
              <p className="desc-para">
                I'm a full-stack developer and creative UI/UX designer
                passionate about building intuitive, responsive applications. I
                blend technical expertise with a keen eye for design to craft
                experiences that are both functional and visually engaging. When
                I'm not coding or sketching out interfaces, you can find me
                exploring new music, playing the guitar, or traveling to gain
                fresh inspiration.
              </p>
              <div className="btn-def resume-btn">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  <span>Resume</span>
                  <svg width="13px" height="10px" viewBox="0 0 15 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
