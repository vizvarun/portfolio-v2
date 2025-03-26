import React, { useState, useEffect } from "react";
import "./home.styles.scss";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const textArray = [
    "creating minimal interfaces.",
    "bridging aesthetics with functionality.",
    "innovating engaging experiences.",
    "optimizing performance and design.",
  ];

  // CSS for the blinking cursor
  const cursorStyle = {
    borderRight: "0.08em solid #666",
    animation: "blink-caret 0.75s step-end infinite",
    marginLeft: "2px",
    display: "inline-block",
    height: "1em",
  };

  // Keyframe animation for the CSS
  const blinkingCursorKeyframes = `
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #666 }
    }
  `;

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 70);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, textArray]);

  return (
    <div>
      <style>{blinkingCursorKeyframes}</style>
      <section className="landing">
        <div className="container">
          <span className="span" />
          <div className="row">
            <div className="col-lg-10 col-md-12">
              <h1 className="hero-text glitch">Hello, I'm Varun Vishal</h1>
              <h2 className="sub-text">
                A &nbsp;
                <span className="inner-span">Software Developer</span>,
                passionate about{" "}
                <span className="typewriter-text">
                  {displayText}
                  {/* bridging aesthetics with functionality. */}
                  <span style={cursorStyle}>&nbsp;</span>
                </span>
              </h2>
            </div>
            <div className="col-lg-2">
              <div className="social-container">
                <h4 className="follow-text">Follow me on</h4>
                <ul className="list-unstyled">
                  <a
                    href="https://github.com/vizvarun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li title="GitHub">
                      <i className="fab fa-github"></i>
                    </li>
                  </a>
                  <a
                    href="https://linkedin.com/in/vizvarun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li title="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </li>
                  </a>
                  <a
                    href="https://behance.net/vizvarun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li title="Behance">
                      <i className="fab fa-behance"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
