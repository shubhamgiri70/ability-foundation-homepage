import "bootstrap/dist/css/bootstrap.min.css";
import "./employmentwing.css";

const EmploymentWing = () => {
  return (
    <div className="employmentwing">
      <div className="container d-flex align-items-center justify-content-around">
        <div className="employmentwing-img">
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/about1.webp"
            alt=""
            className="primary-img"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/arrow-curve.svg"
            alt=""
            className="secondary-img"
          />
        </div>
        <div className="employmentwing-content text-content">
          <p className="badge">Employment Wing</p>
          <h2>Promoting Equitable Employment Opportunities</h2>
          <p>
            Ensuring equitable employment opportunities for persons with
            disabilities has been the focus of Ability Foundation's Employment
            wing. On the one hand, to sensitise employers about the need to
            offer unbiased, equal opportunity employment, placing candidates
            with disability on par with others. On the other, working with
            qualified persons with disabilities to enhance their employment
            opportunities according to current market needs.
          </p>
          <div className="button-group">
            <button type="button" className="btn primary">
              Know More
            </button>
            <button type="button" className="btn ">
              Workshops & Events
            </button>
            <button type="button" className="btn primary">
              Programmes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentWing;
