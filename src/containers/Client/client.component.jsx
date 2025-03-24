import React from "react";
import "./client.styles.scss";
import avatar6 from "../../assets/images/avatar6.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar from "../../assets/images/avatar.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar3 from "../../assets/images/avatar3.png";

const Clients = () => {
  // Create testimonials data to avoid repetition and add keys
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

  return (
    <div>
      <section id="client" className="client">
        <div className="testimonials-divider" />
        <div className="container">
          <div className="testimonials-header">
            <h4 className="testimonials-subtitle">Testimonials</h4>
            <h2 className="testimonials-title">Client Feedback</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="client-info">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="client-avatar"
                  />
                  <div>
                    <h3 className="client-name">{testimonial.name}</h3>
                    <p className="client-country">{testimonial.country}</p>
                  </div>
                </div>

                <div className="star-rating">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>

                <p className="testimonial-text">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
