import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: " #e3f2fd" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Task Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Addtask">
                Add task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
