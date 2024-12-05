import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://abilityfoundation.org/2024-new/wp-content/themes/ability/img/icon-footer.svg"
        alt=""
        className="icon"
      ></img>
      <div className="container all-text">
        <div className="uppertext d-flex">
          <h1>Let’s look beyond barriers. All it takes is an open mind.</h1>
          <div className="btn">
            <button>Get in touch</button>
          </div>
        </div>
        <div className="footerdown d-flex">
          <div className="left-nav  d-flex">
            <div className="about-us ">
              <h3>Ability Foundation</h3>
              <p>
                Ability Foundation works for the empowerment, integration and
                and mainstreaming persons with disabilities. We are the dreamers
                of a better world. A world without barriers.
              </p>
              <div className="socials">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
            <div className="links">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>Who are we</li>
                <li>Our Team</li>
                <li>Media</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="right-nav d-flex">
            <div className="employment">
              <h3>Employment</h3>
              <ul>
                <li>Employment</li>
                <li>Trainings & Workshops</li>
                <li>Access Audit Services</li>
                <li>EmployABILITY</li>
              </ul>
            </div>
            <div className="contact-us">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <i class="fa-solid fa-envelope me-1"></i>
                  information@abilityfoundation.org
                </li>
                <li>
                  <i class="fa-solid fa-phone me-1"></i>
                  +91 9962386773
                </li>
                <li>
                  <i class="fa-solid fa-phone me-1"></i>
                  +91 8939675544
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="fixed-icons">
        <i className="fa-solid fa-share-nodes"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </footer>
  );
};

export default Footer;
