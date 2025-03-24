import React, { useState, useEffect, useContext } from "react";
import "./navbar.styles.scss";
import { ThemeContext } from "../../contexts/theme.context";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const labels = [
    { title: "About", id: 0, href: "#about" },
    { title: "Services", id: 1, href: "#services" },
    { title: "Skills", id: 5, href: "#skills" },
    { title: "Portfolio", id: 2, href: "#portfolio" },
    { title: "Client", id: 3, href: "#client" },
    { title: "Contact", id: 4, href: "#contact" },
  ];

  const handleClick = () => {
    setCollapse(!collapse);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setCollapse(false);
    }
  };

  // Handle scroll events to add blur effect and border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-wrapper">
      <header>
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
          <div className="navbar-container">
            <a href="/" className="navbar-brand">
              <svg
                width="35px"
                height="35px"
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
            </a>

            {/* Mobile-only right group with hamburger and theme switcher */}
            <div className="mobile-right-group">
              <div className="navbar-toggler" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <button
                onClick={toggleTheme}
                className="theme-switcher mobile-only"
              >
                {theme === "light" ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>
            </div>

            <div className={`navbar-collapse ${collapse ? "show" : ""}`}>
              <ul className="navbar-nav">
                {labels.map((label) => (
                  <li className="nav-item" key={label.id}>
                    <a
                      href={label.href}
                      className="nav-link"
                      onClick={handleLinkClick}
                    >
                      {label.title}
                    </a>
                  </li>
                ))}

                {/* Desktop-only theme switcher that appears after nav links */}
                <li className="nav-item desktop-only theme-switcher-container">
                  <button onClick={toggleTheme} className="theme-switcher">
                    {theme === "light" ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
