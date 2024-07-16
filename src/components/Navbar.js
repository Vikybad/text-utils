import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ "font-weight": "800" }}>
          {props.title}
        </Link>
        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`} >

          <input
            className="form-check-input"
            onClick={props.toggleMode}
            id="flexSwitchCheckDefault"
            type="checkbox"
          />

          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            <p className={`text-${props.mode === "light" ? "dark" : "light"}`} > {props.btnText} </p>
          </label>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Text Utilities",
};
