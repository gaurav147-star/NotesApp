import { Link,useHistory } from "react-router-dom";
import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");

  };

  // let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <Link className="navbar-brand" to="/">
        NotesApp
      </Link> */}
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>*/} 

      <div className="conta" id="navbarSupportedContent">
        {/* <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul> */}
        {!localStorage.getItem("token") ? (
          <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-primary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">
              Sign up
            </Link>
          </form>
        ) : (
          <Link className="btn btn-primary mx-3" onClick={handleLogout} role="button">
          Logout
        </Link>
          // <button className="btn btn-primary mx-1" onClick={handleLogout}>
          //   Logout
          // </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
