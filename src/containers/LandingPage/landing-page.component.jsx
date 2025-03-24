import React from "react";
import "./landing-page.styles.scss";
import Navbar from "../../components/Navbar/navbar.component";
import Home from "../Home/home.component";
import About from "../About/about.component";
import Services from "../Services/services.component";
import Portfolio from "../Portfolio/portfolio.component";
import Skills from "../Skills/skills.component";
import Clients from "../Client/client.component";
import Contact from "../Contact/contact.component";
import Footer from "../../components/Footer/footer.component"; // added import

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-page">
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Clients />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
