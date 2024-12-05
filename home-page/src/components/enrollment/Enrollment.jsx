import "bootstrap/dist/css/bootstrap.min.css";
import "./enrollment.css";

const Enrollment = () => {
  return (
    <div className="enrollment container">
      <div className="row align-items-center d-flex justify-content-around">
        <div className="col-md-6 image-section d-flex align-items-center justify-content-between">
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/home3.jpg"
            alt="Couple"
            className="img-one rounded"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/home4.jpg"
            alt="Smiling woman"
            className="img-two rounded"
          />
        </div>
        <div className="col-md-6 text-section">
          <p className="badge">Success and Ability - Magazine</p>
          <h2 className="mb-4">
            Inclusive and insightful admissions for students with disabilities.
          </h2>
          <p className="mb-4">
            Ability Foundation and Sathyabama University offer merit-based
            admission to 50 students with disabilities for the year 2024-25 for
            undergraduate and postgraduate programmes. This unique offer opens
            up for immense possibilities for bright students with disabilities
            to get the best of university education.
          </p>
          <div className="button-group">
            <button type="button" className="btn">
              Click here to know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
