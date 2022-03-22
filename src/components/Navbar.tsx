import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="position-sticky top-0 ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  py-4">
        <div className="container-fluid container-md text-uppercase">
          <div className="d-flex justify-content-between w-100 ">
          <NavLink
            to="/"
            className="nav-text text-decoration-none h4  text-dark fw-bolder "
          >
            Axole.
          </NavLink>
          <button
            className="navbar-toggler text-uppercase d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            menu
          </button>
          </div>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 ">
              <li className="nav-item active">
                <NavLink
                  to="/blog"
                  className="nav-link  text-decoration-none  px-0 px-md-4 small  "
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/about"
                  className="nav-link text-decoration-none  px-0 px-md-4 small"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/contact"
                  className="nav-link text-decoration-none  px-0 px-md-4 small "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
