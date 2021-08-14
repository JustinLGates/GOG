import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Logout from "../Components/Logout";
import Login from "../Components/Login";
export const Nav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        LOGO(GAME)
      </Link>
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
          <li className="nav-item ">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>
          {isAuthenticated && (
            <li className="nav-item ">
              <Link className="nav-link" to="/profile">
                Projects
              </Link>
            </li>
          )}
        </ul>
        {isAuthenticated ? (<Logout />) : (<Login />)}
      </div>
    </nav>
  );
};
