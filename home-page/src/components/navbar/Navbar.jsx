import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar border-body" data-bs-theme="dark">
      <div className="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <div className="right d-flex align-items-center ">
        <ul className="d-flex ">
          <li>
            <a href="#">Home</a>
          </li>

          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Our Story
            </a>
            <ul class="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Who we are
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Our Team
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Success & ABILITY</a>
          </li>

          <li>
            <a href="#">Media</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Employment
            </a>
            <ul class="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Employment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Workshops & Events
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Programmes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  EmployABILITY
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Events
            </a>
            <ul class="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  CavinKare Awards
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Past Events
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <button type="button" class="btn">
            Let's Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
