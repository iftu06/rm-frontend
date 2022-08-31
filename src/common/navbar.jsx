import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const token = props.token;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menus">
              Menus
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Add Menu
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Add Product
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/modal-form">
              Roles
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/AddProduct">
              Add Product
            </Link>
          </li>

          {token ? (
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                User List
              </Link>
            </li>
          ) : null}

          {token ? (
            <li className="nav-item">
              <Link className="nav-link" onClick={props.handleLogout} to="#">
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
