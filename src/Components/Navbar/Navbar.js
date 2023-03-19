import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    style={{ backgroundColor: "#408bd6" }}
    className="  navbar sticky-top navbar-expand-lg  navbar-dark "
  >
    <p className="navbar-brand"></p>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse  justify-content-center  "
      id="navbarText"
    >
      <ul className="navbar-nav  ">
        <li>
          <Link className="nav-link" style={{ color: "#e4ecf5" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" style={{ color: "#e4ecf5" }} to="/create">
            Create
          </Link>
        </li>
        <li>
          <Link className="nav-link" style={{ color: "#e4ecf5" }} to="/edit">
            Edit
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
