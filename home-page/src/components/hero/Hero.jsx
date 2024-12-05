import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="bg-img"></div>
      <div className="hero-content">
        <h1>
          We are committed to the inclusion and empowering of all persons with
          disabilities.
        </h1>
        <p>All it takes is an open mind.</p>
        <div className="hero-buttons">
          <button type="button" className="btn">
            Learn more
          </button>
          <button type="button" className="btn second">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
