import "bootstrap/dist/css/bootstrap.min.css";
import "./magazine.css";

const Magazine = () => {
  return (
    <div className="magazine">
      <div className="container">
        <div className="row align-items-center d-flex justify-content-around">
          <div className="col-md-6 text-section">
            <p className="badge">Success and Ability - Magazine</p>
            <h2 className="mb-4">
              Connecting people with and without disabilities
            </h2>
            <p className="mb-4">
              Success & ABILITY is India’s cross-disability online accessible
              magazine. A powerful yet persuasive voice about disability and
              lifestyle issues, Success & ABILITY aims to inform, interest and
              inspire all readers. Dive into our magazine and join the
              conversation.
            </p>
            <div className="button-group">
              <button type="button" className="btn primary">
                <i className="fa-solid fa-book-open"></i>
                Know More
              </button>
              <button type="button" className="btn ">
                <i className="fa-regular fa-file-zipper"></i>
                Archives
              </button>
            </div>
          </div>
          <div className="col-md-6 image-section d-flex align-items-center justify-content-between">
            <img
              src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/home1.jpg"
              alt="Couple"
              className="img-one rounded"
            />
            <img
              src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/home2.jpg"
              alt="Smiling woman"
              className="img-two rounded"
            />
          </div>
        </div>
        <div className="all-cards">
          <div className="card">
            <img
              src="https://abilityfoundation.org/2024-new/wp-content/uploads/2024/02/Feature-Image-1-300x200.jpg"
              className="card-img-top"
              alt="Article 1"
            />
            <div className="card-body">
              <p className="card-text">
                The Transformative Power of AI: Empowering People who are Blind
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://abilityfoundation.org/2024-new/wp-content/uploads/2024/02/Feature-Image-1-1-300x200.jpg"
              className="card-img-top"
              alt="Article 2"
            />
            <div className="card-body">
              <p className="card-text ">
                Addressing the Urgent Need for Healthcare Equity: Comprehensive
                Coverage for Pre-existing Conditions
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://abilityfoundation.org/2024-new/wp-content/uploads/2024/02/Feature-Image-2-300x200.jpg"
              className="card-img-top"
              alt="Article 3"
            />
            <div className="card-body">
              <p className="card-text">I am ‘NORMAL’</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
