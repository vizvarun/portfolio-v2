import React, { useState, useEffect } from "react";
import "./client.styles.scss";
import avatar6 from "../../assets/images/avatar6.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar from "../../assets/images/avatar.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar3 from "../../assets/images/avatar3.png";

const Clients = () => {
  const testimonials = [
    {
      id: 1,
      avatar: avatar6,
      name: "Md. Abdullah",
      country: "USA",
      stars: 5,
      review:
        '"The project was executed with exceptional professionalism. The application functions flawlessly, meeting all requirements. I appreciate the attention to detail and timely delivery."',
    },
    {
      id: 2,
      avatar: avatar5,
      name: "Manish Jain",
      country: "India",
      stars: 5,
      review:
        '"An exceptional developer with remarkable skills. I highly recommend Varun for any front-end development project. I look forward to collaborating on future initiatives."',
    },
    {
      id: 3,
      avatar: avatar,
      name: "Md. Zeeshan",
      country: "Saudi Arabia",
      stars: 5,
      review:
        '"Varun demonstrated excellent mobile development expertise. His technical proficiency and commitment to quality make him a valuable asset. I anticipate engaging his services for future projects."',
    },
    {
      id: 4,
      avatar: avatar2,
      name: "Rajat Ghai",
      country: "India",
      stars: 5,
      review:
        '"Demonstrates exceptional proficiency in web design, consistently delivering solutions that exceed expectations."',
    },
    {
      id: 5,
      avatar: avatar4,
      name: "Sourav Sen",
      country: "India",
      stars: 4,
      review:
        '"I am thoroughly satisfied with the services provided. Varun demonstrates comprehensive knowledge and responds promptly to inquiries. His communication and technical abilities are commendable."',
    },
    {
      id: 6,
      avatar: avatar3,
      name: "Ankur Singh",
      country: "India",
      stars: 5,
      review:
        '"Varun possesses impressive UI development skills and consistently delivers projects ahead of schedule. His attention to detail and commitment to excellence are noteworthy."',
    },
  ];

  // Add state to track current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  // Add state to track slide direction for animation
  const [slideDirection, setSlideDirection] = useState("next");

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("next");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation functions
  const goToNext = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setSlideDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Handle dot navigation with proper animation direction
  const goToSlide = (index) => {
    setSlideDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  // Get current testimonial
  const currentTestimonial = testimonials[currentIndex];

  // Calculate previous and next indices for the faded cards
  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <div>
      <section id="client" className="client">
        <div className="testimonials-divider" />
        <div className="container">
          <div className="testimonials-header">
            <h4 className="testimonials-subtitle">Testimonials</h4>
            <h2 className="testimonials-title">Client Feedback</h2>
          </div>

          <div className="testimonials-carousel-container">
            <button onClick={goToPrev} className="nav-button prev-button">
              <span className="arrow">&#10094;</span>
            </button>

            <div className={`testimonials-carousel slide-${slideDirection}`}>
              {/* Previous card (faded) */}
              <div className="testimonial-card faded prev-card">
                <div className="client-info">
                  <img
                    src={testimonials[prevIndex].avatar}
                    alt={`${testimonials[prevIndex].name} avatar`}
                    className="client-avatar"
                  />
                  <div>
                    <h3 className="client-name">
                      {testimonials[prevIndex].name}
                    </h3>
                    <p className="client-country">
                      {testimonials[prevIndex].country}
                    </p>
                  </div>
                </div>
                <div className="star-rating">
                  {[...Array(testimonials[prevIndex].stars)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">
                  {testimonials[prevIndex].review}
                </p>
              </div>

              {/* Current card (active) */}
              <div className="testimonial-card active-card">
                <div className="client-info">
                  <img
                    src={currentTestimonial.avatar}
                    alt={`${currentTestimonial.name} avatar`}
                    className="client-avatar"
                  />
                  <div>
                    <h3 className="client-name">{currentTestimonial.name}</h3>
                    <p className="client-country">
                      {currentTestimonial.country}
                    </p>
                  </div>
                </div>

                <div className="star-rating">
                  {[...Array(currentTestimonial.stars)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>

                <p className="testimonial-text">{currentTestimonial.review}</p>
              </div>

              {/* Next card (faded) */}
              <div className="testimonial-card faded next-card">
                <div className="client-info">
                  <img
                    src={testimonials[nextIndex].avatar}
                    alt={`${testimonials[nextIndex].name} avatar`}
                    className="client-avatar"
                  />
                  <div>
                    <h3 className="client-name">
                      {testimonials[nextIndex].name}
                    </h3>
                    <p className="client-country">
                      {testimonials[nextIndex].country}
                    </p>
                  </div>
                </div>
                <div className="star-rating">
                  {[...Array(testimonials[nextIndex].stars)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">
                  {testimonials[nextIndex].review}
                </p>
              </div>
            </div>

            <button onClick={goToNext} className="nav-button next-button">
              <span className="arrow">&#10095;</span>
            </button>
          </div>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`indicator-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
