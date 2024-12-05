import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container d-flex align-items-center justify-content-around">
        <div className="about-img">
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/about5.webp"
            alt=""
            className="primary-img"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/arrow-curve.svg"
            alt=""
            className="secondary-img"
          />
        </div>
        <div className="about-content text-content">
          <p className="badge bg-light-green text-uppercase fw-bold">
            Who Are We
          </p>
          <h2 className="fw-bold">
            We are committed to empowering and mainstreaming persons with
            disabilities
          </h2>
          <p>
            Founded in 1995, with a philosophy much ahead of its time, Ability
            Foundation, headquartered in Chennai, has established itself as a
            national cross-disability umbrella organisation that has incessantly
            worked across the country towards an equitable society for every
            citizen with disability.
          </p>
          <button type="button" className="btn">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
