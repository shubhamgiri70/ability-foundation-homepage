import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./articles.css";

const Articles = () => {
  const cards = [
    {
      img: "https://abilityfoundation.org/2024-new/wp-content/uploads/2024/01/freedom-today1-400x400.jpg",
      title: "Freedom Today (March 2019)",
      date: "January 8, 2024",
    },
    {
      img: "https://abilityfoundation.org/2024-new/wp-content/uploads/2024/01/cevincare-media-coverage-1.jpg",
      title: "Cevincare Media Coverage",
      date: "January 8, 2024",
    },
    {
      img: "https://abilityfoundation.org/2024-new/wp-content/uploads/2024/01/freedom-today1-400x400.jpg",
      title: "Freedom Today (March 2019)",
      date: "January 8, 2024",
    },
  ];

  return (
    <div className="articles">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="col-md-6 text-section">
          <p className="badge">Media & Publishing</p>
          <h2 className="mb-4">Empowering through information.</h2>
          <p className="mb-4">
            We at Ability Foundation aim to inform, interest and inspire
            everyone in the right way about disability, generating optimism, and
            empathy. We use various media, compelling stories, informative
            articles, and impactful visuals as we navigate the intersection of
            media and social impact. Join us to foster a community dedicated to
            knowledge, awareness, and advocacy.
          </p>
          <div className="button-group">
            <button type="button" className="btn">
              See Featured Articles
            </button>
          </div>
        </div>

        <div
          id="articleCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                {cards.map((card, index) => (
                  <div className="col-4" key={index}>
                    <div className="card">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="img-fluid card-img-top"
                      />
                      <div className="card-text">
                        <h6 className="card-title">{card.title}</h6>
                        <div className="date">
                          <i className="ri-calendar-event-line"></i> {card.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                {cards.map((card, index) => (
                  <div className="col-4" key={index}>
                    <div className="card">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="img-fluid card-img-top"
                      />
                      <div className="card-text">
                        <h6 className="card-title">{card.title}</h6>
                        <div className="date">
                          <i className="ri-calendar-event-line"></i> {card.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#articleCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#articleCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
