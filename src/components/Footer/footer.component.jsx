import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Varun Vishal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
