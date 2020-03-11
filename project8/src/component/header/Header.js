import React, { Component } from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    QTemu <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Create Meetup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Explore
                  </a>
                </li>
              </ul>
              <div className="btn-login">
                <a className="nav-link" href="#">
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
