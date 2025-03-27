import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import "./scroll-to-top.styles.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top-btn ${theme === "dark" ? "dark" : "light"}`}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
