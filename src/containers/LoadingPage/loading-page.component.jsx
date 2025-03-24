import React, { useState, useEffect } from "react";
import LandingPage from "../LandingPage/landing-page.component";
import "./loading-page.styles.scss";

const LoadingPage = () => {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!done ? (
        <div className="loading-container">
          <div className="loading-page">
            <div className="logo">
              <svg
                className="light-logo"
                width="85px"
                height="50px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 140 167"
              >
                <g fill="#121212">
                  <polygon points="27 0 27 128 0 101 0 0 27 0" />
                  <polygon points="66 0 66 167 65 167 38 139 38 0 66 0" />
                  <polygon points="113 0 113 128 140 101 140 0 113 0" />
                  <polygon points="75 0 75 167 75 167 102 139 102 0 75 0" />
                  <rect
                    x="-9"
                    y="122"
                    width="78"
                    height="8"
                    transform="translate(98 15) rotate(45)"
                  />
                  <rect
                    x="68"
                    y="125"
                    width="78"
                    height="8"
                    transform="translate(274 144) rotate(135)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default LoadingPage;
