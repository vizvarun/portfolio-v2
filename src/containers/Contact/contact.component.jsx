import React, { useState } from "react";
import "./contact.styles.scss";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        setErrorMessage("");
        setTimeout(() => setStatus(""), 5000); // hide success toast after 5 seconds
      } else {
        let errMsg = "";
        try {
          const response = JSON.parse(xhr.responseText);
          errMsg =
            response.error ||
            response.message ||
            "An error occurred while sending your message.";
        } catch (e) {
          errMsg = "An error occurred while sending your message.";
        }
        setErrorMessage(errMsg);
        setTimeout(() => setErrorMessage(""), 5000); // hide error toast after 5 seconds
      }
    };
    xhr.send(data);
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="contact-divider" />
        <div className="container">
          <div className="row about-row">
            <div className="col-lg-12 skills-text">
              <div className="contact-header">
                <h4 className="contact-subtitle">Let's work together</h4>
                <h2 className="contact-title">Contact me</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row contact-row">
        <div className="col-md-1 detailed" />
        <div className="col-md-5 detailed">
          <div className="contact-card contact-info-card">
            <div className="card-body">
              <div className="contact-head">
                <h3 className="contact-title">Email ID: </h3>
                <h5 className="contact-head-h5">
                  <a href="mailto:varunvishal10@gmail.com?Subject=Hello">
                    varunvishal10@gmail.com
                  </a>
                </h5>
                <h3 className="contact-title">Phone Number: </h3>
                <h5 className="contact-head-h5">
                  <a href="tel:8271256678">+91 8271256678</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          {/* Redesign form: wrap in card with a new class */}
          <div className="contact-card contact-form-card">
            <div className="card-body">
              <form
                onSubmit={submitForm}
                action="https://formspree.io/xayplryb"
                method="POST"
              >
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control"
                  name="name"
                />
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  className="grey-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormContactEmailEx"
                  className="form-control"
                  name="email"
                />

                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                  name="message"
                />
                <div className="text-center mt-4">
                  {status === "SUCCESS" ? (
                    <p className="success-message">
                      Your message has been successfully delivered
                    </p>
                  ) : (
                    <div className="btn-def resume-btn">
                      <button className="cta">
                        <span className="cta-text">Send Message</span>
                        <svg width="13px" height="10px" viewBox="0 0 15 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </button>
                    </div>
                  )}
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-1 detailed" />
      </div>
    </div>
  );
};

export default Contact;
